import { CompoundType } from "../configurations/compoundTypes";
import { countUpperCaseCharacters } from "./getUpperCaseIndex";

/**
 * Split a chemical formula into an array of strings, including the subscripts, which were surrounded by slashes
 * @param formattedFormula A string representing the user's answer to a compound formula
 * @returns A string array containing the formula for the cation, the subscript for the cation, the formula for the anion, and the subscript for the anion
 */
export const splitBySlashes = (formattedFormula: string): string[] => {
    // Check if the last character is a '/' and remove it if it is
    const length = formattedFormula.length;
    if (formattedFormula[length - 1] === "/") {
        formattedFormula = formattedFormula.slice(0, -1);
    }

    // Split the formula into an array of strings, including the subscripts
    return formattedFormula.split("/");
};

/**
 * Split a chemical formula containing parentheses into an array of strings
 * @param formula A string representing the user's answer to a compound formula
 * @returns A string array containing the formula for the cation, the subscript for the cation, the formula for the anion, and the subscript for the anion
 */
export const splitByParentheses = (formula: string): string[] => {
    const firstOpenIndex: number = formula.indexOf("(");
    const firstCloseIndex: number = formula.indexOf(")");

    if (firstOpenIndex === -1 || firstCloseIndex === -1) {
        return [];
    }

    let cation: string = "";
    let cationSubscript: string = "";
    let anion: string = "";
    let anionSubscript: string = "";

    // Formula starts with "(", indicating that contents of the parentheses are the ammonium ion
    if (firstOpenIndex === 0) {
        // Store the formula for the ammonium ion in "cation" and the following subscript in "cationSubscript". Since ammonium is in parentheses, the subscript must be greater than `1`
        cation = formula.slice(1, firstCloseIndex);
        cationSubscript = formula.slice(firstCloseIndex + 2, firstCloseIndex + 3);
        
        const secondOpenIndex: number = formula.indexOf("(", firstCloseIndex);
        let secondCloseIndex: number = -1;

        if (secondOpenIndex > -1) {
            secondCloseIndex = formula.indexOf(")", secondOpenIndex + 1);
        }

        // If there is a second set of parentheses, store the formula for the anion in "anion" and the following subscript in "anionSubscript"
        if (secondOpenIndex > firstCloseIndex) {
            anion = formula.slice(secondOpenIndex + 1, secondCloseIndex);
            anionSubscript = formula.slice(secondCloseIndex + 2, -1);

            return [cation, cationSubscript, anion, anionSubscript];
        }

        // If there is not a second set of parentheses, get the substring of the formula after the first set of parentheses and the subscript
        const secondPart: string = formula.slice(firstCloseIndex + 4);

        // Determine if the second part is a monatomic anion or a polyatomic anion by counting the number of uppercase characters
        const upperCaseCount: number = countUpperCaseCharacters(secondPart);
        const firstSlashIndex: number = secondPart.indexOf("/");

        // If there is more than one uppercase character, the second part is a polyatomic anion. Since there are no parentheses, the subscript must be `1`
        if (upperCaseCount > 1) {
            return [cation, cationSubscript, secondPart, "1"];
        }
        
        // If there is only one uppercase character, the second part is a monatomic anion. If there is not a slash, the subscript must be `1`
        if (firstSlashIndex === -1) {
            anion = secondPart;
            anionSubscript = "1";

            return [cation, cationSubscript, anion, anionSubscript];
        }

        [anion, anionSubscript] = splitBySlashes(secondPart);

        return [cation, cationSubscript, anion, anionSubscript];
    }

    // Formula does not start with "(", indicating that contents of the parentheses are the anion
    const firstPart: string = formula.slice(0, firstOpenIndex);
    
    if (firstPart.indexOf("/") === -1) {
        cation = firstPart;
        cationSubscript = "1";
    } else {
        [cation, cationSubscript] = firstPart.split("/");
    }

    anion = formula.slice(firstOpenIndex + 1, firstCloseIndex);
    anionSubscript = formula.slice(firstCloseIndex + 2, -1);

    return [cation, cationSubscript, anion, anionSubscript];
    
};

/**
 * Split a formula into an array of strings, each representing an element
 * @param formula A string representing the user's answer to a compound formula
 * @returns A string array containing the elements in the formula
 */
export const splitByElement = (formula: string): string[] => {
    const length: number = formula.length;
    if (length === 0) {
        return [];
    }

    if (/^[A-Za-z]+$/.test(formula) === false || /^[A-Z]+$/.test(formula[0]) === false) {
        return [];
    }

    const elementParts: string[] = [];
    let wasLastCharacterUpperCase: boolean = false;

    // Elements are represented by one uppercase character and may have one lowercase character following it
    for (let i = 0; i < length; i++) {
        if (/[A-Z]/.test(formula[i])) {
            if (wasLastCharacterUpperCase) {
                elementParts.push(formula[i-1]);

            } else {
                wasLastCharacterUpperCase = true;
            }

            if (i === length - 1) {
                elementParts.push(formula[i]);
            }

        } else {
            elementParts.push(formula.slice(i-1, i+1));
            wasLastCharacterUpperCase = false;
        }
    }
    
    return elementParts;
};

/**
 * Split a formula of a binary compound into an array of strings, each representing a part of the formula
 * @param formula 
 * @returns 
 */
export const splitBinaryFormula = (formula: string): [string, string, string, string] => {
    const formulaSplitBySlashes: string[] = splitBySlashes(formula);

    // There are no subscripts written, so the subscript for each element is `1`
    if (formulaSplitBySlashes.length === 1) {
        const formulaSplitByElement: string[] = splitByElement(formula);

        return [formulaSplitByElement[0], "1", formulaSplitByElement[1], "1"];

    // There is only one subscript written and it must be for the anion
    } else if (formulaSplitBySlashes.length === 2) {
        const formulaSplitByElement: string[] = splitByElement(formulaSplitBySlashes[0]);

        return [formulaSplitByElement[0], "1", formulaSplitByElement[1], formulaSplitBySlashes[1]];

    // There is only one subscript written and it must be for the cation
    } else if (formulaSplitBySlashes.length === 3) {
        return [formulaSplitBySlashes[0], formulaSplitBySlashes[1], formulaSplitBySlashes[2], "1"];

    // There are two subscripts written
    } else {
        return [formulaSplitBySlashes[0], formulaSplitBySlashes[1], formulaSplitBySlashes[2], formulaSplitBySlashes[3]];
    }
};

/**
 * Split a formula into an array of strings, each representing a part of the formula
 * @param formula A string representing a compound formula
 * @param compoundType A string of literal type CompoundType representing the type of compound
 * @returns A string array containing the parts of the formula: [cation, cationSubscript, anion, anionSubscript]
 */
export const splitFormula = (formula: string, compoundType: CompoundType): [string, string, string, string] => {
    let cation: string = "";
    let cationSubscript: string = "";
    let anion: string = "";
    let anionSubscript: string = "1";

    // Split formulas into parts for compounds with polyatomic ions
    if (formula.includes("(") && formula.includes(")")) {
        [cation, cationSubscript, anion, anionSubscript] = splitByParentheses(formula);

    // If there are only two uppercase characters, the formula is a binary compound, so split it into parts
    } else if (countUpperCaseCharacters(formula) === 2) {
        [cation, cationSubscript, anion, anionSubscript] = splitBinaryFormula(formula);

    // If the second character is a '/', the H has a subscript, otherwise it does not
    } else if (compoundType === "acids") {
        if (formula[1] === "/") {
            [cation, cationSubscript, anion, anionSubscript] = [formula[0], formula[2], formula.slice(4), "1"];

        } else {
            [cation, cationSubscript, anion, anionSubscript] = [formula[0], "1", formula.slice(1), "1"];
        }

    // The formula contains an ammonium ion, but does not have parentheses around it, so the ammonium has a subscript of 1
    } else if (formula.includes("NH/4/")) {
        [cation, cationSubscript, anion, anionSubscript] = ["NH/4/", "1", formula.slice(5), "1"];
        
    } else {
        const compoundFormulaSplitBySlashes: string[] = splitBySlashes(formula);
        const compoundFirstPartElements: string[] = splitByElement(compoundFormulaSplitBySlashes[0]);
        cation = compoundFirstPartElements[0];
        cationSubscript = compoundFirstPartElements.length === 1 ? compoundFirstPartElements[1] : "1";
        const cationCharLength: number = cation.length;
        if (cationSubscript === "1") {
            anion = formula.slice(cationCharLength);
        } else {
            anion = formula.slice(cationCharLength + 3);
        }
    }

    return [cation, cationSubscript, anion, anionSubscript]
};
