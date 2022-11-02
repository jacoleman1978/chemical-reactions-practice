import { Ion, CompoundSubscripts, FormulaParts } from "../../../interfaces";
import { findCompoundSubscripts } from "./findCompoundSubscripts";

export const makeFormulaParts = (cation: Ion, anion: Ion): FormulaParts => {
    const compoundSubscripts: CompoundSubscripts = findCompoundSubscripts(cation.charge, anion.charge);
    const cationSubscript: number = compoundSubscripts.first;
    const anionSubscript: number = compoundSubscripts.second;

    let formulaParts: FormulaParts = {} as FormulaParts;

    // Determine if the cation needs parentheses
    if (cation.isPolyatomic && cationSubscript > 1) {
        formulaParts.firstPart = ["(", ...cation.ionSymbol, ")"];
        formulaParts.firstSubscript = cationSubscript.toString();

    } else if (cationSubscript === 1) {
        formulaParts.firstPart = cation.ionSymbol;
        formulaParts.firstSubscript = "";

    } else if (cationSubscript > 1) {
        formulaParts.firstPart = cation.ionSymbol;
        formulaParts.firstSubscript = cationSubscript.toString();
    } 

    // Determine if the anion needs parentheses
    if (anion.isPolyatomic && anionSubscript > 1) {
        formulaParts.secondPart = ["(", ...anion.ionSymbol, ")"];
        formulaParts.secondSubscript = anionSubscript.toString();

    } else if (anionSubscript === 1) {
        formulaParts.secondPart = anion.ionSymbol;
        formulaParts.secondSubscript = "";

    } else if (anionSubscript > 1) {
        formulaParts.secondPart = anion.ionSymbol;
        formulaParts.secondSubscript = anionSubscript.toString();
    } 

    return formulaParts
}