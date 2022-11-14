import { isBalanced } from "../../helpers/isBalanced";
import { doubleHydrocarbonCoefficients } from "./doubleHydrocarbonCoefficient";
import { doubleO2Coefficient } from "./doubleO2Coefficient";
import { doubleH2OCoefficient } from "./doubleH2OCoefficient";
import { doubleCO2Coefficient } from "./doubleCO2Coefficient";
import { BalancingTable, Hydrocarbon, CombustionEquationProduct, CombustionEquationOxygen } from "../../configurations/interfaces";

/**
 * Balances the oxygens in a combustion reaction
 * @param balancingTable BalancingTable object
 * @param hydrocarbon Hydrocarbon object
 * @param o2 CombustionEquationOxygen object
 * @param h2o CombustionEquationProduct
 * @param co2 CombustionEquationProduct
 * @returns After balancing oxygens in a combustion reaction, returns updated array [balancingTable: BalancingTable, hydrocarbon: Hydrocarbon, o2: CombustionEquationOxygen, h20: CombustionEquationProduct, co2: CombustionEquationProduct]
 */
export const balanceOxygen = (balancingTable: BalancingTable, hydrocarbon: Hydrocarbon, o2: CombustionEquationOxygen, h2o: CombustionEquationProduct, co2: CombustionEquationProduct): [BalancingTable, Hydrocarbon, CombustionEquationOxygen, CombustionEquationProduct, CombustionEquationProduct] => {
    while(!isBalanced(balancingTable, ["oxygen"])) {
        let oAsReactant: number = balancingTable.oxygen.qtyReactants;
        let oAsProduct: number = balancingTable.oxygen.qtyProducts;

        let areReactantsEven = oAsReactant % 2 === 0;
        let areProductsEven = oAsProduct % 2 === 0;

        // If number of oxygens on one side is odd and on the other is even, double all coefficients
        if ((areReactantsEven && !areProductsEven) || (!areReactantsEven && areProductsEven)) {
            [balancingTable, hydrocarbon] = doubleHydrocarbonCoefficients(balancingTable, hydrocarbon);

            [balancingTable, o2] = doubleO2Coefficient(balancingTable, o2);

            [balancingTable, h2o] = doubleH2OCoefficient(balancingTable, h2o);

            [balancingTable, co2] = doubleCO2Coefficient(balancingTable, co2);

        // If there are more oxygens in reactants than products, increase the o2 coefficient and update data
        } else if ( oAsReactant < oAsProduct) {
            o2.coefficient += 1;

            o2.balancingData.currentOQty += 2;
            balancingTable.oxygen.qtyReactants += 2;

        // If there are more oxygens in the products than reactants, increase the h20 and co2 coefficients and update data
        } else if (oAsProduct < oAsReactant) {
            h2o.coefficient += 1;
            
            h2o.balancingData.currentHQty += 2;
            h2o.balancingData.currentOQty += 1;

            co2.coefficient += 1;

            co2.balancingData.currentCQty += 1;
            co2.balancingData.currentOQty += 2;

            balancingTable.carbon.qtyProducts += 1;
            balancingTable.hydrogen.qtyProducts += 2;
            balancingTable.oxygen.qtyProducts += 1;
        }
    }

    return [balancingTable, hydrocarbon, o2, h2o, co2]
};
