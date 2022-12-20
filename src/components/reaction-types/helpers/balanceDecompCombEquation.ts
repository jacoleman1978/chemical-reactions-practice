import { isBalanced } from "./isBalanced";
import { updateCompoundCoefficient } from "./updateCompoundCoefficient";
import { EquationElement, BalancingTable } from "../configurations/interfaces";
import { IonicCompound } from "../../compounds/configurations/interfaces";
import { ReactionType } from "../../common/configurations/types";
import { DecompositionReaction, CombinationReaction } from "../configurations/interfaces";

interface BalanceDecompCombParam {
    reactionType: ReactionType,
    compound: IonicCompound,
    elementOne: EquationElement,
    elementTwo: EquationElement,
}

export const balanceDecompCombEquation = (decompCombEquation: BalanceDecompCombParam): (DecompositionReaction | CombinationReaction) => {
    let {reactionType, compound, elementOne, elementTwo} = decompCombEquation;
    let balancingTable: BalancingTable = makeDecompCombBalancingTable(reactionType, compound, elementOne, elementTwo);

    // Make the keys for the BalancingTable object from the ion names of the EquationCompound object
    const cationKey: string = compound.cation.ionFormula;
    const anionKey: string = compound.anion.ionFormula;
    const ionKeys: string[] = [cationKey, anionKey];

    while (!isBalanced(balancingTable, ionKeys)) {
        // If there are fewer of the cation in reactants than products, increment the coefficient for the reactant containing the cation
        if (balancingTable[cationKey].qtyReactants < balancingTable[cationKey].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient({...balancingTable}, {...compound}, true);

        // If there are fewer of the cation in products than reactants, increment the coefficient for the product containing the cation
        } else if (balancingTable[cationKey].qtyProducts < balancingTable[cationKey].qtyReactants) {
            [balancingTable, elementOne] = updateElementCoefficient({...balancingTable}, {...elementOne}, cationKey);
        }

        // If there are fewer of the anion in reactants than products, increment the coefficient for the reactant containing the anion
        if (balancingTable[anionKey].qtyReactants < balancingTable[anionKey].qtyProducts) {
            [balancingTable, compound] = updateCompoundCoefficient({...balancingTable}, {...compound}, true);
            
        // If there are fewer of the anion in products than reactants, increment the coefficient for the product containing the anion
        } else if (balancingTable[anionKey].qtyProducts < balancingTable[anionKey].qtyReactants) {
            [balancingTable, elementTwo] = updateElementCoefficient({...balancingTable}, {...elementTwo}, anionKey);
        }
    }

    // Create and return the DecompositionReaction or CombinationReaction object depending on the "reactionType"
    if (reactionType === "decomposition") {
        return {type: "decomposition", reactantOne: compound, productOne: elementOne, productTwo: elementTwo} as DecompositionReaction

    } else {
        return {type: "combination", reactantOne: elementOne, reactantTwo: elementTwo, productOne: compound} as CombinationReaction
    }
};

/**
 * Make the table used to keep track of equation balancing information for decomposition and combination reactions.
 * @param reactionType: "ReactionType" literal type: use 'decomposition' or 'combination'
 * @param compound "EquationCompound" object
 * @param elementOne "EquationElement" object
 * @param elementTwo "EquationElement" object
 * @returns A "BalancingTable" object with ion names as keys, each with qtyReactants and qtyProducts
 */
const makeDecompCombBalancingTable = (reactionType: ReactionType, compound: IonicCompound, elementOne: EquationElement, elementTwo: EquationElement): BalancingTable => {
    // Whether the number is assigned to reactants or products depends on the "reactionType"
    let cationElement: number = elementOne.subscript;
    let cationInCompound: number = compound.cation.subscript;
    let anionElement: number = elementTwo.subscript;
    let anionInCompound: number = compound.anion.subscript;

    let balancingTable: BalancingTable = {} as BalancingTable;

    // For "decomposition" reactions, the numbers from the elements are products and the numbers from the compound are reactants
    if (reactionType === 'decomposition') {
        balancingTable[compound.cation.ionFormula] = {
            qtyReactants: cationInCompound,
            qtyProducts: cationElement, 
        }
        balancingTable[compound.anion.ionFormula] = {
            qtyReactants: anionInCompound,
            qtyProducts: anionElement,
        }
    // For "combination" reactions, the numbers from the elements are reactants and the numbers from the compound are products
    } else if (reactionType === 'combination') {
        balancingTable[compound.cation.ionFormula] = {
            qtyReactants: cationElement,
            qtyProducts: cationInCompound, 
        }
        balancingTable[compound.anion.ionFormula] = {
            qtyReactants: anionElement,
            qtyProducts: anionInCompound,
        }
    }

    return balancingTable
};

/**
 * Updates the 'elementKey' property of 'balancingTable' by incrementing the element coefficient and modifying the corresponding quantity values.
 * @param balancingTable BalancingTable object
 * @param element EquationElement object
 * @param elementKey The key string that is being updated
 * @returns [balancingTable: BalancingTable, element: EquationElement]
 */
 export const updateElementCoefficient = (balancingTable: BalancingTable, element: EquationElement, elementKey: string): [BalancingTable, EquationElement] => {
    // Increase the coefficient for the specified element by 1
    let coefficient: number = element.coefficient + 1;

    // Get the initial quantity of each element from the EquationElement object
    let initialCatQty: number = element.subscript;
    let initialAnQty: number = element.subscript;

    // Calculate the quantity of each element after the coefficient has been incremented by 1
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    // Update the EquationElement coefficient
    element.coefficient = coefficient;

    // Only update the quantities for the BalancingTable object keys, if the property has a nonzero value
    if (initialCatQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedCatQty;
    } else if (initialAnQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedAnQty;
    }
    
    return [balancingTable, element]
};