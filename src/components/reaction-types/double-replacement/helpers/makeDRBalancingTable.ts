import { BalancingTable, EquationCompound } from "../../configurations/interfaces";

/**
 * Creates the BalancingTable object used while balancing double replacement reactions
 * @param reactantOne Compound object of the first ionic reactant
 * @param reactantTwo Compound object of the second ionic reactant
 * @param productOne Compound object of the first ionic product
 * @param productTwo Compound object of the second ionic product
 * @returns "{balancingTable: BalancingTable, balancingTableKeys: string[]}"
 */
export const makeDRBalancingTable = (reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound): {balancingTable: BalancingTable, balancingTableKeys: string[]} => {
    // Generate the keys for the BalancingTable object from the names of the ions from both reactants
    const [cationOne, anionOne]: string[] = reactantOne.compound.compoundName.split(" ")
    const [cationTwo, anionTwo]: string[] = reactantTwo.compound.compoundName.split(" ")

    // Create the BalancingTable object
    let balancingTable: BalancingTable = {} as BalancingTable;

    balancingTable[cationOne] = {
        qtyReactants: reactantOne.balancingData.initialCationQty,
        qtyProducts: productOne.balancingData.initialCationQty, 
    }
    balancingTable[anionOne] = {
        qtyReactants: reactantOne.balancingData.initialAnionQty,
        qtyProducts: productTwo.balancingData.initialAnionQty,
    }
    balancingTable[cationTwo] = {
        qtyReactants: reactantTwo.balancingData.initialCationQty,
        qtyProducts: productTwo.balancingData.initialCationQty, 
    }
    balancingTable[anionTwo] = {
        qtyReactants: reactantTwo.balancingData.initialAnionQty,
        qtyProducts: productOne.balancingData.initialAnionQty,
    }

    // Create a list of keys as strings for the BalancingTable object
    let balancingTableKeys: string[] = [cationOne, anionOne, cationTwo, anionTwo]

    return {balancingTable, balancingTableKeys}
};
