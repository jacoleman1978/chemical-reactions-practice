import { convertUserCoefficients } from "./convertUserCoefficients";
import { makeBalancingTable } from "./makeBalancingTable";
import { UserCoefficients, CoefficientInputs } from "../../../customHooks/configurations/interfaces";
import { Equation, BalancingTable } from "../configurations/equationInterfaces";

/**
 * Evaluates the user-entered coefficients for the balanced equation form, giving specific feedback to the user.
 * @param userCoefficients Interface of CoefficientInputs containing the coefficients entered into the form for balanced equations with and empty string representing the coefficient of "1".
 * @param equation Interface of EquationParts, containing information necessary for displaying and evaluating balanced chemical equations
 * @returns string with specific feedback regarding the user's coefficient input, attempting to balance a chemical equation.
 */

export const getBalancingHint = (coefficientInputs: CoefficientInputs, equation: Equation): string => {
      // Converts the CoefficientInputs string-based object into a number-based UserCoefficients object.
    const userCoefficients: UserCoefficients = convertUserCoefficients(coefficientInputs);

    for (let coefficient of Object.values(coefficientInputs)) {
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
    const balancingTable: BalancingTable = makeBalancingTable(equation);

    for (let [part, {qtyInReactants, qtyInProducts}] of Object.entries(balancingTable)) {
        if (Math.max(qtyInReactants, qtyInProducts) % Math.min(qtyInReactants, qtyInProducts) !== 0) {
            return `The ${part} is not balanced. It is even on one side and odd on the other. In some cases multiplying both sides of the equation by 2 will fix the issue.`;
        }
    }

    return "";
};