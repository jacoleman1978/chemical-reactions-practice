import { updateHydrocarbonCoefficient } from "./updateHydrocarbonCoefficient";
import { isBalanced } from "../../helpers/isBalanced";
import { BalancingTable, Hydrocarbon, CombustionEquationProduct } from "../../configurations/interfaces";

/**
 * Balances the carbons in a combustion reaction
 * @param balancingTable BalancingTable object
 * @param hydrocarbon Hydrocarbon object
 * @param co2 CombustionEquationProduct object
 * @returns After balancing carbons in a combustion reaction, returns updated array [balancingTable: BalancingTableObject, hydrocarbon: Hydrocarbon, co2: CombustionEquationProduct]
 */
export const balanceCarbon = (balancingTable: BalancingTable, hydrocarbon: Hydrocarbon, co2: CombustionEquationProduct): [BalancingTable, Hydrocarbon, CombustionEquationProduct] => {
    while(!isBalanced(balancingTable, ["carbon"])) {
        // If there is more C in reactants than products, increase the coefficient of the hydrocarbon
        if (balancingTable.carbon.qtyReactants < balancingTable.carbon.qtyProducts) {
            [hydrocarbon, balancingTable] = updateHydrocarbonCoefficient(hydrocarbon, balancingTable);

        // If there is more C in products than reactants, increase the coefficient of CO/2/
        } else if (balancingTable.carbon.qtyProducts < balancingTable.carbon.qtyReactants) {
            co2.coefficient += 1;
            
            co2.balancingData.currentCQty += 1;
            co2.balancingData.currentOQty += 2;

            balancingTable.carbon.qtyProducts += 1;
            balancingTable.oxygen.qtyProducts += 2;
        }
    }

    return [balancingTable, hydrocarbon, co2]
};
