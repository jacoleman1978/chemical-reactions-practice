import { makeDREquationCompounds } from "./makeDREquationCompounds";
import { makeDRBalancingTable } from "./makeDRBalancingTable";
import { balanceIon } from "./balanceIon";
import { isBalanced } from "../../newHelpers/isBalanced";
import { drCations, drAnions } from "../../configurations/doubleReplacementIons";
import { Ion } from "../../../compounds/configurations/interfaces";
import { DRReactantPair, EquationCompound } from "../../configurations/interfaces";

/**
 * Uses the reactants to generate all EquationCompound objects for both reactants and products, then balances the equation
 * @param firstReactant DRReactionPair object
 * @param secondReactant DRReactionPari object
 * @returns "{reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound}"
 */
export const balanceDREquation = (firstReactant: DRReactantPair, secondReactant: DRReactantPair): {reactantOne: EquationCompound, reactantTwo: EquationCompound, productOne: EquationCompound, productTwo: EquationCompound} => {
    // Get the individual ions from both reactants
    const firstCation: Ion = {...drCations[firstReactant.cationName]};
    const firstAnion: Ion = {...drAnions[firstReactant.anionName]};
    const secondCation: Ion = {...drCations[secondReactant.cationName]};
    const secondAnion: Ion = {...drAnions[secondReactant.anionName]};

    // Make the EquationCompound objecst for all reactants and products
    let {reactantOne, reactantTwo, productOne, productTwo} = makeDREquationCompounds(firstCation, firstAnion, secondCation, secondAnion);

    // Make the BalancingTable object and balance the equation, one ion at a time
    let {balancingTable, balancingTableKeys} = makeDRBalancingTable(reactantOne, reactantTwo, productOne, productTwo);

    while (!isBalanced(balancingTable, balancingTableKeys)) {
        [balancingTable, reactantOne, productOne] = balanceIon(balancingTable, firstCation.ionName, reactantOne, productOne);

        [balancingTable, reactantOne, productTwo] = balanceIon(balancingTable, firstAnion.ionName, reactantOne, productTwo);
    
        [balancingTable, reactantTwo, productTwo] = balanceIon(balancingTable, secondCation.ionName, reactantTwo, productTwo);
    
        [balancingTable, reactantTwo, productOne] = balanceIon(balancingTable, secondAnion.ionName, reactantTwo, productOne);
    }

    return {reactantOne, reactantTwo, productOne, productTwo}
};
