import { Page } from "./models/page";

export class AppConstants {

    public static pages: Page[] = [
        new Page("Art", "bi bi-palette-fill", "/post/art"),
        new Page("Design", "bi bi-image", "/post/design"),
        new Page("Photography", "bi bi-camera-fill", "/post/photography"),
        new Page("Craft", "bi bi-box-fill", "/post/craft"),
        new Page("About", "bi bi-person-fill", "/about")
    ]

}