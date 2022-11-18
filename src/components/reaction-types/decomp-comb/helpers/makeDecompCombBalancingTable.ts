import { BalancingTable, EquationCompound, EquationElement } from "../../configurations/interfaces";
import { ReactionType } from "../../../common/configurations/types";

/**
 * Make the table used to keep track of equation balancing information for decomposition and combination reactions.
 * @param reactionType: ReactionType literal type: use 'decomposition' or 'combination'
 * @param compound EquationCompound object
 * @param elementOne EquationElement object
 * @param elementTwo EquationElement object
 * @returns A BalancingTable object with ion names as keys, each with qtyReactants and qtyProducts
 */
export const makeDecompCombBalancingTable = (reactionType: ReactionType, compound: EquationCompound, elementOne: EquationElement, elementTwo: EquationElement): BalancingTable => {
    // Gets the cation and anion name to use as keys in the BalancingTable object
    const [cation, anion]: string[] = compound.compound.compoundName.split(" ");

    // Determines the total number atoms of cation type for the [cation] key
    // Whether the number is assigned to reactants or products depends on the "reactionType"
    const cationElement: number = elementOne.balancingData.totalCationQty;
    const cationInCompound: number = compound.balancingData.totalCationQty;
    const anionElement: number = elementTwo.balancingData.totalAnionQty;
    const anionInCompound: number = compound.balancingData.totalAnionQty;

    let balancingTable: BalancingTable = {} as BalancingTable;

    // For "decomposition" reactions, the numbers from the elements are products and the numbers from the compound are reactants
    if (reactionType === 'decomposition') {
        balancingTable[cation] = {
            qtyReactants: cationInCompound,
            qtyProducts: cationElement, 
        }
        balancingTable[anion] = {
            qtyReactants: anionInCompound,
            qtyProducts: anionElement,
        }
    // For "combination" reactions, the numbers from the elements are reactants and the numbers from the compound are products
    } else if (reactionType === 'combination') {
        balancingTable[cation] = {
            qtyReactants: cationElement,
            qtyProducts: cationInCompound, 
        }
        balancingTable[anion] = {
            qtyReactants: anionElement,
            qtyProducts: anionInCompound,
        }
    }

    return balancingTable
};
