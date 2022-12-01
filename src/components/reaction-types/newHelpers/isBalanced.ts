import { BalancingTable } from "../newConfigurations/interfaces";

/**
 * Checks 'balancingTable' to determine if the chemical equation is balanced
 * @param balancingTable BalancingTable object
 * @param elementKeys An array of the object properties/keys used in the 'balancing' table
 * @returns boolean: 'true' if balanced or 'false' if not balanced
 */
export const isBalanced = (balancingTable: BalancingTable, elementKeys: string[]): boolean => {
    for(let key of elementKeys) {
        if (balancingTable[key].qtyReactants !== balancingTable[key].qtyProducts) {
            return false
        }
    }

    return true
};
