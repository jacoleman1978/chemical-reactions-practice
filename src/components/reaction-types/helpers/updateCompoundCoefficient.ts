import { BalancingTable } from "../configurations/interfaces";
import { IonicCompound } from "../../compounds/configurations/interfaces";

/**
 * Updates the 'elementKey' property of 'balancingTable' by incrementing the compound coefficient and modifying the corresponding quantity values.
 * @param balancingTable "BalancingTable" object
 * @param compound "IonicCompound" object
 * @param isReactant boolean: true if the compound is a reactant (decomposition reactions), and false if the compound is a product (combination reactions)
 * @returns [balancingTable: BalancingTable, compound: IonicCompound]
 */
export const updateCompoundCoefficient = (balancingTable: BalancingTable, compound: IonicCompound, isReactant: boolean = true): [BalancingTable, IonicCompound] => {
    let coefficient: number = compound.coefficient + 1;

    let updatedCatQty: number = coefficient * compound.cation.subscript;
    let updatedAnQty: number = coefficient * compound.anion.subscript;

    compound.coefficient = coefficient;

    const cationKey: string = compound.cation.ionFormula;
    const anionKey: string = compound.anion.ionFormula;

    if (isReactant) {
        balancingTable[cationKey].qtyReactants = updatedCatQty;
        balancingTable[anionKey].qtyReactants = updatedAnQty;
    } else {
        balancingTable[cationKey].qtyProducts = updatedCatQty;
        balancingTable[anionKey].qtyProducts = updatedAnQty;
    }
    
    return [balancingTable, compound]
};
