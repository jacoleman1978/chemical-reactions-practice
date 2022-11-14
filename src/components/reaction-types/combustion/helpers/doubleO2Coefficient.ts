import { BalancingTable, CombustionEquationOxygen } from "../../configurations/interfaces";

/**
 * Doubles the coefficient for the CombustionEquationOxygen object, updated currentOQty and balancingTable
 * @param balancingTable BalancingTable object
 * @param o2 CombustionEquationOxygen object
 * @returns After doubling data, returns [balancingTable: BalancingTable, o2: CombustionEquationOxygen]
 */
export const doubleO2Coefficient = (balancingTable: BalancingTable, o2: CombustionEquationOxygen): [BalancingTable, CombustionEquationOxygen] => {
    // Double the coefficient
    const coefficient: number = o2.coefficient;
    o2.coefficient *= 2;

    // Update oxygen data
    o2.balancingData.currentOQty += 2 * coefficient;

    balancingTable.oxygen.qtyReactants += 2 * coefficient;

    return [balancingTable, o2]
};
