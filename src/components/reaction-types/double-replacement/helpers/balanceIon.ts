import { isBalanced } from "../../helpers/isBalanced";
import { updateCompoundCoefficient } from "../../helpers/updateCompoundCoefficient";
import { BalancingTable, EquationCompound } from "../../configurations/interfaces";

/**
 * Balance one ion, listed as the "key" for both the reactant and product compounds in which it is found. Update the balancingTable and the balancingData from the EquationCompound objects
 * @param balancingTable BalancingTable object
 * @param key The ionName to balance as a string. It is one key in the BalancingTable object
 * @param reactant EquationCompound object that has the ionName listed in the key as one of the ions in the reactant
 * @param product EquationCompound object that has the ionName listed in the key as one of the ions in the product
 * @returns An array [balancingTable: BalancingTable, reactant: EquationCompound, product: EquationCompound]
 */
export const balanceIon = (balancingTable: BalancingTable, key: string, reactant: EquationCompound, product: EquationCompound): [BalancingTable, EquationCompound, EquationCompound] => {
    // Keep incrementing the appropriate coefficient by 1 until the ion listed as the key is balanced.
    while (!isBalanced(balancingTable, [key])) {
        if (balancingTable[key].qtyReactants < balancingTable[key].qtyProducts) {
            [balancingTable, reactant] = updateCompoundCoefficient(balancingTable, reactant, true);

        } else if (balancingTable[key].qtyProducts < balancingTable[key].qtyReactants) {
            [balancingTable, product] = updateCompoundCoefficient(balancingTable, product, false);
        }
    }

    return [balancingTable, reactant, product]
};
