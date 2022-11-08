import { Ion } from "../configurations/interfaces";
import { CompoundType } from "../../common/configurations/types";
import { mainGroupAnions } from "../configurations/ions/mainGroupAnions";
import { polyatomicAnions } from "../configurations/ions/polyatomicAnions";
import { acidAnions } from "../configurations/ions/acidAnions";

/**
 * Generates an array of anions depending on the ionic type passed in.
 * @param compoundType The type of compound practice as a type of Type
 * @returns An array of anions of type Ion
 */

export const makeAnionList = (compoundType: CompoundType): Ion[] => {
    if (compoundType === "ionic-main") {
        return [...mainGroupAnions]

    } else if (compoundType === "ionic-transition") {
        return [...mainGroupAnions]

    } else if (compoundType === "ionic-polyatomic") {
        return [...polyatomicAnions]

    } else if (compoundType === "ionic-mixed") {
        return [...mainGroupAnions, ...polyatomicAnions]

    } else if (compoundType === "acids") {
        return [...acidAnions]

    } 

    return []
}