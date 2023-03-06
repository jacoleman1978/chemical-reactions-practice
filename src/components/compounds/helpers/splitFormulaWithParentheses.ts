import { countUpperCaseCharacters } from "./getUpperCaseIndex";

export const splitFormulaWithParentheses = (formula: string): string[] => {
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
            secondCloseIndex = formula.indexOf(")", firstOpenIndex + 1);
        }

        // If there is a second set of parentheses, store the formula for the anion in "anion" and the following subscript in "anionSubscript"
        if (secondOpenIndex > firstCloseIndex) {
            anion = formula.slice(secondOpenIndex + 1, secondCloseIndex);
            anionSubscript = formula.slice(secondCloseIndex + 1, -1);

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

            anion = secondPart.slice(0, firstSlashIndex);
            anionSubscript = secondPart.slice(firstSlashIndex + 1, -1);

            return [cation, cationSubscript, anion, anionSubscript];
        } 
    // Formula does not start with "(", indicating that contents of the parentheses are the anion
    } if (firstOpenIndex > 0) {
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