import { makeDREquationCompound } from "./makeDREquationCompound";
import { makeCompoundObjects } from "../../helpers/makeCompoundObjects";
import { EquationCompound } from "../../configurations/interfaces";
import { Ion, Compound } from "../../../compounds/configurations/interfaces";

/**
 * Makes the EquationCompound objects for the DR Reaction, using the passed in ions
 * @param firstCation Ion object
 * @param firstAnion Ion object
 * @param secondCation Ion object
 * @param secondAnion Ion object
 * @returns "{reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound}"
 */
export const makeDREquationCompounds = (firstCation: Ion, firstAnion: Ion, secondCation: Ion, secondAnion: Ion): {reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound} => {
    // Makes the reactant and product Compound objects from the passed in Ion objects
    const reactantOne: Compound = makeCompoundObjects(firstCation, firstAnion);
    const reactantTwo: Compound = makeCompoundObjects(secondCation, secondAnion);
    const productOne: Compound = makeCompoundObjects(firstCation, secondAnion);
    const productTwo: Compound = makeCompoundObjects(secondCation, firstAnion);

    // Makes the reactant and product EquationCompound objects from the Compound objects
    const reactantOneEC: EquationCompound = makeDREquationCompound(reactantOne);
    const reactantTwoEC: EquationCompound = makeDREquationCompound(reactantTwo);
    const productOneEC: EquationCompound = makeDREquationCompound(productOne);
    const productTwoEC: EquationCompound = makeDREquationCompound(productTwo);

    return {reactantOne: reactantOneEC, reactantTwo: reactantTwoEC, productOne: productOneEC, productTwo: productTwoEC}
};
