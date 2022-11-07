import { Ion } from "../configurations/interfaces";
import { Type } from "../../common/configurations/types";
import { mainGroupAnions } from "../configurations/ions/mainGroupAnions";
import { polyatomicAnions } from "../configurations/ions/polyatomicAnions";
import { acidAnions } from "../configurations/ions/acidAnions";

/**
 * Generates an array of anions depending on the ionic type passed in.
 * @param type The type of compound practice as a type of Type
 * @returns An array of anions of type Ion
 */

export const makeAnionList = (type: Type): Ion[] => {
    if (type === "ionic-main") {
        return [...mainGroupAnions]

    } else if (type === "ionic-transition") {
        return [...mainGroupAnions]

    } else if (type === "ionic-polyatomic") {
        return [...polyatomicAnions]

    } else if (type === "ionic-mixed" || type === "mixed") {
        return [...mainGroupAnions, ...polyatomicAnions]

    } else if (type === "acids") {
        return [...acidAnions]

    } 

    return []
}