import { BalancingTable, Hydrocarbon, CombustionEquationProduct, CombustionEquationOxygen } from "../../configurations/interfaces";

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

/**
 * Doubles the coefficient for the Hydrocarbon object, updated currentXQty and balancingTable
 * @param balancingTable BalancingTable object
 * @param hydrocarbon Hydrocarbon object
 * @returns After doubling data, returns [balancingTable: BalancingTable, hydrocarbon: Hydrocarbon]
 */
 export const doubleHydrocarbonCoefficients = (balancingTable: BalancingTable, hydrocarbon: (Hydrocarbon)): [BalancingTable, Hydrocarbon] => {
    // Double the coefficient
    const coefficient: number = hydrocarbon.coefficient;
    hydrocarbon.coefficient *= 2;

    // Update carbon data
    const carbonSubscript: number = Number(hydrocarbon.carbonSubscript);

    hydrocarbon.balancingData.currentCQty += (carbonSubscript > 1 ? carbonSubscript * coefficient : coefficient);

    balancingTable.carbon.qtyReactants += (carbonSubscript > 1 ? carbonSubscript * coefficient : coefficient);

    // Update hydrogen data
    const hydrogenSubscript: number = Number(hydrocarbon.hydrogenSubscript);

    hydrocarbon.balancingData.currentHQty += (hydrogenSubscript > 1 ? hydrogenSubscript * coefficient : coefficient);

    balancingTable.hydrogen.qtyReactants += (hydrogenSubscript > 1 ? hydrogenSubscript * coefficient : coefficient);

    // Update oxygen data
    if (hydrocarbon.hasOxygen) {
        let oxygenSubscript: number = Number(hydrocarbon.oxygenSubscript);

        hydrocarbon.balancingData.currentOQty += (oxygenSubscript > 1 ? oxygenSubscript * coefficient : coefficient);

        balancingTable.oxygen.qtyReactants += (oxygenSubscript > 1 ? oxygenSubscript * coefficient : coefficient);
    }
    
    return [balancingTable, hydrocarbon]
};

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