import { CoefficientInputs, BackgroundColorStyle } from "./interfaces";

export type UseToggle = [
    displayToggle: boolean,
    handleToggle: () => void,
];

export type UseCoefficientInputs = [
    coefficientInputs: CoefficientInputs,
    handleCoefficientInputs: (coefficientType: CoefficientType, coefficient: string) => void,
    inputColor: BackgroundColorStyle,
    handleUpdateInputColor: (coefficientInputs: CoefficientInputs, targetCoefficients: CoefficientInputs) => void,
];

export type CoefficientType = "R1" | "R2" | "P1" | "P2" | "all";