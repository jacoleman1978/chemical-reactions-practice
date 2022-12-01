import { makeNewMolecularElement, makeMolecularCompound } from "../../../compounds/helpers/makeMolecularCompound";
import { EquationElement } from "../../configurations/interfaces";
import { MolecularElement } from "../../../ions/configurations/interfaces";
import { MolecularCompound } from "../../../compounds/configurations/interfaces";
import { MolecularOxStates } from "../../../ions/configurations/types";

export const makeOxygenGas = (): EquationElement => {
    let oxygenElement: MolecularElement = makeMolecularElement("O", -2, 2);
    oxygenElement.subscript = 2;

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

export const makeWaterVapor = (): MolecularCompound => {
    let hydrogen: MolecularElement = makeMolecularElement("H", 1, 2);
    hydrogen.subscript = 2;

    let oxygen: MolecularElement = makeMolecularElement("O", -2, 1);

    return makeMolecularCompound(hydrogen, oxygen)
};

export const makeCarbonDioxide = () => {
    let carbon: MolecularElement = makeMolecularElement("C", 4, 1);
    let oxygen: MolecularElement = makeMolecularElement("O", -2, 2);

    return makeMolecularCompound(carbon, oxygen)
};

const makeMolecularElement = (symbol: string, oxState: MolecularOxStates, subscript: number) => {
    return makeNewMolecularElement({elementSymbol: symbol, oxState: oxState}, subscript, false)
}