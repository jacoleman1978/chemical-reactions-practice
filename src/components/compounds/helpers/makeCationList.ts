import { Ion } from "../configurations/interfaces";
import { Type } from "../../common/configurations/types";
import { mainGroupCations } from "../configurations/ions/mainGroupCations";
import { transitionMetalCations } from "../configurations/ions/transitionMetalCations";
import { polyatomicCations } from "../configurations/ions/polyatomicCations";

/**
 * Generates an array of cations depending on the ionic type passed in.
 * @param type The type of compound practice as a type of Type
 * @returns An array of cations of type Ion
 */

export const makeCationList = (type: Type): Ion[] => {
    if (type === "ionic-main") {
        return [...mainGroupCations]

    } else if (type === "ionic-transition") {
        return [...transitionMetalCations]

    } else if (type === "ionic-polyatomic") {
        return [...polyatomicCations, ...mainGroupCations]

    } else if (type === "ionic-mixed") {
        return [...mainGroupCations, ...transitionMetalCations, ...polyatomicCations]

    } else if (type === "acids") {
        // All acids use the hydrogen ion as their cation
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