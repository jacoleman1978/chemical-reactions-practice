import { CoefficientInputs, UserCoefficients } from "../../../customHooks/configurations/interfaces";

/**
 * Converts the CoefficientInputs string-based object into a number-based UserCoefficients object.
 * @param coefficientInputs Interface of CoefficientInputs containing the coefficients entered into the form for balanced equations with and empty string representing the coefficient of "1".
 * @returns UserCoefficients object ({R1: number, R2: number, P1: number, P2: number})
 */
export const convertUserCoefficients = (coefficientInputs: CoefficientInputs): UserCoefficients => {
    const userCoefficients: UserCoefficients = {
        R1: coefficientInputs.R1 === "" ? 1 : Number(coefficientInputs.R1),
        R2: coefficientInputs.R2 === "" ? 1 : Number(coefficientInputs.R2),
        P1: coefficientInputs.P1 === "" ? 1 : Number(coefficientInputs.P1),
        P2: coefficientInputs.P2 === "" ? 1 : Number(coefficientInputs.P2),
    }

    return userCoefficients;
};
