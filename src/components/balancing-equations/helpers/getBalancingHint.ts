import { convertUserCoefficients } from "./convertUserCoefficients";
import { makeBalancingTable } from "./makeBalancingTable";
import { CoefficientInputs, UserCoefficients } from "../../../customHooks/configurations/interfaces";
import { EquationParts, BalancingTable } from "../../reaction-types/configurations/interfaces";

export const getBalancingHint = (coefficientInputs: CoefficientInputs, equationParts: EquationParts): string => {
    const userCoefficients: UserCoefficients = convertUserCoefficients(coefficientInputs);

    for (let coefficient of Object.values(coefficientInputs)) {
        if (Number(coefficient) === 1) {
            return "When a coefficient should be 1, leave it blank. It is similar to algebraic expressions where 1 is implied, but omitted.";
        } else if (Number(coefficient) % 1 !== 0) {
            return "Coefficients must be whole numbers. If you need a fraction, multiply both sides of the equation by the denominator.";
        } 
    }

    for (let multiplier of [2, 3, 5, 7]) {
        if (userCoefficients.R1 % multiplier === 0 
            && userCoefficients.R2 % multiplier === 0 
            && userCoefficients.P1 % multiplier === 0 
            && userCoefficients.P2 % multiplier === 0
        ) {
            return `The coefficients are all divisible by ${multiplier}. Try dividing both sides of the equation by ${multiplier}.`;
        }
    }

    const balancingTable: BalancingTable = makeBalancingTable(userCoefficients, equationParts);

    for (let [part, {qtyReactants, qtyProducts}] of Object.entries(balancingTable)) {
        if (Math.max(qtyReactants, qtyProducts) % Math.min(qtyReactants, qtyProducts) !== 0) {
            return `The ${part} is not balanced. It is even on one side and odd on the other. Try multiplying both sides of the equation by 2.`;
        }
    }

    return "";
};