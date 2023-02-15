import { Injectable } from '@angular/core';
import { PostType } from 'src/utils/enums/postType';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private dbService: DBService) { }

  async getPosts(postType: PostType) {
    await this.dbService.getData().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
}
