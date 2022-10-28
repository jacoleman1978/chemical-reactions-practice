import { Ion } from "../../../interfaces";
import { CompoundSubscripts } from "../../../interfaces";
import { findCompoundSubscripts } from "./findCompoundSubscripts";

export const makeCompoundFormula = (cation: Ion, anion: Ion): string => {
    const compoundSubscripts: CompoundSubscripts = findCompoundSubscripts(cation.charge, anion.charge);
    const cationSubscript: number = compoundSubscripts.first;
    const anionSubscript: number = compoundSubscripts.second;

    let formula = "";

    // Determine if the cation needs parentheses
    if (cation.isPolyatomic && cationSubscript > 1) {
        formula += `(${cation.ionSymbol})${cationSubscript}`;
    } else if (cationSubscript === 1) {
        formula += cation.ionSymbol;
    } else if (cationSubscript > 1) {
        formula += `${cation.ionSymbol}${cationSubscript}`;
    } 

    // Determine if the anion needs parentheses
    if (anion.isPolyatomic && anionSubscript > 1) {
        formula += `(${anion.ionSymbol})${anionSubscript}`;
    } else if (anionSubscript === 1) {
        formula += anion.ionSymbol;
    } else if (anionSubscript > 1) {
        formula += `${anion.ionSymbol}${anionSubscript}`;
    } 

    return formula
}