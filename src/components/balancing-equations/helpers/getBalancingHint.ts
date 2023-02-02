import { makeBalancingTable } from "./makeBalancingTable";
import { UserCoefficients } from "../../../customHooks/configurations/interfaces";
import { EquationParts, BalancingTable } from "../../reaction-types/configurations/interfaces";

/**
 * Evaluates the user-entered coefficients for the balanced equation form, giving specific feedback to the user.
 * @param userCoefficients Interface of CoefficientInputs containing the coefficients entered into the form for balanced equations with and empty string representing the coefficient of "1".
 * @param equationParts Interface of EquationParts, containing information necessary for displaying and evaluating balanced chemical equations
 * @returns string with specific feedback regarding the user's coefficient input, attempting to balance a chemical equation.
 */

export const getBalancingHint = (userCoefficients: UserCoefficients, equationParts: EquationParts): string => {
    for (let coefficient of Object.values(userCoefficients)) {
        // Check for user-entered "1" instead of ""
        if (Number(coefficient) === 1) {
            return "When a coefficient should be 1, leave it blank. It is similar to algebraic expressions where 1 is implied, but omitted.";

        // Check for non-integer, user-entered coefficients
        } else if (Number(coefficient) % 1 !== 0) {
            return "Coefficients must be whole numbers. If you need a fraction, multiply both sides of the equation by the denominator.";
        } 
    }

    // Check if the coeffients are least common multiples of each other or multiples of 2, 3, 5, or 7.
    for (let multiplier of [2, 3, 5, 7]) {
        if (userCoefficients.R1 % multiplier === 0 
            && userCoefficients.R2 % multiplier === 0 
            && userCoefficients.P1 % multiplier === 0 
            && userCoefficients.P2 % multiplier === 0
        ) {
            return `The coefficients are all divisible by ${multiplier}. Try dividing both sides of the equation by ${multiplier}.`;
        }
    }

    // Check if a balancing component is odd on one side and even on the other side of the chemical equation.
    const balancingTable: BalancingTable = makeBalancingTable(userCoefficients, equationParts);

    for (let [part, {qtyReactants, qtyProducts}] of Object.entries(balancingTable)) {
        if (Math.max(qtyReactants, qtyProducts) % Math.min(qtyReactants, qtyProducts) !== 0) {
            return `The ${part} is not balanced. It is even on one side and odd on the other. Try multiplying both sides of the equation by 2.`;
        }
    }

    return "";
};