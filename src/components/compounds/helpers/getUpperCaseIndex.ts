export const getUpperCaseIndex = (formula: string): number => {
    const length: number = formula.length;

    for (let i = 0; i < length; i++) {
        if (formula[i] === formula[i].toUpperCase()) {
            return i;
        }
    }

    return -1;
};

export const countUpperCaseCharacters = (formula: string): number => {
    const length: number = formula.length;

    let count: number = 0;

    for (let i = 0; i < length; i++) {
        if (formula[i] === formula[i].toUpperCase()) {
            count++;
        }
    }

    return count;
};
