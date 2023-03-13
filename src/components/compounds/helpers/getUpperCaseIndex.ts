/**
 * Get the index for the first uppercase character in a given string
 * @param formula A string representing a chemical formula
 * @returns A number representing the index of the first uppercase character in the string
 */
export const getUpperCaseIndex = (formula: string): number => {
    const length: number = formula.length;

    for (let i = 0; i < length; i++) {
        if (/[A-Z]/.test(formula[i])) {
            return i;
        }
    }

    return -1;
};

/**
 * Get the number of uppercase characters in a given string
 * @param formula A string representing a chemical formula
 * @returns A number representing the number of uppercase characters in the string
 */
export const countUpperCaseCharacters = (formula: string): number => {
    const length: number = formula.length;

    let count: number = 0;

    for (let i = 0; i < length; i++) {
        if (/[A-Z]/.test(formula[i])) {
            count++;
        }
    }

    return count;
};

/**
 * Get the first element in a given formula, which is the first uppercase character and any lowercase characters that follow
 * @param formula A string representing a chemical formula
 * @returns A string representing the first element in the formula
 */
export const getFirstElement = (formula: string): string => {
    return formula.slice(0, getUpperCaseIndex(formula) + 1);
};

/**
 * Get the first two elements in a given formula, which is the first uppercase character and any lowercase characters that follow, and the second uppercase character and any lowercase characters that follow
 * @param formula A string representing a chemical formula
 * @returns A string representing the first two elements in the formula
 */
export const getFirstTwoElements = (formula: string): string => {
    if (countUpperCaseCharacters(formula) < 2) {
        return ""
        
    } else {
        const upperCaseIndex: number = getUpperCaseIndex(formula);
        const upperCaseIndex2: number = getUpperCaseIndex(formula.slice(upperCaseIndex + 1)) + upperCaseIndex + 1;

        return formula.slice(0, upperCaseIndex2);
    }
};
