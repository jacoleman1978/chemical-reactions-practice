import { FormulaParts } from "../../../interfaces";
import { makeIonString } from "./makeIonString";

export const makeFormulaString = (formulaParts: FormulaParts): string => {
    let formulaString: string = "";

    formulaString += makeIonString(formulaParts.firstPart.toString());

    if (parseInt(formulaParts.firstSubscript) > 1) {
        formulaString += `/${formulaParts.firstSubscript}/`;
    } 

    formulaString += makeIonString(formulaParts.secondPart.toString());

    if (parseInt(formulaParts.secondSubscript) > 1) {
        formulaString += `/${formulaParts.secondSubscript}/`;
    } 

    return formulaString
}