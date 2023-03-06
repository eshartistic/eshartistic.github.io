export class Post {

    constructor(
        private _timestamp: Date = new Date(),
        private _type: string = "",
        private _title: string = "",
        private _description: string = "",
        private _status: string = "",
        private _thumbnail: string = "",
        private _coverPhoto: string = "",
        private _photos: string[] = []
    ) {
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    set timestamp(value: Date) {
        this._timestamp = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    set thumbnail(value: string) {
        this._thumbnail = value;
    }

    get coverPhoto(): string {
        return this._coverPhoto;
    }

    set coverPhoto(value: string) {
        this._coverPhoto = value;
    }

    get photos(): string[] {
        return this._photos;
    }

    set photos(value: string[]) {
        this._photos = value;
    }

    public addPhotos(url: string) {
        this._photos.push(url);
    }
}
