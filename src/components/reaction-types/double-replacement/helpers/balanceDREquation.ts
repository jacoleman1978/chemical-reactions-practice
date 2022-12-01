import { isBalanced } from "../../helpers/isBalanced";
import { updateCompoundCoefficient } from "../../helpers/updateCompoundCoefficient";
import { BalancingTable, DRReaction } from "../../configurations/interfaces";
import { IonicCompound } from "../../../compounds/configurations/interfaces";

export const balanceDREquation = (drEquation: DRReaction): DRReaction => {
    let {type, reactantOne, reactantTwo, productOne, productTwo} = drEquation;
    let {balancingTable, tableKeys} = makeDRBalancingTable(drEquation);

    while (!isBalanced(balancingTable, tableKeys)) {
        [balancingTable, reactantOne, productOne] = balanceIon(balancingTable, reactantOne.cation.ionFormula, reactantOne, productOne);

        [balancingTable, reactantOne, productTwo] = balanceIon(balancingTable, reactantOne.anion.ionFormula, reactantOne, productTwo);
    
        [balancingTable, reactantTwo, productTwo] = balanceIon(balancingTable, reactantTwo.cation.ionFormula, reactantTwo, productTwo);
    
        [balancingTable, reactantTwo, productOne] = balanceIon(balancingTable, reactantTwo.anion.ionFormula, reactantTwo, productOne);
    }

    return {type, reactantOne, reactantTwo, productOne, productTwo}
};


const balanceIon = (balancingTable: BalancingTable, tableKey: string, reactant: IonicCompound, product: IonicCompound): [BalancingTable, IonicCompound, IonicCompound] => {
    // Keep incrementing the appropriate coefficient by 1 until the ion listed as the key is balanced.
    while (!isBalanced(balancingTable, [tableKey])) {
        if (balancingTable[tableKey].qtyReactants < balancingTable[tableKey].qtyProducts) {
            [balancingTable, reactant] = updateCompoundCoefficient(balancingTable, reactant, true);

        } else if (balancingTable[tableKey].qtyProducts < balancingTable[tableKey].qtyReactants) {
            [balancingTable, product] = updateCompoundCoefficient(balancingTable, product, false);
        }
    }

    return [balancingTable, reactant, product]
};

const makeDRBalancingTable = (drEquation: DRReaction): {balancingTable: BalancingTable, tableKeys: string[]} => {
    const {reactantOne, reactantTwo, productOne, productTwo} = drEquation;
    const cationOne: string = reactantOne.cation.ionFormula;
    const anionOne: string = reactantOne.anion.ionFormula;
    const cationTwo: string = reactantTwo.cation.ionFormula;
    const anionTwo: string = reactantTwo.anion.ionFormula;

    const tableKeys: string[] = [cationOne, cationTwo, anionOne, anionTwo];

    let balancingTable: BalancingTable = {} as BalancingTable;

    balancingTable[cationOne] = {
        qtyReactants: reactantOne.cation.subscript,
        qtyProducts: productOne.cation.subscript,
    }
    balancingTable[anionOne] = {
        qtyReactants: reactantOne.anion.subscript,
        qtyProducts: productTwo.anion.subscript,
    }
    balancingTable[cationTwo] = {
        qtyReactants: reactantTwo.cation.subscript,
        qtyProducts: productTwo.cation.subscript,
    }
    balancingTable[anionTwo] = {
        qtyReactants: reactantTwo.anion.subscript,
        qtyProducts: productOne.anion.subscript,
    }

    return {balancingTable, tableKeys}
}