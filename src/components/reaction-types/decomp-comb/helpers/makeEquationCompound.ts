import { makeIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { EquationCompound } from "../../configurations/interfaces";
import { Compound } from "../../../compounds/configurations/interfaces";

/**
 * Randomly generates a EquationCompound object for decomposition reactant or combination product
 * @returns EquationCompound object
 */
export const makeEquationCompound = (): EquationCompound => {
    // Generate a random ionic compound that is either main group binary or has transition metals
    const randomChoice: boolean = Boolean(Math.round(Math.random()));
    const randomCompound: Compound = (randomChoice ? makeIonicCompound("ionic-main"): makeIonicCompound("ionic-transition"));

    // Use the FormulaParts object of the compound to temporarily store a subscript that equals "" to "1"
    let firstSubscript: string = randomCompound.formulaParts.firstSubscript;
    if (firstSubscript.length === 0) {
        firstSubscript = "1";
    }

    let secondSubscript: string = randomCompound.formulaParts.secondSubscript;
    if (secondSubscript.length === 0) {
        secondSubscript = "1";
    }

    // Convert the numeric character as a string type to number type
    const cationQty: number = Number(firstSubscript);
    const anionQty: number = Number(secondSubscript);

    // Create the EquationCompound object for the generated compound
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
