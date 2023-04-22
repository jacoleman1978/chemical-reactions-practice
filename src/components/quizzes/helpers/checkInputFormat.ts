export const checkFormulaFormat = (formula: string, name: string): string[] => {
    const comments: string[] = [];

    if (formula.includes(" ")) {
        comments.push(`${name}: There should be no spaces in the formula.`);
    }

    if (formula.includes("/")) {
        // Check that subscripts are surrounded by slashes, so there must be an even number of slashes
        let numberOfSlashes: number = 0;
        for (let i = 0; i < formula.length; i++) {
            if (formula[i] === "/") {
                numberOfSlashes++;
            }
        }
    
        if (numberOfSlashes % 2 !== 0) {
            comments.push(`${name}: Subscripts must be surrounded by '/' characters.`);
        }
    }

    return comments;
};
