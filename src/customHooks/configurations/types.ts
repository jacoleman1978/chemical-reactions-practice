import { CoefficientInputs, BackgroundColorStyle } from "./interfaces";
import { Equation } from "../../components/chemical-equations/configurations/equationInterfaces";

export type UseToggle = [
    displayToggle: boolean,
    handleToggle: () => void,
];

export type UseFlag = [
    flag: boolean,
    handleSetFlag: (flag: boolean) => void,
]

export type UseCoefficientInputs = [
    coefficientInputs: CoefficientInputs,
    handleCoefficientInputs: (coefficientType: CoefficientType, coefficient: string) => void,
    inputColor: BackgroundColorStyle,
    handleUpdateInputColor: (coefficientInputs: CoefficientInputs, equation: Equation) => void,
];

export type CoefficientType = "R1" | "R2" | "P1" | "P2" | "all";