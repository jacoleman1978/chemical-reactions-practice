import { BalancingTable, EquationCompound } from "../../configurations/interfaces";

export const makeDRBalancingTable = (reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound): [BalancingTable, string[]] => {
    const [cationOne, anionOne]: string[] = reactantOne.compound.compoundName.split(" ")
    const [cationTwo, anionTwo]: string[] = reactantTwo.compound.compoundName.split(" ")

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

    let balancingtableKeys: string[] = [cationOne, anionOne, cationTwo, anionTwo]

    return [balancingTable, balancingtableKeys]
};
