import { BalancingTable, Hydrocarbon } from "../../configurations/interfaces";

/**
 * Creates the BalancingTable object used while balancing combustion reactions
 * @param hydrocarbon : Hydrocarbon object
 * @returns BalancingTable object for balancing combustion reactions
 */
export const makeCombustionBalancingTable = (hydrocarbon: Hydrocarbon): BalancingTable => {
    // Add carbon and hydrogen data to the BalancingTable object
    const carbonSubscript = Number(hydrocarbon.carbonSubscript);
    const hydrogenSubscript = Number(hydrocarbon.hydrogenSubscript);

    let balancingTable: BalancingTable = {
        carbon: {
            // From hydrocarbon
            qtyReactants: (carbonSubscript > 1 ? carbonSubscript : 1),
            // From CO/2/
            qtyProducts: 1,
        },
        hydrogen: {
            // From hydrocarbon
            qtyReactants: (hydrogenSubscript > 1 ? hydrogenSubscript : 1),
            // From H/2/O
            qtyProducts: 2
        },
        oxygen: {
            // From O/2/
            qtyReactants: 2,
            // From H/2/O and CO/2/
            qtyProducts: 3,
        }
    }

    // If the hydrocarbon has oxygen, add to the BalancingTable object
    if (hydrocarbon.hasOxygen) {
        const oxygenSubscript = Number(hydrocarbon.oxygenSubscript)
        balancingTable.oxygen.qtyReactants += (oxygenSubscript > 1 ? oxygenSubscript : 1)
    }

    return balancingTable
};
