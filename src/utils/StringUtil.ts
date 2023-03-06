export class StringUtil {

    public static replaceNewLineWithBr(data: string): string {
        return data.replaceAll("\n", "<br>");
    }

    public static replaceBrWithNewLine(data: string): string {
        return data.replaceAll("<br>", "\n");
    }
}
