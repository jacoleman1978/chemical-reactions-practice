import { updateHydrocarbonCoefficient } from "./updateHydrocarbonCoefficient";
import { isBalanced } from "../../helpers/isBalanced";
import { BalancingTable, Hydrocarbon, CombustionEquationProduct } from "../../configurations/interfaces";

/**
 * Balances the hydrogens in a combustion reaction
 * @param balancingTable BalancingTable object
 * @param hydrocarbon Hydrocarbon object
 * @param h2o CombustionEquationProduct object
 * @returns After balancing hydrogens in a combustion reaction, returns updated array [balancingTable: BalancingTableObject, hydrocarbon: Hydrocarbon, h2o: CombustionEquationProduct]
 */
export const balanceHydrogen = (balancingTable: BalancingTable, hydrocarbon: Hydrocarbon, h2o: CombustionEquationProduct): [BalancingTable, Hydrocarbon, CombustionEquationProduct] => {
    while(!isBalanced(balancingTable, ["hydrogen"])) {
        // If there is more H in reactants than products, increase the coefficient of the hydrocarbon 
        if (balancingTable.hydrogen.qtyReactants < balancingTable.hydrogen.qtyProducts) {
            [hydrocarbon, balancingTable] = updateHydrocarbonCoefficient(hydrocarbon, balancingTable);

        // If there is more H in products than reactants, increase the coefficient of H/2/O
        } else if (balancingTable.hydrogen.qtyProducts < balancingTable.hydrogen.qtyReactants) {
            h2o.coefficient += 1;
            
            h2o.balancingData.currentHQty += 2;
            h2o.balancingData.currentOQty += 1;

            balancingTable.hydrogen.qtyProducts += 2;
            balancingTable.oxygen.qtyProducts += 1;
    
        }
    }

    return [balancingTable, hydrocarbon, h2o]
};
