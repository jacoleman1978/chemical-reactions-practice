import { getIonicStateOfMatter } from "./getIonicStateOfMatter";
import { EquationCompound } from "../../configurations/interfaces";
import { Compound } from "../../../compounds/configurations/interfaces";

export const makeDREquationCompound = (compound: Compound): EquationCompound => {
    let firstSubscript: string = compound.formulaParts.firstSubscript;
    if (firstSubscript.length === 0) {
        firstSubscript = "1";
    }

    let secondSubscript: string = compound.formulaParts.secondSubscript;
    if (secondSubscript.length === 0) {
        secondSubscript = "1";
    }

    const cationQty: number = Number(firstSubscript);
    const anionQty: number = Number(secondSubscript);

    let equationCompound: EquationCompound = {
        compound: compound,
        coefficient: 1,
        state: getIonicStateOfMatter(compound.cation.ionName, compound.anion.ionName),
        balancingData: {
            initialCationQty: cationQty,
            initialAnionQty: anionQty,
            totalCationQty: cationQty,
            totalAnionQty: anionQty,
        }
    }

    return equationCompound
};
