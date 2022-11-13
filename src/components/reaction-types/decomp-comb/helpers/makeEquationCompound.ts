import { makeIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { EquationCompound } from "../../configurations/interfaces";
import { Compound } from "../../../compounds/configurations/interfaces";

/**
 * Randomly generates a EquationCompound object for decomposition reactant or combination product
 * @returns EquationCompound object
 */
export const makeEquationCompound = (): EquationCompound => {
    const randomChoice: boolean = Boolean(Math.round(Math.random()));
    const randomCompound: Compound = (randomChoice ? makeIonicCompound("ionic-main"): makeIonicCompound("ionic-transition"));

    let firstSubscript: string = randomCompound.formulaParts.firstSubscript;
    if (firstSubscript.length === 0) {
        firstSubscript = "1";
    }

    let secondSubscript: string = randomCompound.formulaParts.secondSubscript;
    if (secondSubscript.length === 0) {
        secondSubscript = "1";
    }

    const cationQty: number = Number(firstSubscript);
    const anionQty: number = Number(secondSubscript);

    let compound: EquationCompound = {
        compound: randomCompound,
        coefficient: 1,
        state: "s",
        balancingData: {
            initialCationQty: cationQty,
            initialAnionQty: anionQty,
            totalCationQty: cationQty,
            totalAnionQty: anionQty,
        }
    }

    return compound
};
