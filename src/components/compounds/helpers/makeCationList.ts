import { Ion } from "../configurations/interfaces";
import { mainGroupCations } from "../configurations/ions/mainGroupCations";
import { transitionMetalCations } from "../configurations/ions/transitionMetalCations copy";
import { polyatomicCations } from "../configurations/ions/polyatomicCations";

export const makeCationList = (type: string): Ion[] => {
    if (type === "ionic-main") {
        return [...mainGroupCations]
    } else if (type === "ionic-transition") {
        return [...transitionMetalCations]
    } else if (type === "ionic-polyatomic") {
        return [...polyatomicCations, ...mainGroupCations]
    } else if (type === "ionic-mixed") {
        return [...mainGroupCations, ...transitionMetalCations, ...polyatomicCations]
    } else if (type === "acids") {
        let hydrogenIon: Ion = {
            ionName: "hydrogen",
            ionSymbol: ["H"],
            charge: 1,
            isPolyatomic: false,
        }
        return [hydrogenIon]
    }

    return []
}