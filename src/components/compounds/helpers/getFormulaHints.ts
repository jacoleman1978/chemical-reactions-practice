import { splitFormulaIntoParts } from "./splitFormulaIntoParts";
import { splitFormulaWithParentheses } from "./splitFormulaWithParentheses";
import { getMolecularFormulaHints } from "./getMolecularFormulaHints";
import { CompoundType } from "../configurations/compoundTypes";

export const getFormulaHints = (userAnswer: string, compoundFormula: string, compoundType: CompoundType): string => {
    let hint: string = "";

    if (userAnswer === compoundFormula) {
        return "The formula of the compound is correct."
    }

    // Ensure that the user has entered an answer
    if (userAnswer.trim() === "") {
        return "Please enter a formula for the compound.";
    }

    if (userAnswer.includes(" ")) {
        return "There should be no spaces in the formula.";
    }

    const correctFormulaParts: string[] = splitFormulaIntoParts(compoundFormula);
    const userFormulaParts: string[] = splitFormulaIntoParts(userAnswer);

    userFormulaParts.forEach((part, i) => {
        if (i % 2 === 0) {
            if (/\d/.test(part)) {
                hint = "Numbers are always written as subscripts after its element."
            }
        } else {
            if (part === "1") {
                hint = "Subscripts of 1 are never written."
            }
        }
    });

    if (hint !== "") {
        return hint;
    }

    if (userFormulaParts.length < correctFormulaParts.length) {
        return "At least one subscript is missing.";
    } else if (userFormulaParts.length > correctFormulaParts.length) {
        return "There are too many subscripts.";
    }

    // Check for parentheses
    if (compoundFormula.includes("(")) {
        let cation: string = "";
        let cationSubscript: string = "";
        let anion: string = "";
        let anionSubscript: string = "";

        [cation, cationSubscript, anion, anionSubscript] = splitFormulaWithParentheses(compoundFormula);
    }

    // Give hints for 'molecular' compounds
    if (compoundType === "molecular") {
        hint = getMolecularFormulaHints(correctFormulaParts, userFormulaParts);

        if (hint !== "") {
            return hint;
        }
    }

    // Give hints for 'ionic-transition' compounds
    if (compoundType === "ionic-transition" || compoundType === "ionic-mixed") {
        
    }
    
    return "Still need to build out"
};
