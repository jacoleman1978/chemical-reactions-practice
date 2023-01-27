import { CoefficientInputs, UserCoefficients } from "../../../customHooks/configurations/interfaces";

export const convertUserCoefficients = (coefficientInputs: CoefficientInputs): UserCoefficients => {
    const userCoefficients: UserCoefficients = {
        R1: coefficientInputs.R1 === "" ? 1 : Number(coefficientInputs.R1),
        R2: coefficientInputs.R2 === "" ? 1 : Number(coefficientInputs.R2),
        P1: coefficientInputs.P1 === "" ? 1 : Number(coefficientInputs.P1),
        P2: coefficientInputs.P2 === "" ? 1 : Number(coefficientInputs.P2),
    }

    return userCoefficients;
};
