import { Ion } from "../../../interfaces";
import { mainGroupAnions } from "../../../configurations/ions/mainGroupAnions";
import { polyatomicAnions } from "../../../configurations/ions/polyatomicAnions";

export const makeAnionList = (type: string): Ion[] => {
    if (type === "ionic-main") {
        return [...mainGroupAnions]
    } else if (type === "ionic-transition") {
        return [...mainGroupAnions]
    } else if (type === "ionic-polyatomic") {
        return [...polyatomicAnions]
    } else if (type === "ionic-mixed" || type === "mixed") {
        return [...mainGroupAnions, ...polyatomicAnions]
    }

    return []
}