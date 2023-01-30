import { UserCoefficients } from "../../../customHooks/configurations/interfaces";
import { EquationParts, BalancingTable } from "../../reaction-types/configurations/interfaces";

/**
 * Make a list of each component of a chemical equation to be balanced, including the quantities of each component present in the reactants and products.
 * @param userCoefficients number-based object with UserCoefficients interface.
 * @param equationParts Interface of EquationParts, containing information necessary for displaying and evaluating balanced chemical equations
 * @returns object with BalancingTable interface, {[key: string]: {qtyReactants: number, qtyProducts: number}} 
 */
export const makeBalancingTable = (userCoefficients: UserCoefficients, equationParts: EquationParts): BalancingTable => {
    let balancingTable: BalancingTable = {} as BalancingTable;

    for (let [part, subscript] of Object.entries(equationParts.R1.compoundParts)) {
        balancingTable[part] = {
            qtyReactants: subscript * userCoefficients.R1,
            qtyProducts: 0,
        }
    }

    for (let [part, subscript] of Object.entries(equationParts.R2.compoundParts)) {
        if (equationParts.reactionType === "combustion") {
            balancingTable[part].qtyReactants += subscript * userCoefficients.R2;

        } else {
            balancingTable[part] = {
                qtyReactants: subscript * userCoefficients.R2,
                qtyProducts: 0,
            }
        }
    }

    for (let [part, subscript] of Object.entries(equationParts.P1.compoundParts)) {
        balancingTable[part].qtyProducts = subscript * userCoefficients.P1;
    }

    for (let [part, subscript] of Object.entries(equationParts.P2.compoundParts)) {
        if (equationParts.reactionType === "combustion" && part === "O") {
            balancingTable[part].qtyProducts += subscript * userCoefficients.P2;
            
        } else {
            balancingTable[part].qtyProducts = subscript * userCoefficients.P2;
        }
    }

    return {...balancingTable};
}
