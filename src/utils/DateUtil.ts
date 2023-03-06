import {AppConstants} from "./AppConstants";

export class DateUtil {

    public static getDisplayableDate(datetime: Date): string {
        return datetime.getDate() + " " + AppConstants.monthMap.get(datetime.getMonth()) + " " + datetime.getFullYear();
    }

    public static getDisplayableTime(datetime: Date): string {
        return datetime.getHours() + ":" + datetime.getMinutes();
    }
}
