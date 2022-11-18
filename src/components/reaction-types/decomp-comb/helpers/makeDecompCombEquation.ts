import { makeEquationCompound } from "./makeEquationCompound";
import { getEquationElements } from "./getEquationElements";
import { makeDecompCombBalancingTable } from "./makeDecompCombBalancingTable";
import { isBalanced } from "../../helpers/isBalanced";
import { updateCompoundCoefficient } from "../../helpers/updateCompoundCoefficient";
import { updateElementCoefficient } from "./updateElementCoefficient";
import { DecompositionReaction, CombinationReaction, EquationCompound, BalancingTable } from "../../configurations/interfaces";
import { RxnTypeList } from "../../../common/configurations/types";

/**
 * Generates a DecompositionReaction or CombinationReaction object
 * @param reactionType ReactionType type literal. Use 'decomposition' or 'combination'
 * @returns DecompositionReaction or CombinationReaction object
 */
export const makeDecompCombEquation = (reactionType: ("decomposition" | "combination")): RxnTypeList => {
    // Make a random ionic compound EquationCompound object and the corresponsing EquationElements
    let compound: EquationCompound = makeEquationCompound();
    let [elementOne, elementTwo] = getEquationElements(compound.compound);

    // Make the BalancingTable object to use to check whether or not an equation is balanced
    let balancingTable: BalancingTable = makeDecompCombBalancingTable(reactionType, compound, elementOne, elementTwo);

    // Make the keys for the BalancingTable object from the ion names of the EquationCompound object
    const [cation, anion]: string[] = compound.compound.compoundName.split(" ");
    const elementKeys: string[] = [cation, anion];

    // If the equation is not balanced, continue to increment the coefficients for the reactant or product containing a specific element with the least quantity
    while (!isBalanced(balancingTable, elementKeys)) {
        if (balancingTable[cation].qtyReactants < balancingTable[cation].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient(balancingTable, compound, true);

        } else if (balancingTable[cation].qtyProducts < balancingTable[cation].qtyReactants) {
            [balancingTable, elementOne] = updateElementCoefficient(balancingTable, elementOne, cation);
        }

        if (balancingTable[anion].qtyReactants < balancingTable[anion].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient(balancingTable, compound, true);
            
        } else if (balancingTable[anion].qtyProducts < balancingTable[anion].qtyReactants) {
            [balancingTable, elementTwo] = updateElementCoefficient(balancingTable, elementTwo, anion);
        }
    }

    // Create and return the DecompositionReaction or CombinationReaction object depending on the "reactionType"
    if (reactionType === "decomposition") {
        return {type: "decomposition", reactantOne: compound, productOne: elementOne, productTwo: elementTwo} as DecompositionReaction

    } else if (reactionType === "combination") {
        return {type: "combination", reactantOne: elementOne, reactantTwo: elementTwo, productOne: compound} as CombinationReaction
    }

    return {} as RxnTypeList
};
