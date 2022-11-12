import { BalancingTable, EquationCompound, EquationElement } from "../../configurations/interfaces";

/**
 * Make the table used to keep track of equation balancing information for decomposition reactions.
 * @param reactant EquationCompound object
 * @param productOne EquationElement object
 * @param productTwo EquationElement object
 * @returns A BalancingTable object with ion names as keys, each with qtyReactants and qtyProducts
 */
export const makeDecompBalancingTable = (reactant: EquationCompound, productOne: EquationElement, productTwo: EquationElement): BalancingTable => {
    const [cation, anion]: string[] = reactant.compound.compoundName.split(" ");

    let balancingTable: BalancingTable = {} as BalancingTable;

    balancingTable[cation] = {
        qtyReactants: reactant.balancingData.totalCationQty,
        qtyProducts: productOne.balancingData.totalCationQty, 
    }
    balancingTable[anion] = {
        qtyReactants: reactant.balancingData.totalAnionQty,
        qtyProducts: productTwo.balancingData.totalAnionQty,
    }

    return balancingTable
};
