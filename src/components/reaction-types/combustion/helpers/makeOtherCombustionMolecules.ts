import { makeNewMolecularElement, makeMolecularCompound } from "../../../compounds/helpers/makeMolecularCompound";
import { EquationElement } from "../../configurations/interfaces";
import { MolecularElement } from "../../../ions/configurations/interfaces";
import { MolecularCompound } from "../../../compounds/configurations/interfaces";
import { MolecularOxStates } from "../../../ions/configurations/types";

/**
 * Make the oxygen gas "EquationElement" object for a combustion reaction
 * @returns oxygen gas "EquationElement" object
 */
export const makeOxygenGas = (): EquationElement => {
    let oxygen: EquationElement = {
        compoundName: "oxygen",
        compoundFormula: "O/2/",
        formulaParts: ["O", 2],
        molarMass: 32.00,
        state: "g",
        coefficient: 1,
        subscript: 2,
    }

    return oxygen
};

/**
 * Make the water vapor "MolecularCompound" object for a combustion reaction
 * @returns water vapor "MolecularCompound" object
 */
export const makeWaterVapor = (): MolecularCompound => {
    let hydrogen: MolecularElement = makeMolecularElement("H", 1, 2);
    hydrogen.subscript = 2;

    let oxygen: MolecularElement = makeMolecularElement("O", -2, 1);

    return makeMolecularCompound(hydrogen, oxygen)
};

/**
 * Make the carbon dioxide "MolecularCompound" object for a combustion reaction 
 * @returns carbon dioxide "MolecularCompound" object
 */
export const makeCarbonDioxide = (): MolecularCompound => {
    let carbon: MolecularElement = makeMolecularElement("C", 4, 1);
    let oxygen: MolecularElement = makeMolecularElement("O", -2, 2);

    return makeMolecularCompound(carbon, oxygen)
};

/**
 * Makes "MolecularElement" objects
 * @param symbol string: element symbol
 * @param oxState "MolecularOxState" type literal for the element oxidation state
 * @param subscript number: the value the subscript property should be set to
 * @returns "MolecularElement" object
 */
const makeMolecularElement = (symbol: string, oxState: MolecularOxStates, subscript: number) => {
    return makeNewMolecularElement({elementSymbol: symbol, oxState: oxState}, subscript, false)
}