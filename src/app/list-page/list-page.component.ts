import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostType} from 'src/utils/constants/postType';
import {PostService} from "../services/post.service";
import {Post} from "../../utils/models/post";
import {StringUtil} from "../../utils/StringUtil";

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

    public posts: Post[] = [];

    constructor(
        private postService: PostService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.getPostList(this.getPostType(this.router.url)).then((posts) => {
            this.posts = posts;

            this.posts.forEach((post) => {
                post.description = StringUtil.replaceNewLineWithBr(post.description);
            });
        })
    }

    private getPostList(postType: string) {
        return this.postService.getPostsByType(postType);
    }

    private getPostType(routeUrl: string): string {
        switch (routeUrl) {
            case "/post/design":
                return PostType.DESIGN
            case "/post/photography":
                return PostType.PHOTOGRAPHY
            case "/post/craft":
                return PostType.CRAFT
            default:
                return PostType.ART
        }
    }
}
