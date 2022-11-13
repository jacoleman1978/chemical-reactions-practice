import { EquationCompound, BalancingTable } from "../../configurations/interfaces";

/**
 * Updates the 'elementKey' property of 'balancingTable' by incrementing the compound coefficient and modifying the corresponding quantity values.
 * @param balancingTable BalancingTable object
 * @param compound EquationCompound object
 * @returns [balancingTable: BalancingTable, compound: EquationCompound]
 */
export const updateCompoundCoefficient = (balancingTable: BalancingTable, compound: EquationCompound): [BalancingTable, EquationCompound] => {
    let coefficient: number = compound.coefficient + 1;
    let initialCatQty: number = compound.balancingData.initialCationQty;
    let initialAnQty: number = compound.balancingData.initialAnionQty;
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    compound.coefficient = coefficient;
    compound.balancingData.totalCationQty = updatedCatQty;
    compound.balancingData.totalAnionQty = updatedAnQty;

    const [cation, anion]: string[] = compound.compound.compoundName.split(" ");

    balancingTable[cation].qtyReactants = updatedCatQty;
    balancingTable[anion].qtyReactants = updatedAnQty;
    
    return [balancingTable, compound]
};
