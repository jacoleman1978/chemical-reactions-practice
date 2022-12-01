import { EquationElement, BalancingTable } from "../../newConfigurations/interfaces";
import { IonicCompound } from "../../../compounds/newConfigurations/interfaces";
import { ReactionType } from "../../../common/configurations/types";

/**
 * Make the table used to keep track of equation balancing information for decomposition and combination reactions.
 * @param reactionType: ReactionType literal type: use 'decomposition' or 'combination'
 * @param compound EquationCompound object
 * @param elementOne EquationElement object
 * @param elementTwo EquationElement object
 * @returns A BalancingTable object with ion names as keys, each with qtyReactants and qtyProducts
 */
export const makeDecompCombBalancingTable = (reactionType: ReactionType, compound: IonicCompound, elementOne: EquationElement, elementTwo: EquationElement): BalancingTable => {
    // Determines the total number atoms of cation type for the [cation] key
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
