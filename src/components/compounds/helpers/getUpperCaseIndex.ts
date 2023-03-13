export const getUpperCaseIndex = (formula: string): number => {
    const length: number = formula.length;

    for (let i = 0; i < length; i++) {
        if (/[A-Z]/.test(formula[i])) {
            return i;
        }
    }

    return -1;
};

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

export const getFirstElement = (formula: string): string => {
    return formula.slice(0, getUpperCaseIndex(formula) + 1);
};


export const getFirstTwoElements = (formula: string): string => {
    if (countUpperCaseCharacters(formula) < 2) {
        return ""
    } else {
        const upperCaseIndex: number = getUpperCaseIndex(formula);
        const upperCaseIndex2: number = getUpperCaseIndex(formula.slice(upperCaseIndex + 1)) + upperCaseIndex + 1;

        return formula.slice(0, upperCaseIndex2);
    }
};
