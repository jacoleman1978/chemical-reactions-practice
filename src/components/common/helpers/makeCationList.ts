import { Ion } from "../../../interfaces";
import { mainGroupCations } from "../../../configurations/ions/mainGroupCations";
import { transitionMetalCations } from "../../../configurations/ions/transitionMetalCations copy";
import { polyatomicCations } from "../../../configurations/ions/polyatomicCations";

export const makeCationList = (type: string): Ion[] => {
    if (type === "ionic-main") {
        return [...mainGroupCations]
    } else if (type === "ionic-transition") {
        return [...transitionMetalCations, ...mainGroupCations]
    } else if (type === "ionic-polyatomic") {
        return [...polyatomicCations]
    } else if (type === "ionic-mixed") {
        return [...mainGroupCations, ...transitionMetalCations, ...polyatomicCations]
    }

    return []
}