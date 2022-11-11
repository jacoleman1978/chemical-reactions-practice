import { EquationCompound, BalancingTable } from "../configurations/interfaces";

export const updateDecompReactant = (balancingTable: BalancingTable, reactant: EquationCompound): [BalancingTable, EquationCompound] => {
    let coefficient: number = reactant.coefficient + 1;
    let initialCatQty: number = reactant.balancingData.initialCationQty;
    let initialAnQty: number = reactant.balancingData.initialAnionQty;
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    reactant.coefficient = coefficient;
    reactant.balancingData.totalCationQty = updatedCatQty;
    reactant.balancingData.totalAnionQty = updatedAnQty;

    const [cation, anion]: string[] = reactant.compound.compoundName.split(" ");

    balancingTable[cation].qtyReactants = updatedCatQty;
    balancingTable[anion].qtyReactants = updatedAnQty;
    
    return [balancingTable, reactant]
};
