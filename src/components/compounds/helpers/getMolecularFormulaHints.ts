import { splitFormula } from "./splitFormula";

export const getMolecularFormulaHints = (userAnswer: string, compoundFormula: string): string => {
    // Split both the user and correct formulas into their parts: [cation, cationSubscript, anion, anionSubscript]
    const [userCation, userCationSubscript, userAnion, userAnionSubscript] = splitFormula(userAnswer, "molecular");
    const [cation, cationSubscript, anion, anionSubscript] = splitFormula(compoundFormula, "molecular");

    if (cation !== userCation) {
        return "Check the formula for the first element."
    }

    if (anion !== userAnion) {
        return "Check the formula for the second element."
    }

    if (cationSubscript !== userCationSubscript) {
        if (cationSubscript === "1") {
            return "When no Greek prefix is present for the first element in a molecular compound, that indicates that there is only one of that element."
        }

        return `The Greek prefix for the first element indicates what number to use for the subscript. The prefix '${convertToGreekPrefix(cationSubscript)}' does not equal ${userCationSubscript}.`
    }

    if (anionSubscript !== userAnionSubscript) {
        return `The Greek prefix for the second element indicates what number to use for the subscript. The prefix '${convertToGreekPrefix(anionSubscript)}' does not equal ${userAnionSubscript}.`
    }

    return "Don't escape me!";
};

const convertToGreekPrefix = (number: string): string => {
    switch (number) {
        case "1":
            return "mono";
        case "2":
            return "di";
        case "3":
            return "tri";
        case "4":
            return "tetra";
        case "5":
            return "penta";
        case "6":
            return "hexa";
        case "7":
            return "hepta";
        case "8":
            return "octa";
        case "9":
            return "nona";
        case "10":
            return "deca";
        default:
            return "";
    }
}