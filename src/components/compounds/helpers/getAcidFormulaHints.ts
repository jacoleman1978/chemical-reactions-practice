import { getFirstElement, getFirstTwoElements } from "./getUpperCaseIndex";
import { splitFormula } from "./splitFormula";
/**
 * Retrieve the first hint for a user's answer to an acid formula
 * @param userAnswer A string representing the user's answer to an acid formula
 * @param compoundFormula A string representing the correct acid formula
 * @returns A string representing the first hint for the user's answer
 */
export const getAcidFormulaHints = (userAnswer: string, compoundFormula: string): string => {
    // Formulas for polyatomic ions, separated by suffix
    const ideAcidAnions: string[] = ["F", "Cl", "Br", "I", "CN"];
    const iteAcidAnions: string[] = ["BrO", "BrO/2/", "ClO", "ClO/2/", "IO", "IO/2/", "NO/2/", "SO/3/", "SeO/3/", "TeO/3/", "AsO/3/", "PO/3/"];
    const ateAcidAnions: string[] = ["CH/3/COO", "BrO/3/", "BrO/4/", "ClO/3/", "ClO/4/", "IO/3/", "IO/4/", "NO/3/", "CO/3/", "C/2/O/4/", "CrO/4/", "Cr/2/O/7/", "SO/4/", "SeO/4/", "TeO/4/", "AsO/4/", "PO/4/"];

    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, "acids");
    const formulaParts = splitFormula(compoundFormula, "acids");
    const cationSubscript: string = formulaParts[1];
    const anion: string = formulaParts[2];

    // Check that the cation is a hydrogen ion, since all acids begin with H
    if (userCation !== "H") {
        return "All acid formulas start with an 'H'."
    }

    // Check that the anion subscript is 1, since the +1 charge of the hydrogen ion will determine the subscript
    if (Number(userAnionSubscript) > 1) {
        return "All acid formulas begin with 'H', which has a charge of +1. As a result there will only be one acid anion in the formula. Remove the anion subscript or select the correct polyatomic anion."
    }

    // Check that the cation subscript is equal to the charge of the anion
    if (userCationSubscript !== cationSubscript) {
        return "Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'."
    }

    // Hints for incorrect anions
    if (userAnion !== anion) {
        // Get the first two elements of the anion and userAnion to determine if the user entered a different oxyanion
        const firstTwoElements: string = getFirstTwoElements(anion);
        const firstTwoUserElements: string = getFirstTwoElements(userAnion);
        const firstElement: string = getFirstElement(anion);
        const firstUserElement: string = getFirstElement(userAnion);

        // If the name of the acid followed the pattern of ____ic acid, then the 'ate' oxyanion is used.
        if (ateAcidAnions.includes(anion) && (firstTwoElements === firstTwoUserElements || firstElement === firstUserElement)) {
            return "Check the anion formula. If the name has the pattern of ____ic acid, without a 'hydro' prefix, then the anion will end in 'ate'."

        // If the name of the acid followed the pattern of ____ous acid, then the 'ite' oxyanion is used.
        } else if (iteAcidAnions.includes(anion) && (firstTwoElements === firstTwoUserElements || firstElement === firstUserElement)) {
            return "Check the anion formula. If the name has the pattern of ____ous acid, then the anion will end in 'ite'."
        
        // If the name of the acid followed the pattern of hydro____ic acid, then the 'ide' oxyanion is used.
        } else if (ideAcidAnions.includes(anion) && firstElement === firstUserElement) {
            return "Check the anion formula. If the name has the pattern of hydro____ic acid, then the anion will end in 'ide'."
        }

        return "Check the formula for the anion."
    }

    return ""
};
