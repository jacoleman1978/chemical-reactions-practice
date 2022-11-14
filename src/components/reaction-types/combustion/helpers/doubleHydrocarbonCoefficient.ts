import { BalancingTable, Hydrocarbon } from "../../configurations/interfaces";

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
