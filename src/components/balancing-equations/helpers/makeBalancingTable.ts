import { UserCoefficients } from "../../../customHooks/configurations/interfaces";
import { EquationParts, BalancingTable } from "../../reaction-types/configurations/interfaces";

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
