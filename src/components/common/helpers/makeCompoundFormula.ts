import { Ion, CompoundSubscripts, FormulaParts } from "../../../interfaces";
import { findCompoundSubscripts } from "./findCompoundSubscripts";

export const makeCompoundFormula = (cation: Ion, anion: Ion): FormulaParts => {
    const compoundSubscripts: CompoundSubscripts = findCompoundSubscripts(cation.charge, anion.charge);
    const cationSubscript: number = compoundSubscripts.first;
    const anionSubscript: number = compoundSubscripts.second;

    let formula: FormulaParts = {} as FormulaParts;

    // Determine if the cation needs parentheses
    if (cation.isPolyatomic && cationSubscript > 1) {
        formula.firstPart = ["(", ...cation.ionSymbol, ")"];
        formula.firstSubscript = cationSubscript.toString();

    } else if (cationSubscript === 1) {
        formula.firstPart = cation.ionSymbol;
        formula.firstSubscript = "";

    } else if (cationSubscript > 1) {
        formula.firstPart = cation.ionSymbol;
        formula.firstSubscript = cationSubscript.toString();
    } 

    // Determine if the anion needs parentheses
    if (anion.isPolyatomic && anionSubscript > 1) {
        formula.secondPart = ["(", ...anion.ionSymbol, ")"];
        formula.secondSubscript = anionSubscript.toString();

    } else if (anionSubscript === 1) {
        formula.secondPart = anion.ionSymbol;
        formula.secondSubscript = "";

    } else if (anionSubscript > 1) {
        formula.secondPart = anion.ionSymbol;
        formula.secondSubscript = anionSubscript.toString();
    } 

    return formula
}