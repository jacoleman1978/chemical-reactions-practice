import { Equation, BalancingTable } from "../configurations/equationInterfaces"

/**
 * Make a list of each component of a chemical equation to be balanced, including the quantities of each component present in the reactants and products.
 * @param equation Object with an interface of Equation, containing information necessary for displaying and evaluating balanced chemical equations
 * @returns object with BalancingTable interface, {[key: string]: {qtyInReactants: number, qtyInProducts: number}} 
 */
export const makeBalancingTable = (equation: Equation): BalancingTable => {
    const { reactionType, R1, R2, P1, P2 } = equation;
    let balancingTable: BalancingTable = {} as BalancingTable;

    // Add keys from R1.inventory to balancingTable, setting qtyInReactants to the subscript * R1.coefficient
    for (let [part, subscript] of Object.entries(R1.inventory)) {
        balancingTable[part] = {
            qtyInReactants: subscript * R1.coefficient,
            qtyInProducts: 0,
        }
    }

    // Add keys from R2.inventory to balancingTable, setting qtyInReactants to the subscript * R2.coefficient
    for (let [part, subscript] of Object.entries(R2.inventory)) {
        // If the part is already in the balancingTable, add the subscript * R2.coefficient to the qtyInReactants
        if (reactionType === "combustion" && R1.inventory.hasOwnProperty(part)) {
            balancingTable[part].qtyInReactants += subscript * R2.coefficient;

        } else {
            balancingTable[part] = {
                qtyInReactants: subscript * R2.coefficient,
                qtyInProducts: 0,
            }
        }
    }

    // Add keys from P1.inventory to balancingTable, setting qtyInProducts to the subscript * P1.coefficient
    for (let [part, subscript] of Object.entries(P1.inventory)) {
        balancingTable[part].qtyInProducts = subscript * P1.coefficient;
    }

    // Add keys from P2.inventory to balancingTable, setting qtyInProducts to the subscript * P2.coefficient
    for (let [part, subscript] of Object.entries(P2.inventory)) {
        // If the part is already in the balancingTable, add the subscript * P2.coefficient to the qtyInProducts
        if (reactionType === "combustion" && P2.inventory.hasOwnProperty(part)) {
            balancingTable[part].qtyInProducts += subscript * P2.coefficient;
            
        } else {
            balancingTable[part].qtyInProducts = subscript * P2.coefficient;
        }
    }

    return {...balancingTable};
}
