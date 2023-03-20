import { splitFormula } from "./splitFormula";

/**
 * Get the first hint for a user's molecular formula answer from a given compound name
 * @param userAnswer A string representing the user's answer to a molecular formula
 * @param compoundFormula A string representing the correct molecular formula
 * @returns The first hint encountered
 */
export const getMolecularFormulaHints = (userAnswer: string, compoundFormula: string): string => {
    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, "molecular");
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, "molecular");

    if (cation !== userCation) {
        return "Check the formula for the first element."
    }

    if (anion !== userAnion) {
        return "Check the formula for the second element."
    }

    // Check that the subscripts match the Greek prefixes for both the cation and anion
    if (cationSubscript !== userCationSubscript) {
        // User used the Greek prefix as a charge instead of a subscript
        if (userCationSubscript === anionSubscript && userAnionSubscript === cationSubscript) {
            return "The Greek prefixes indicate how many of the element directly after it is in the compound. The prefix is NOT the charge."
        }

        // When no Greek prefix is present for the first element in a molecular compound, that indicates that there is only one of that element
        if (cationSubscript === "1") {
            return "When no Greek prefix is present for the first element in a molecular compound, that indicates that there is only one of that element. Remove the subscript for the first element."
        }

        return `The Greek prefix for the first element indicates what number to use for the subscript. The prefix '${convertToGreekPrefix(cationSubscript)}' does not equal ${userCationSubscript}.`
    }

    if (anionSubscript !== userAnionSubscript) {
        return `The Greek prefix for the second element indicates what number to use for the subscript. The prefix '${convertToGreekPrefix(anionSubscript)}' does not equal ${userAnionSubscript}.`
    }

    return "";
};

/**
 * Convert a number as a string into its Greek prefix
 * @param number A string representing a number
 * @returns The Greek prefix for that number
 */
export const convertToGreekPrefix = (number: string): string => {
    switch (number) {
        case "1":
            return "mono";
        case "2":
            return "di";
        case "3":
            return "tri";
        case "4":
            return "tetra";
        case "5":
            return "penta";
        case "6":
            return "hexa";
        case "7":
            return "hepta";
        case "8":
            return "octa";
        case "9":
            return "nona";
        case "10":
            return "deca";
        default:
            return "";
    }
}