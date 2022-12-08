import { BalancingTable, EquationElement } from "../configurations/interfaces";

/**
 * Updates the "elementKey" property of the 'balancingTable' by incrementing the "equationElement" coefficient and modifying the corresponding quantity values
 * @param balancingTable "BalancingTable" object
 * @param equationElement "EquationElement" object
 * @param isReactant boolean: true if the 'equationElement' is a reactant, and false if the 'equationElement' is a product
 * @returns [balancingTable: BalancingTable, equationElement: EquationElement]
 */
export const updateElementCoefficient = (balancingTable: BalancingTable, equationElement: EquationElement, isReactant: boolean): [BalancingTable, EquationElement] => {
    let coefficient: number = equationElement.coefficient + 1;

    equationElement.coefficient = coefficient;

    if (isReactant) {
        balancingTable[equationElement.compoundFormula].qtyReactants = coefficient * equationElement.subscript;
    } else {
        balancingTable[equationElement.compoundFormula].qtyProducts = coefficient * equationElement.subscript;
    }

    return [balancingTable, equationElement]
};
