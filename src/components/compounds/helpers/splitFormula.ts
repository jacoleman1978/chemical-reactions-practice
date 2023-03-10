import { CompoundType } from "../configurations/compoundTypes";
import { countUpperCaseCharacters } from "./getUpperCaseIndex";

export const splitBySlashes = (formattedFormula: string): string[] => {
    // Check if the last character is a '/' and remove it if it is
    const length = formattedFormula.length;
    if (formattedFormula[length - 1] === "/") {
        formattedFormula = formattedFormula.slice(0, -1);
    }

    // Split the formula into an array of strings, including the subscripts
    return formattedFormula.split("/");
};


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
        if (upperCaseCount === 1) {
            if (firstSlashIndex === -1) {
                anion = secondPart;
                anionSubscript = "1";

                return [cation, cationSubscript, anion, anionSubscript];
            }

            [anion, anionSubscript] = splitBySlashes(secondPart);

            return [cation, cationSubscript, anion, anionSubscript];
        } 
    // Formula does not start with "(", indicating that contents of the parentheses are the anion
    } else if (firstOpenIndex > 0) {
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
    }

    return []
};

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

    for (let i = 0; i < length; i++) {
        if (formula[i] === formula[i].toUpperCase()) {
            if (wasLastCharacterUpperCase) {
                elementParts.push(formula[i-1]);

            } else {
                wasLastCharacterUpperCase = true;
            }

            if (i === length - 1) {
                elementParts.push(formula[i]);
            }

        } else if (formula[i] === formula[i].toLowerCase()) {
            elementParts.push(formula.slice(i-1, i+1));
            wasLastCharacterUpperCase = false;
        }
    }
    
    return elementParts;
};

export const splitBinaryFormula = (formula: string): [string, string, string, string] => {
    const length: number = formula.length;

    const formulaSplitBySlashes: string[] = splitBySlashes(formula);

    if (formulaSplitBySlashes.length === 1) {
        const formulaSplitByElement: string[] = splitByElement(formula);

        return [formulaSplitByElement[0], "1", formulaSplitByElement[1], "1"];

    } else if (formulaSplitBySlashes.length === 2) {
        const formulaSplitByElement: string[] = splitByElement(formulaSplitBySlashes[0]);

        return [formulaSplitByElement[0], "1", formulaSplitByElement[1], formulaSplitBySlashes[1]];

    } else if (formulaSplitBySlashes.length === 3) {
        return [formulaSplitBySlashes[0], formulaSplitBySlashes[1], formulaSplitBySlashes[2], "1"];

    } else {
        return [formulaSplitBySlashes[0], formulaSplitBySlashes[1], formulaSplitBySlashes[2], formulaSplitBySlashes[3]];
    }
};

export const splitFormula = (formula: string, compoundType: CompoundType): [string, string, string, string] => {
    // Split formulas into parts
    let cation: string = "";
    let cationSubscript: string = "";
    let anion: string = "";
    let anionSubscript: string = "1";

    // Split formulas into parts for compounds with polyatomic ions
    if (formula.includes("(") && formula.includes(")")) {
        [cation, cationSubscript, anion, anionSubscript] = splitByParentheses(formula);

    } else if (countUpperCaseCharacters(formula) === 2) {
        [cation, cationSubscript, anion, anionSubscript] = splitBinaryFormula(formula);

    } else if (compoundType === "acids") {
        if (formula[1] === "/") {
            [cation, cationSubscript, anion, anionSubscript] = [formula[0], formula[2], formula.slice(4), "1"];

        } else {
            [cation, cationSubscript, anion, anionSubscript] = [formula[0], "1", formula.slice(1), "1"];
        }

    } else if (formula.includes("NH/4/")) {
        [cation, cationSubscript, anion, anionSubscript] = ["NH/4/", "1", formula.slice(5), "1"];
        
    } else {
        const compoundFormulaSplitBySlashes: string[] = splitBySlashes(formula);
        const compoundFirstPartElements: string[] = splitByElement(compoundFormulaSplitBySlashes[0]);
        cation = compoundFirstPartElements[0];
        cationSubscript = compoundFirstPartElements.length === 1 ? compoundFirstPartElements[1] : "1";
        const cationCharLength: number = cation.length;
        if (Number(cationSubscript) === 1) {
            anion = formula.slice(cationCharLength);
        } else {
            anion = formula.slice(cationCharLength + 3);
        }
    }

    return [cation, cationSubscript, anion, anionSubscript]
};
