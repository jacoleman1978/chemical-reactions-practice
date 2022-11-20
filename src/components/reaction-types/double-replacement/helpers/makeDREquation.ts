import { getDRReactants } from "./getDRReactants";
import { balanceDREquation } from "./balanceDREquation";
import { DRReaction} from "../../configurations/interfaces";

/**
 * Makes and balances the DREquation
 * @param isSuccessful boolean. If true, at least one produce is insoluble, otherwise both products are soluble
 * @returns DRReaction object
 */
export const makeDREquation = (isSuccessful: boolean): DRReaction => {
    // Set reaction type of the double replacement pattern
    const reactionType: ("double-replacement" | "dr-no-reaction") = (isSuccessful ? "double-replacement" : "dr-no-reaction")

    // Randomly generates two reactants as DRReactantPair objects
    const {firstReactant, secondReactant} = getDRReactants(isSuccessful);

    // Uses the reactants to make the products, balancing the DR equation, and returning the reactants and products EquationCompound objects
    const {reactantOne, reactantTwo, productOne, productTwo} = balanceDREquation(firstReactant, secondReactant);

    return {type: reactionType, reactantOne, reactantTwo, productOne, productTwo}
};
