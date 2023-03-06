export const splitFormulaIntoParts = (formattedFormula: string): string[] => {
    // Check if the last character is a '/' and remove it if it is
    const length = formattedFormula.length;
    if (formattedFormula[length - 1] === "/") {
        formattedFormula = formattedFormula.slice(0, -1);
    }

    // Split the formula into an array of strings, including the subscripts
    return formattedFormula.split("/");
};
