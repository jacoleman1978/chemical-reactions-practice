import { areSubscriptsLCM } from "./getFormulaHints";
import { getFirstElement, getFirstTwoElements } from "./getUpperCaseIndex";
import { splitFormula } from "./splitFormula";

export const getAcidFormulaHints = (userAnswer: string, compoundFormula: string): string => {
    const ideAcidAnions: string[] = ["F", "Cl", "Br", "I", "CN"];
    const iteAcidAnions: string[] = ["BrO", "BrO/2/", "ClO", "ClO/2/", "IO", "IO/2/", "NO/2/", "SO/3/", "SeO/3/", "TeO/3/", "AsO/3/", "PO/3/"];
    const ateAcidAnions: string[] = ["CH/3/COO", "BrO/3/", "BrO/4/", "ClO/3/", "ClO/4/", "IO/3/", "IO/4/", "NO/3/", "CO/3/", "C/2/O/4/", "CrO/4/", "Cr/2/O/7/", "SO/4/", "SeO/4/", "TeO/4/", "AsO/4/", "PO/4/"];

    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, "acids");
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, "acids");

    if (userCation !== "H") {
        return "All acid formulas start with an 'H'."
    }

    if (Number(userAnionSubscript) > 1) {
        return "All acid formulas begin with 'H', which has a charge of +1. As a result there will only be one acid anion in the formula."
    }

    if (userCationSubscript !== cationSubscript) {
        return "Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'."
    }

    if (userAnion !== anion) {
        const firstTwoElements: string = getFirstTwoElements(anion);
        const firstTwoUserElements: string = getFirstTwoElements(userAnion);

        if (ateAcidAnions.includes(anion) && firstTwoElements === firstTwoUserElements) {
            return "Check the anion formula. If the name has the pattern of ____ic acid, without a 'hydro' prefix, then the anion will end in 'ate'."

        } else if (iteAcidAnions.includes(anion) && firstTwoElements === firstTwoUserElements) {
            return "Check the anion formula. If the name has the pattern of ____ous acid, then the anion will end in 'ite'."
            
        } else if (ideAcidAnions.includes(anion) && getFirstElement(anion) === getFirstElement(userAnion)) {
            return "Check the anion formula. If the name has the pattern of hydro____ic acid, then the anion will end in 'ide'."
        }

        return "Check the formula for the anion."
    }

    return ""
};
