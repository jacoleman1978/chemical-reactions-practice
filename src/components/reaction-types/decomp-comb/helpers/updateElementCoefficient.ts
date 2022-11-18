import { EquationElement, BalancingTable } from "../../configurations/interfaces";

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
    let initialCatQty: number = element.balancingData.initialCationQty;
    let initialAnQty: number = element.balancingData.initialAnionQty;

    // Calculate the quantity of each element after the coefficient has been incremented by 1
    let updatedCatQty: number = coefficient * initialCatQty;
    let updatedAnQty: number = coefficient * initialAnQty;

    // Update the EquationElement object with the new values
    element.coefficient = coefficient;
    element.balancingData.totalCationQty = updatedCatQty;
    element.balancingData.totalAnionQty = updatedAnQty;

    // Only update the quantities for the BalancingTable object keys, if the property has a nonzero value
    if (initialCatQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedCatQty;
    } else if (initialAnQty > 0) {
        balancingTable[elementKey].qtyProducts = updatedAnQty;
    }
    
    return [balancingTable, element]
};
