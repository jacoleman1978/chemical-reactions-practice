import { EquationElement, BalancingTable } from "../../configurations/interfaces";

export const updateDecompProduct = (balancingTable: BalancingTable, product: EquationElement, elementKey: string): [BalancingTable, EquationElement] => {
    let coefficient: number = product.coefficient + 1;
    let initialCatQty: number = product.balancingData.initialCationQty;
    let initialAnQty: number = product.balancingData.initialAnionQty;
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    product.coefficient = coefficient;
    product.balancingData.totalCationQty = updatedCatQty;
    product.balancingData.totalAnionQty = updatedAnQty;

    if (initialCatQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedCatQty;
    } else if (initialAnQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedAnQty;
    }
    
    return [balancingTable, product]
};
