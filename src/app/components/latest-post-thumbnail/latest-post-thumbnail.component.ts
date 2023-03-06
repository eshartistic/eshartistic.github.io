import {Component, Input, OnChanges} from '@angular/core';
import {Post} from "../../../utils/models/post";
import {DateUtil} from "../../../utils/DateUtil";

@Component({
    selector: 'app-latest-post-thumbnail',
    templateUrl: './latest-post-thumbnail.component.html',
    styleUrls: ['./latest-post-thumbnail.component.scss']
})
export class LatestPostThumbnailComponent implements OnChanges {

    public title: string = "";
    public summary: string = "";
    public timestamp: string = "";
    public thumbnail: string = "";

    @Input() post: Post = new Post();

    ngOnChanges(): void {
        if(this.post == undefined) {
            return;
        }

        this.title = this.post.title;
        this.timestamp = DateUtil.getDisplayableDate(this.post.timestamp);
        this.thumbnail = this.post.thumbnail;

        if(this.post.description.length > 250) {
            this.summary = this.post.description.substring(0, 250).concat("...");
        }
    }
}
