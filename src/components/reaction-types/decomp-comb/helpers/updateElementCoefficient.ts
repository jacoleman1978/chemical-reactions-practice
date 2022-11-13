import { EquationElement, BalancingTable } from "../../configurations/interfaces";

/**
 * Updates the 'elementKey' property of 'balancingTable' by incrementing the element coefficient and modifying the corresponding quantity values.
 * @param balancingTable BalancingTable object
 * @param element EquationElement object
 * @param elementKey The key string that is being updated
 * @returns [balancingTable: BalancingTable, element: EquationElement]
 */
export const updateElementCoefficient = (balancingTable: BalancingTable, element: EquationElement, elementKey: string): [BalancingTable, EquationElement] => {
    let coefficient: number = element.coefficient + 1;
    let initialCatQty: number = element.balancingData.initialCationQty;
    let initialAnQty: number = element.balancingData.initialAnionQty;
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    element.coefficient = coefficient;
    element.balancingData.totalCationQty = updatedCatQty;
    element.balancingData.totalAnionQty = updatedAnQty;

    if (initialCatQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedCatQty;
    } else if (initialAnQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedAnQty;
    }
    
    return [balancingTable, element]
};
