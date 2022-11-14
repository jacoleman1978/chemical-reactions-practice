import { Hydrocarbon, BalancingTable } from "../../configurations/interfaces";

/**
 * Increases the coefficient property of the Hydrocarbon object by one, updating currentXQty properties and the BalancingTable object
 * @param hydrocarbon Hydrocarbon object
 * @param balancingTable BalancingTable object
 * @returns After incrementing the coefficient and updating data, returns [hydrocarbon: Hydrocarbon, balancingTable: BalancingTable] 
 */
export const updateHydrocarbonCoefficient = (hydrocarbon: Hydrocarbon, balancingTable: BalancingTable): [Hydrocarbon, BalancingTable] => {
    hydrocarbon.coefficient += 1;

    // Update carbon data
    const carbonSubscript: number = Number(hydrocarbon.carbonSubscript);

    hydrocarbon.balancingData.currentCQty += (carbonSubscript > 1 ? carbonSubscript : 1);
    balancingTable.carbon.qtyReactants += (carbonSubscript > 1 ? carbonSubscript : 1);
    
    // Update hydrogen data
    const hydrogenSubscript: number = Number(hydrocarbon.hydrogenSubscript);

    hydrocarbon.balancingData.currentHQty += (hydrogenSubscript > 1 ? hydrogenSubscript : 1);
    balancingTable.hydrogen.qtyReactants += (hydrogenSubscript > 1 ? hydrogenSubscript : 1);

    // Update oxygen data, if the hydrocarbon has oxygens
    if (hydrocarbon.hasOxygen) {
        let oxygenSubscript: number = Number(hydrocarbon.oxygenSubscript);

        hydrocarbon.balancingData.currentOQty += (oxygenSubscript > 1 ? oxygenSubscript : 1);
        balancingTable.oxygen.qtyReactants += (oxygenSubscript > 1 ? oxygenSubscript : 1);
    }

    return [hydrocarbon, balancingTable]
};
