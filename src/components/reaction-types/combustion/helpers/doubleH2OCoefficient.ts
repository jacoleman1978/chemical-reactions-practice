import { BalancingTable, CombustionEquationProduct } from "../../configurations/interfaces";

/**
 * Doubles the coefficient for the CombustionEquationProduct object, updated currentXQty and balancingTable
 * @param balancingTable BalancingTable object
 * @param h2o CombustionEquationProduct object
 * @returns After doubling data, returns [balancingTable: BalancingTable, h2o: CombustionEquationProduct]
 */
export const doubleH2OCoefficient = (balancingTable: BalancingTable, h2o: CombustionEquationProduct): [BalancingTable, CombustionEquationProduct] => {
    // Double the coefficient
    const coefficient: number = h2o.coefficient;
    h2o.coefficient *= 2;

    // Update hydrogen data
    h2o.balancingData.currentHQty += 2 * coefficient;
    balancingTable.hydrogen.qtyProducts += 2 * coefficient;

    // Update oxygen data
    h2o.balancingData.currentOQty += coefficient;
    balancingTable.oxygen.qtyProducts += coefficient;

    return [balancingTable, h2o]
};
