import { CompoundType } from "../configurations/compoundTypes";
import { areSubscriptsLCM } from "./getFormulaHints";
import { splitFormula } from "./splitFormula";

/**
 * Get the first hint for a user's polyatomic formula answer from a given compound name
 * @param userAnswer A string representing the user's answer to a compound formula
 * @param compoundFormula A string representing the correct compound formula
 * @param compoundType A string as a CompoundType type literal, indicating the type of compound
 * @returns The first hint encountered
 */
export const getPolyatomicFormulaHints = (userAnswer: string, compoundFormula: string, compoundType: CompoundType): string => {
    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, compoundType);
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, compoundType);

    // Check that the subscripts are in the lowest whole number ratio
    const subscriptsAreLCM: boolean = areSubscriptsLCM(userCationSubscript, userAnionSubscript);

    // Check that if there is an opening parenthesis, there is also a closing parenthesis
    if (userAnswer.includes("(") || userAnswer.includes(")")) {
        if (!userAnswer.includes("(")) {
            return "Parentheses come in pairs. You are missing an opening parenthesis.";
        } 
    }

    // Check if the correct answer has parentheses, then check the subscripts for both the cation and anion
    if (compoundFormula.includes("(")) {
        if (cationSubscript !== userCationSubscript) {
            // Check that the subscripts are in the lowest whole number ratio
            if (!subscriptsAreLCM) {
                return "The subscripts are not in the lowest whole number ratio.";
            }

            return "Check the subscript for the cation.";

        } else if (anionSubscript !== userAnionSubscript) {
            return "Check the subscript for the anion.";
        } 
    }

    // All anions starting with "H", have names starting with "bi", such as "bicarbonate", "bisulfate", "bisulfite"
    if (anion[0] === "H" && userAnion[0] !== "H") {
        return "Anion names starting with the 'bi' prefix indicate that the anion has an 'H' at the beginning of its formula. Please do not confuse it with the Greek prefix 'di' for molecular compounds."
    }

    // Oxyanions are anions that have oxygen and another element, but the number of oxygens vary. This affects the name of the anion, specifically suffixes and potential prefixes
    const oxyanionRootList: string[] = ["BrO", "ClO", "IO", "NO", "SO", "SeO", "TeO", "AsO", "PO"];

    const isCorrectAnionInOxyanionRootList: boolean = oxyanionRootList.some((oxyanionRoot) => {
        return anion.includes(oxyanionRoot);
    });
    const isUserAnionInOxyanionRootList: boolean = oxyanionRootList.some((oxyanionRoot) => {
        return userAnion.includes(oxyanionRoot);
    });

    // Must recognize that anion names ending in '-ite' or '-ate' are oxyanions
    if (isCorrectAnionInOxyanionRootList && !isUserAnionInOxyanionRootList) {
        return "Any ion name ending in '-ite' or '-ate', indicates a polyatomic anion. Check the formula for the anion."
    }

    // Correct elements in the anion, however the number of oxygens is incorrect
    if (cation.slice(0, 2) === userCation.slice(0, 2) &&isCorrectAnionInOxyanionRootList && isUserAnionInOxyanionRootList && anion.slice(0,2) === userAnion.slice(0,2)) {
        return "Check the number of oxygens in the formula using the oxyanion naming pattern.";
    }

    return "";
};
