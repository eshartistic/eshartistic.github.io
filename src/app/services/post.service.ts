import {Injectable} from '@angular/core';
import {DBService} from './db.service';
import {Post} from "../../utils/models/post";
import {parse} from 'date-fns';
import {AppConstants} from "../../utils/AppConstants";
import {el} from "date-fns/locale";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private dbService: DBService) {
    }

    public getPostsByType(postType: string): Promise<Post[]> {
        return new Promise(async (resolve, reject) => {
            let posts: Post[] = [];

            await this.dbService.getData().then((res) => {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].Status == "Deleted" || res[i].Type != postType) {
                        continue;
                    }

                    const post = posts.find((p) => p.title === res[i].Title);

                    if (post) {
                        post.photos = post.photos.concat(this.parsePhotoUrlFromCSV(res[i].Photos));
                    } else {
                        let newPost: Post = new Post(
                            parse(res[i].Timestamp, AppConstants.dateTimeFormat, new Date()),
                            res[i].Type,
                            res[i].Title,
                            res[i].Description,
                            res[i].Status,
                            this.parsePhotoIdFromUrl(res[i].Thumbnail),
                            this.parsePhotoIdFromUrl(res[i].Cover),
                            this.parsePhotoUrlFromCSV(res[i].Photos)
                        );

                        posts.push(newPost);
                    }
                }

                posts.sort((p1, p2) => p2.timestamp.getTime() - p1.timestamp.getTime());

                resolve(posts);
            }).catch((err) => {
                console.error(err)
                reject(new Error(err));
            });
        });
    }

    private parsePhotoUrlFromCSV(csv: string): string[] {
        const regex = /((?<==)[^=,]*)/g;
        const match = csv.match(regex);

        let baseUrl = "https://drive.google.com/uc?export=view&id=";
        let photos: string[] = [];

        if (match) {
            match.forEach((photo) => {
                photos.push(baseUrl.concat(photo))
            });
        }

        return photos;
    }

    private parsePhotoIdFromUrl(url: string): string {

        if (url == undefined) {
            return "";
        }

        const regex = /(?<==)\w*/;
        const match = url.match(regex);

        let baseUrl = "https://drive.google.com/uc?export=view&id=";

        if (match) {
            let mainUrl: string = "";
            match.forEach((photo) => {
                mainUrl = baseUrl.concat(photo);
            });

            return mainUrl;
        } else {
            return "";
        }
    }
}
