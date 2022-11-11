import { BalancingTable, EquationCompound, EquationElement } from "../configurations/interfaces";

export const makeDecompBalancingTable = (reactant: EquationCompound, productOne: EquationElement, productTwo: EquationElement): BalancingTable => {
    const [cation, anion]: string[] = reactant.compound.compoundName.split(" ");

    let balancingTable: BalancingTable = {} as BalancingTable

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
