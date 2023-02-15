export class Post {

    constructor(
        private timestamp: Date = new Date(),
        private type: string = "",
        private title: string = "",
        private description: string = "",
        private photos: string[] = []
    ) { }

    setTimestamp(timestamp: Date) {
        this.timestamp = timestamp;
    }

    getTimestamp(): Date {
        return this.timestamp;
    }

    setType(type: string) {
        this.type = type;
    }

    getType(): string {
        return this.type;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getDescription(): string {
        return this.description;
    }

    setPhotos(photos: string[]) {
        this.photos = photos;
    }

    getPhotos(): string[] {
        return this.photos;
    }
}