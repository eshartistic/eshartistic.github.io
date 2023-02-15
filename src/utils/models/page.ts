export class Page {

    constructor(
        private title: string = "",
        private icon: string = "",
        private routerLink: string = "") { }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getRouterLink(): string {
        return this.routerLink;
    }

    public setRouterLink(routerLink: string) {
        this.routerLink = routerLink;
    }

    public getIcon(): string {
        return this.icon;
    }

    public setIcon(icon: string) {
        this.icon = icon;
    }
}