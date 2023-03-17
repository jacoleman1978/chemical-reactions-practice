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

    // Check user answers with '/' in them
    if (userAnswer.includes("/")) {
        // Check for '/d+/d+/, where d is a number
        if (/\/\d+\/\d+\//.test(userAnswer)) {
            return "There should be no numbers next to each other in a formula. Usually this can be fixed by putting the polyatomic ion in parentheses.";
        }
        // Check that subscripts are surrounded by slashes, so there must be an even number of slashes
        let numberOfSlashes: number = 0;
        for (let i = 0; i < userAnswer.length; i++) {
            if (userAnswer[i] === "/") {
                numberOfSlashes++;
            }
        }
    
        if (numberOfSlashes % 2 !== 0) {
            return "Subscripts must be surrounded by '/' characters.";
        }

        // Check that the odd indexes (subscript) are numbers
        const splitUserAnswer: string[] = userAnswer.split("/");
        for (let i = 1; i < splitUserAnswer.length; i++) {
            if (i % 2 === 1 && (!/\d+/.test(splitUserAnswer[i]) || /[a-zA-Z]/.test(splitUserAnswer[i]))) {
                return "Subscripts must be a number. Check that a number is written between the '/' characters, or remove the slashes.";
            }
        }
    // Check that numbers are not written unless there are subscripts, determined by the presence of '/'
    } else if (/\d/.test(userAnswer)) {
        return "Numbers in a formula are subscripts, which must be surrounded by '/' characters.";
    }

    // Check if the user included parentheses, but the correct formula does not
    if ((userAnswer.includes("(") || userAnswer.includes(")")) && !compoundFormula.includes("(")) {
        return "There should not be parentheses. Parentheses are only used for compounds with more than one of a polyatomic ion.";
    }

    // Check for two subscripts next to each other by checking for "//"
    if (/\d\/\/\d/.test(userAnswer) || /\d\/\d/.test(userAnswer)) {
        return "Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.";
    } 

    // Ensure that the first character of the user's answer is a capital letter
    if (/[a-z]/.test(userAnswer[0])) {
        return "All elements begin with a capital letter. Check the formula for the cation.";
    }

    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, compoundType);
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, compoundType);

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
        // Check that the subscripts are in the lowest whole number ratio
        if (!areSubscriptsLCM(userCationSubscript, userAnionSubscript)) {
            return "The subscripts are not in the lowest whole number ratio.";
        }

        // Check for user entering 'P' for potassium
        if (cation === "K" && userCation === "P") {
            return "The symbol for potassium is not 'P', which is the symbol for phosphorus.";
        }

        // Check for user entering 'S' for sodium
        if (cation === "Na" && userCation === "S") {
            return "The symbol for sodium is not 'S', which is the symbol for sulfur.";
        }

        // 'ionic-main' compounds should not have polyatomic ions
        if (anion !== userAnion && countUpperCaseCharacters(userAnion) > 1) {
            return "Anion names ending in 'ide' are not polyatomic, except for cyanide and hydroxide.";
        }
    }

    // Check that the user's cation is the same as the correct cation
    if (cation !== userCation) {
        return "Check the formula for the cation."
    }

    // Check that the user's anion is the same as the correct anion
    if (anion !== userAnion) {
        // Check that the user's anion begins with a capital letter
        if (/[a-z]/.test(userAnion[0])) {
            return "All elements begin with a capital letter. Check the formula for the anion.";
        }

        return "Check the formula for the anion."
    }

    if (cationSubscript !== userCationSubscript) {
        return "Check the subscript for the cation."
    }

    if (anionSubscript !== userAnionSubscript) {
        return "Check the subscript for the anion."
    }
    
    return ""
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