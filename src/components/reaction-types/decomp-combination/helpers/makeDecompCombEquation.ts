import { makeRandomIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { makeEquationElements } from "../../helpers/makeEquationElements";
import { makeDecompCombBalancingTable } from "./makeDecompCombBalancingTable";
import { isBalanced } from "../../helpers/isBalanced";
import { updateCompoundCoefficient } from "../../helpers/updateCompoundCoefficient";
import { updateElementCoefficient } from "./updateElementCoefficient";
import { DecompositionReaction, CombinationReaction, BalancingTable } from "../../configurations/interfaces";
import { IonicCompound } from "../../../compounds/configurations/interfaces";
import { ReactionTypeList } from "../../../common/configurations/types";

/**
 * Generates a DecompositionReaction or CombinationReaction object
 * @param reactionType ReactionType type literal. Use 'decomposition' or 'combination'
 * @returns DecompositionReaction or CombinationReaction object
 */
export const makeDecompCombEquation = (reactionType: ("decomposition" | "combination")): ReactionTypeList => {
    // Make a random ionic compound EquationCompound object and the corresponsing EquationElements
    const randomChoice: boolean = Boolean(Math.round(Math.random()));
    let compound: IonicCompound = (randomChoice ? makeRandomIonicCompound("ionic-main"): makeRandomIonicCompound("ionic-transition"));
    
    let {elementOne, elementTwo} = makeEquationElements(compound);

    // Make the BalancingTable object to use to check whether or not an equation is balanced
    let balancingTable: BalancingTable = makeDecompCombBalancingTable(reactionType, compound, elementOne, elementTwo);

    // Make the keys for the BalancingTable object from the ion names of the EquationCompound object
    const cationKey: string = compound.cation.ionFormula;
    const anionKey: string = compound.anion.ionFormula;
    const ionKeys: string[] = [cationKey, anionKey];

    // If the equation is not balanced, continue to increment the coefficients for the reactant or product containing a specific element with the least quantity
    while (!isBalanced(balancingTable, ionKeys)) {
        if (balancingTable[cationKey].qtyReactants < balancingTable[cationKey].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient(balancingTable, compound, true);

        } else if (balancingTable[cationKey].qtyProducts < balancingTable[cationKey].qtyReactants) {
            [balancingTable, elementOne] = updateElementCoefficient(balancingTable, elementOne, cationKey);
        }

        if (balancingTable[anionKey].qtyReactants < balancingTable[anionKey].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient(balancingTable, compound, true);
            
        } else if (balancingTable[anionKey].qtyProducts < balancingTable[anionKey].qtyReactants) {
            [balancingTable, elementTwo] = updateElementCoefficient(balancingTable, elementTwo, anionKey);
        }
    }

    // Create and return the DecompositionReaction or CombinationReaction object depending on the "reactionType"
    if (reactionType === "decomposition") {
        return {type: "decomposition", reactantOne: compound, productOne: elementOne, productTwo: elementTwo} as DecompositionReaction

    } else if (reactionType === "combination") {
        return {type: "combination", reactantOne: elementOne, reactantTwo: elementTwo, productOne: compound} as CombinationReaction
    }

    return {} as ReactionTypeList
};
