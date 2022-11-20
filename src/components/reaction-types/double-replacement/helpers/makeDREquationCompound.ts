import { getIonicStateOfMatter } from "./getIonicStateOfMatter";
import { EquationCompound } from "../../configurations/interfaces";
import { Compound } from "../../../compounds/configurations/interfaces";

/**
 * Converts a Compound object into an EquationCompound object
 * @param compound Compound object type
 * @returns An EquationCompound object type
 */
export const makeDREquationCompound = (compound: Compound): EquationCompound => {
    const {formulaParts, cation, anion} = compound;

    // If a subscript from formulaParts eqauals "" with a length of zero, there is one of that ion initially present
    let firstSubscript: string = formulaParts.firstSubscript;
    if (firstSubscript.length === 0) {
        firstSubscript = "1";
    }

    let secondSubscript: string = formulaParts.secondSubscript;
    if (secondSubscript.length === 0) {
        secondSubscript = "1";
    }

    // Set the initial anion quantities equal to the value of their subscript number
    const cationQty: number = Number(firstSubscript);
    const anionQty: number = Number(secondSubscript);

    // Generate the EquationCompound object
    let equationCompound: EquationCompound = {
        compound: compound,
        coefficient: 1,
        state: getIonicStateOfMatter(cation.ionName, anion.ionName),
        balancingData: {
            initialCationQty: cationQty,
            initialAnionQty: anionQty,
            totalCationQty: cationQty,
            totalAnionQty: anionQty,
        }
    }

    return equationCompound
};
