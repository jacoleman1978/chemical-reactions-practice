import { CompoundType } from "../configurations/compoundTypes";
import { areSubscriptsLCM } from "./getFormulaHints";
import { countUpperCaseCharacters } from "./getUpperCaseIndex";
import { splitFormula } from "./splitFormula";

/**
 * Get the first hint for a user's transition metal compound formula answer from a given compound name
 * @param userAnswer A string representing the user's answer to a compound formula
 * @param compoundFormula A string representing the correct compound formula
 * @param compoundType A string as a CompoundType type literal, indicating the type of compound
 * @returns The first hint for the user's answer
 */
export const getTMFormulaHints = (userAnswer: string, compoundFormula: string, compoundType: CompoundType): string => {
    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, compoundType);
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, compoundType);

    // Check if the subscripts are in the lowest common multiple
    const subscriptsAreLCM: boolean = areSubscriptsLCM(userCationSubscript, userAnionSubscript);

    // Check for subscripts in lowest common multiple for ionic compounds without polyatomic ions
    if (compoundType === "ionic-transition") {
        if (!subscriptsAreLCM) {
            return "The subscripts are not in the lowest whole number ratio.";
        }
    }

    if (cation !== userCation) {
        // Check for mistakes with elements that have symbols based upon their Latin names
        if (["Cu", "Au", "Fe", "Sn", "Hg", "Pb", "W"].includes(cation)) {
            return "Check the formula for the cation. The symbol is based on its Latin name, not its English name.";
        }

        return "Check the formula for the cation.";
    }
    
    if (anion !== userAnion && compoundType === "ionic-transition") {
        // Check that the first letter of the anion is capitalized
        if (/[a-z]/.test(userAnion[0])) {
            return "All elements begin with a capital letter. Check the formula for the anion.";
        }

        // If the anion has more than one uppercase character or element, it is not a polyatomic ion
        if (countUpperCaseCharacters(userAnion) > 1) {
            return "Any ion name ending in '-ide', indicates a monatomic anion, except for hydroxide or cyanide. Check the formula for the anion."
        }
        
        return "Check the formula for the anion."
        
    }

    // The cation's subscript is in the lowest common multiple, but incorrect
    if (subscriptsAreLCM && cationSubscript !== userCationSubscript) {
        return "Check the subscript for the cation.";
    }

    // The anion's subscript is in the lowest common multiple, but incorrect. The cation's Roman numeral is the cation's charge and often the anion's subscript
    if (subscriptsAreLCM && anionSubscript !== userAnionSubscript) {
        return "Check the subscript for the anion. Keep in mind that the Roman numeral after the cation name indicates the charge of the cation and is frequently the subscript for the anion.";
    }

    // Check that the subscripts are in the lowest common multiple
    if (!subscriptsAreLCM) {
        return "The subscripts are not in the lowest whole number ratio.";
    }
    
    return "";
};
