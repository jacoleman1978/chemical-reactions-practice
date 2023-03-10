import { CompoundType } from "../configurations/compoundTypes";
import { areSubscriptsLCM } from "./getFormulaHints";
import { countUpperCaseCharacters } from "./getUpperCaseIndex";
import { splitFormula } from "./splitFormula";

export const getTMFormulaHints = (userAnswer: string, compoundFormula: string, compoundType: CompoundType): string => {
    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, compoundType);
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, compoundType);

    const subscriptsAreLCM: boolean = areSubscriptsLCM(userCationSubscript, userAnionSubscript);

    // Check for subscripts in lowest common multiple for ionic compounds without parentheses
    if (compoundType === "ionic-transition") {
        if (!subscriptsAreLCM) {
            return "The subscripts are not in the lowest whole number ratio.";
        }
    }

    const tmSymbolList: string[] = ["Cu", "Au", "Ti", "Fe", "Co", "Ni", "Pd", "Sn", "Pt", "Hg", "Pb", "Sc", "V", "Cr", "Mn", "Ru", "Re", "Mo", "W", "Os"];

    const isCationInTmSymbolList: boolean = tmSymbolList.some((tmSymbol) => {
        return userCation.includes(tmSymbol);
    });

    if (cation !== userCation) {
        if (!isCationInTmSymbolList) {
            return "Check the formula for the cation. A name with parentheses and Roman numerals indicates a transition metal cation.";
        }

        return "Check the formula for the cation.";
    }
    
    if (anion !== userAnion && compoundType === "ionic-transition") {
        if (countUpperCaseCharacters(userAnion) > 1) {
            return "Any ion name ending in '-ide', indicates a monatomic anion, except for hydroxide or cyanide. Check the formula for the anion."
        }
        
        return "Check the formula for the anion."
        
    }

    if (subscriptsAreLCM && cationSubscript !== userCationSubscript) {
        return "Check the subscript for the cation.";
    }

    if (subscriptsAreLCM && anionSubscript !== userAnionSubscript) {
        return "Check the subscript for the anion. Keep in mind that the Roman numeral after the cation name indicates the charge of the cation and is frequently the subscript for the anion.";
    }

    if (!subscriptsAreLCM) {
        return "The subscripts are not in the lowest whole number ratio.";
    }
    
    return "";
};
