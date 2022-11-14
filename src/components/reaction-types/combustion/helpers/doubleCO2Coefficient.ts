import { BalancingTable, CombustionEquationProduct } from "../../configurations/interfaces";

/**
 *  * Doubles the coefficient for the CombustionEquationProduct object, updated currentXQty and balancingTable
 * @param balancingTable BalancingTable object
 * @param co2 CombustionEquationProduct object
 * @returns After doubling data, returns [balancingTable: BalancingTable, co2: CombustionEquationProduct]
 */
export const doubleCO2Coefficient = (balancingTable: BalancingTable, co2: CombustionEquationProduct): [BalancingTable, CombustionEquationProduct] => {
    // Double the coefficient
    const coefficient: number = co2.coefficient;
    co2.coefficient *= 2;

    // Update carbon data
    co2.balancingData.currentCQty += coefficient;
    balancingTable.carbon.qtyProducts += coefficient;

    // Update oxygen data
    co2.balancingData.currentOQty += 2 * coefficient;
    balancingTable.oxygen.qtyProducts += 2 * coefficient;

    return [balancingTable, co2]
};
