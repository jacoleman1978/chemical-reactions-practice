import { findCompoundSubscripts } from "./findCompoundSubscripts";
import { FormulaParts, CompoundSubscripts, Ion } from "../configurations/interfaces";
import { CationCharge, AnionCharge, FirstSubscript, SecondSubscript } from "../configurations/types";

/**
 * Uses the cation and anion Ion objects to generate a FormulaParts object, determining if parentheses or subscripts are needed.
 * @param cation A cation Ion object
 * @param anion An anion Ion object
 * @returns A FormulaParts object
 */

export const makeFormulaParts = (cation: Ion, anion: Ion): FormulaParts => {
    const compoundSubscripts: CompoundSubscripts = findCompoundSubscripts(cation.charge as CationCharge, anion.charge as AnionCharge);
    const cationSubscript: FirstSubscript = compoundSubscripts.first;
    const anionSubscript: SecondSubscript = compoundSubscripts.second;

    let formulaParts: FormulaParts = {} as FormulaParts;

    // Determine if the cation and anion formulas need parentheses around them and/or subscripts.
    // Parentheses are only needed for polyatomic ions with a subscript greater than 1.
    // Subscripts are only needed for subscripts greater than 1.
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