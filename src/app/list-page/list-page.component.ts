import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PostType } from 'src/utils/enums/postType';
import { PostService } from '../services/post.service';

@Component({
	selector: 'app-list-page',
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

	constructor(
		private postService: PostService
	) { }

	ngOnInit() {
		this.getPostList();
	}

	async getPostList() {
		await this.postService.getPosts(PostType.ART);
	}
}
