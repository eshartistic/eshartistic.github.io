import {Page} from "./models/page";

export class AppConstants {

    public static readonly pages: Page[] = [
        new Page("Art", "bi bi-palette-fill", "/post/art"),
        new Page("Design", "bi bi-image", "/post/design"),
        new Page("Photography", "bi bi-camera-fill", "/post/photography"),
        new Page("Craft", "bi bi-box-fill", "/post/craft"),
        new Page("About", "bi bi-person-fill", "/about")
    ];

    public static readonly dateTimeFormat: string = "dd/MM/yyyy HH:mm:ss";

    public static readonly monthMap = new Map([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "September"],
        [10, "October"],
        [11, "November"],
        [12, "December"]
    ]);


}
