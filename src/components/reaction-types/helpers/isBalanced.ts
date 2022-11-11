import { BalancingTable } from "../configurations/interfaces";

export const isBalanced = (balancingTable: BalancingTable, elementKeys: string[]): boolean => {
    for(let key of elementKeys) {
        if (balancingTable[key].qtyReactants !== balancingTable[key].qtyProducts) {
            return false
        }
    }

    return true
};
