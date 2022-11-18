import { updateHydrocarbonCoefficient } from "./updateHydrocarbonCoefficient";
import { isBalanced } from "../../helpers/isBalanced";
import { doubleCO2Coefficient, doubleHydrocarbonCoefficients, doubleO2Coefficient, doubleH2OCoefficient } from "./doubleCoefficients";
import { BalancingTable, Hydrocarbon, CombustionEquationProduct, CombustionEquationOxygen } from "../../configurations/interfaces";

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
