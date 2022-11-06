import { FormulaParts } from "../configurations/interfaces";
import { makeIonString } from "./makeIonString";

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