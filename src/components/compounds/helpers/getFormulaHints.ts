import { splitFormula } from "./splitFormula";
import { getMolecularFormulaHints } from "./getMolecularFormulaHints";
import { CompoundType } from "../configurations/compoundTypes";
import { getTMFormulaHints } from "./getTMFormulaHints";
import { getPolyatomicFormulaHints } from "./getPolyatomicFormulaHints";
import { getAcidFormulaHints } from "./getAcidFormulaHints";
import { countUpperCaseCharacters } from "./getUpperCaseIndex";

/**
 * Get the first hint for a user's compound formula answer from a given compound name
 * @param userAnswer A string representing the user's answer to a compound formula
 * @param compoundFormula A string representing the correct compound formula
 * @param compoundType A string as a CompoundType type literal, indicating the type of compound
 * @returns A string indicating the first error encountered
 */
export const getFormulaHints = (userAnswer: string, compoundFormula: string, compoundType: CompoundType): string => {
    let hint: string = "";

    if (userAnswer === compoundFormula) {
        return "The formula of the compound is correct."
    }

    // Ensure that the user has entered an answer
    if (userAnswer.trim() === "") {
        return "Please enter a formula for the compound.";
    }

    // Check for spaces
    if (userAnswer.includes(" ")) {
        return "There should be no spaces in the formula.";
    }

    // Ensure that the formula starts with a capital letter or an opening parenthesis
    if (/\d/.test(userAnswer[0])) {
        return "Numbers are always written as subscripts after its element.";
    }

    // Check for subscript of 1
    if (userAnswer.includes("/1/")) {
        return "Subscripts of 1 are never written.";
    }

    // Check that subscripts are surrounded by slashes, so there must be an even number of slashes
    if (userAnswer.includes("/")) {
        let numberOfSlashes: number = 0;
        for (let i = 0; i < userAnswer.length; i++) {
            if (userAnswer[i] === "/") {
                numberOfSlashes++;
            }
        }
    
        if (numberOfSlashes % 2 !== 0) {
            return "Subscripts must be surrounded by '/' characters.";
        }
    }

    // Check if the user included parentheses, but the correct formula does not
    if ((userAnswer.includes("(") || userAnswer.includes(")")) && !compoundFormula.includes("(")) {
        return "Parentheses are only used for compounds with more than one of a polyatomic ion.";
    }

    // Check for two subscripts next to each other by checking for "//"
    if (/\d\/\/\d/.test(userAnswer) || /\d\/\d/.test(userAnswer)) {
        return "Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.";
    } 

    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, compoundType);
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, compoundType);

    // Check for subscripts in lowest common multiple for ionic compounds without parentheses
    if (compoundType === "ionic-main") {
        if (!areSubscriptsLCM(userCationSubscript, userAnionSubscript)) {
            return "The subscripts are not in the lowest whole number ratio.";
        }
    }

    // Tests for compounds containing transition metals. They must be on the list below
    if (compoundType === "ionic-transition" || compoundType === "ionic-mixed") {
        hint = getTMFormulaHints(userAnswer, compoundFormula, compoundType);

        if (hint !== "") {
            return hint;
        }
    }

    // Tests for polyatomic ions
    if (compoundType === "ionic-polyatomic" || compoundType === "ionic-mixed") {
        hint = getPolyatomicFormulaHints(userAnswer, compoundFormula, compoundType);

        if (hint !== "") {
            return hint;
        }
    }

    // Tests for acids
    if (compoundType === "acids") {
        hint = getAcidFormulaHints(userAnswer, compoundFormula);

        if (hint !== "") {
            return hint;
        }
    }

    // Give hints for 'molecular' compounds
    if (compoundType === "molecular") {
        hint = getMolecularFormulaHints(userAnswer, compoundFormula);

        if (hint !== "") {
            return hint;
        }
    }

    // Give hints for 'ionic-main' compounds
    if (compoundType === "ionic-main") {
        if (anion !== userAnion && countUpperCaseCharacters(userAnion) > 1) {
            return "Anion names ending in 'ide' are not polyatomic, except for cyanide and hydroxide.";
        }
    }

    if (cation !== userCation) {
        return "Check the formula for the cation."
    }

    if (anion !== userAnion) {
        return "Check the formula for the anion."
    }

    if (cationSubscript !== userCationSubscript) {
        return "Check the subscript for the cation."
    }

    if (anionSubscript !== userAnionSubscript) {
        return "Check the subscript for the anion."
    }
    
    return "Still need to build out"
};

/**
 * Check if the subscripts are in the lowest common multiple
 * @param userCationSubscript A string representing the user's cation subscript
 * @param userAnionSubscript A string representing the user's anion subscript
 * @returns A boolean indicating if the subscripts are in the lowest common multiple
 */
export const areSubscriptsLCM = (userCationSubscript: string, userAnionSubscript: string): boolean => {
    let isLCM: boolean = true;

    // Check if both subscripts are exactly divisible by 2, 3, or 5
    [2, 3, 5].forEach((num) => {                    
        if (Number(userCationSubscript) % num === 0 && Number(userAnionSubscript) % num === 0) {
            isLCM = false;
        }
    });

    return isLCM;
}