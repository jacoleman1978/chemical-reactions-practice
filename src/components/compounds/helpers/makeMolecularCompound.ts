import { makeMolecularFormulaParts } from "./makeMolecularFormulaParts";
import { makeFormulaString } from "./makeFormulaString";
import { makeMolecularName } from "./makeMolecularName";
import { getRandomFirstMolecularPart } from "./getRandomFirstMolecularPart";
import { getRandomSecondMolecularPart } from "./getRandomSecondMolecularPart";
import { FormulaParts, MolecularCompound, FirstMolecularElement, SecondMolecularElement } from "../configurations/interfaces";

/**
 * Generate a random molecular compound object of type Compound.
 * @returns a randomly generated ionic compound object of type Compound.
 */

export const makeMolecularCompound = (): MolecularCompound => {
    // Randomly get an individual molecular element
    const firstElementPart: FirstMolecularElement = getRandomFirstMolecularPart();
    let secondElementPart: SecondMolecularElement = getRandomSecondMolecularPart();

    while (firstElementPart.elementSymbol === secondElementPart.elementSymbol) {
        secondElementPart = getRandomSecondMolecularPart();
    }

    const formulaParts: FormulaParts = makeMolecularFormulaParts(firstElementPart, secondElementPart);

    const compoundName: string = makeMolecularName(firstElementPart, formulaParts.firstSubscript, secondElementPart, formulaParts.secondSubscript);

    const compoundFormula: string = makeFormulaString(formulaParts);

    // Populate the properties of the Compound object
    let compound: MolecularCompound = {compoundName, compoundFormula, formulaParts};

    return compound
}