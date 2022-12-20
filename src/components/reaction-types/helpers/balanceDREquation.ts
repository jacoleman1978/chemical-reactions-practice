import { isBalanced } from "./isBalanced";
import { updateCompoundCoefficient } from "./updateCompoundCoefficient";
import { BalancingTable, DRReaction } from "../configurations/interfaces";
import { IonicCompound } from "../../compounds/configurations/interfaces";

/**
 * Balance the double replacement reaction of the general pattern: AB + CD --> AD + CB
 * @param drEquation "DRReaction" object
 * @returns balanced "DRReaction" object
 */
export const balanceDREquation = (drEquation: DRReaction): DRReaction => {
    let {type, reactantOne, reactantTwo, productOne, productTwo} = drEquation;
    let {balancingTable, tableKeys} = makeDRBalancingTable(drEquation);

    while (!isBalanced(balancingTable, tableKeys)) {
        // Balances A from the general pattern
        [balancingTable, reactantOne, productOne] = balanceIon({...balancingTable}, reactantOne.cation.ionFormula, {...reactantOne}, {...productOne});

        // Balances B from the general pattern
        [balancingTable, reactantOne, productTwo] = balanceIon({...balancingTable}, reactantOne.anion.ionFormula, {...reactantOne}, {...productTwo});
    
        // Balances C from the general pattern
        [balancingTable, reactantTwo, productTwo] = balanceIon({...balancingTable}, reactantTwo.cation.ionFormula, {...reactantTwo}, {...productTwo});
    
        // Balances D from the general pattern
        [balancingTable, reactantTwo, productOne] = balanceIon({...balancingTable}, reactantTwo.anion.ionFormula, {...reactantTwo}, {...productOne});
    }

    return {type, reactantOne, reactantTwo, productOne, productTwo}
};

/**
 * Balances a specific ion in a double replacement reaction
 * @param balancingTable "BalancingTable" object
 * @param tableKey string: the key of "balancingTable" that will be balanced
 * @param reactant "IonicCompound" object that contains the ion "tableKey"
 * @param product "IonicCompound" object that contains the ion "tableKey"
 * @returns [balancingTable, reactant, product]: [BalancingTable, IonicCompound, IonicCompound] updating the "balancingTable" quantities and the coefficients for the "reactant" and "product"
 */
const balanceIon = (balancingTable: BalancingTable, tableKey: string, reactant: IonicCompound, product: IonicCompound): [BalancingTable, IonicCompound, IonicCompound] => {
    while (!isBalanced(balancingTable, [tableKey])) {
        // If the reactant has fewer of the "tableKey" ion than product, increment the coefficient of the reactant by 1
        if (balancingTable[tableKey].qtyReactants < balancingTable[tableKey].qtyProducts) {
            [balancingTable, reactant] = updateCompoundCoefficient({...balancingTable}, {...reactant}, true);

        // If the product has fewer of the "tableKey" ion than reactant, increment the coefficient of the product by 1
        } else if (balancingTable[tableKey].qtyProducts < balancingTable[tableKey].qtyReactants) {
            [balancingTable, product] = updateCompoundCoefficient({...balancingTable}, {...product}, false);
        }
    }

    return [balancingTable, reactant, product]
};

/**
 * Makes the "BalancingTable" object to keep track of quantities of the ions in a double replacement reaction with general pattern: AB + CD --> AD + CB
 * @param drEquation "DRReaction" object
 * @returns "{balancingTable, tableKeys}: {balancingTable: BalancingTable, tableKeys: string[]}": the created "BalancingTable" object and its keys
 */
const makeDRBalancingTable = (drEquation: DRReaction): {balancingTable: BalancingTable, tableKeys: string[]} => {
    const {reactantOne, reactantTwo, productOne, productTwo} = drEquation;
    const cationOne: string = reactantOne.cation.ionFormula;
    const anionOne: string = reactantOne.anion.ionFormula;
    const cationTwo: string = reactantTwo.cation.ionFormula;
    const anionTwo: string = reactantTwo.anion.ionFormula;

    const tableKeys: string[] = [cationOne, cationTwo, anionOne, anionTwo];

    let balancingTable: BalancingTable = {} as BalancingTable;

    // Sets key and quantities for A from general pattern
    balancingTable[cationOne] = {
        qtyReactants: reactantOne.cation.subscript,
        qtyProducts: productOne.cation.subscript,
    }

    // Sets key and quantities for B from general pattern
    balancingTable[anionOne] = {
        qtyReactants: reactantOne.anion.subscript,
        qtyProducts: productTwo.anion.subscript,
    }

    // Sets key and quantities for C from general pattern
    balancingTable[cationTwo] = {
        qtyReactants: reactantTwo.cation.subscript,
        qtyProducts: productTwo.cation.subscript,
    }

    // Sets key and quantities for D from general pattern
    balancingTable[anionTwo] = {
        qtyReactants: reactantTwo.anion.subscript,
        qtyProducts: productOne.anion.subscript,
    }

    return {balancingTable, tableKeys}
}