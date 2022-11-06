import { makeIonString } from "./makeIonString";
import { FormulaParts } from "../configurations/interfaces";

/**
 * Uses a passed in FormulaParts object to generate a string of the compound formula that uses '/'s around a subscript. Water would be 'H/2/O'.
 * @param formulaParts A FormulaParts object of a compound
 * @returns A formatted string of the compound formula using '/'s around subscripts
 */

export const makeFormulaString = (formulaParts: FormulaParts): string => {
    let formulaString: string = "";

    formulaString += makeIonString(formulaParts.firstPart);

    if (parseInt(formulaParts.firstSubscript) > 1) {
        formulaString += `/${formulaParts.firstSubscript}/`;
    } 

    formulaString += makeIonString(formulaParts.secondPart);

    if (parseInt(formulaParts.secondSubscript) > 1) {
        formulaString += `/${formulaParts.secondSubscript}/`;
    } 

    return formulaString
}