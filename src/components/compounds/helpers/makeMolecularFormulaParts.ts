import { findCompoundSubscripts } from "./findCompoundSubscripts";
import { FormulaParts, CompoundSubscripts, FirstMolecularElement, SecondMolecularElement } from "../configurations/interfaces";
import { FirstSubscript, SecondSubscript } from "../configurations/types";

/**
 * Uses the FirstMolecularElement and SecondMolecularElement objects to generate a FormulaParts object, determining if parentheses or subscripts are needed.
 * @param firstElement A FirstMolecularElement object
 * @param secondElement A SecondMolecularElement Object
 * @returns A FormulaParts object
 */

export const makeMolecularFormulaParts = (firstElement: FirstMolecularElement, secondElement: SecondMolecularElement): FormulaParts => {
    const compoundSubscripts: CompoundSubscripts = findCompoundSubscripts(firstElement.oxidationState, secondElement.oxidationState);
    const firstSubscript: FirstSubscript = compoundSubscripts.first;
    const secondSubscript: SecondSubscript = compoundSubscripts.second;

    let formulaParts: FormulaParts = {} as FormulaParts;

    // Subscripts are only needed for subscripts greater than 1.
    if (firstSubscript === 1) {
        formulaParts.firstPart = [firstElement.elementSymbol];
        formulaParts.firstSubscript = "";

    } else if (firstSubscript > 1) {
        formulaParts.firstPart = [firstElement.elementSymbol];
        formulaParts.firstSubscript = firstSubscript.toString();
    } 

    if (secondSubscript === 1) {
        formulaParts.secondPart = [secondElement.elementSymbol];
        formulaParts.secondSubscript = "";

    } else if (secondSubscript > 1) {
        formulaParts.secondPart = [secondElement.elementSymbol];
        formulaParts.secondSubscript = secondSubscript.toString();
    } 

    return formulaParts
}