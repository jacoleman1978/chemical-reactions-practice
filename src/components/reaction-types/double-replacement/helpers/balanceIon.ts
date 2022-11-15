import { isBalanced } from "../../helpers/isBalanced";
import { updateCompoundCoefficient } from "../../helpers/updateCompoundCoefficient";
import { BalancingTable, EquationCompound } from "../../configurations/interfaces";

export const balanceIon = (balancingTable: BalancingTable, key: string, reactant: EquationCompound, product: EquationCompound): [BalancingTable, EquationCompound, EquationCompound] => {
    while (!isBalanced(balancingTable, [key])) {
        if (balancingTable[key].qtyReactants < balancingTable[key].qtyProducts) {
            [balancingTable, reactant] = updateCompoundCoefficient(balancingTable, reactant, true);

        } else if (balancingTable[key].qtyProducts < balancingTable[key].qtyReactants) {
            [balancingTable, product] = updateCompoundCoefficient(balancingTable, product, false);
        }
    }

    return [balancingTable, reactant, product]
};
