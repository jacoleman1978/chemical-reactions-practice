import { ReactElement } from "react";
import { ReactionType } from "./equationTypes";
import { Compound } from "../../compoundsNew/configurations/compoundInterfaces";
import { CoefficientType, State } from "./equationTypes";

export interface EquationPart {
    coefficientType: CoefficientType,
    ariaLabel: string,
    coefficient: number,
    targetCoefficient: number,
    compound: Compound,
    state: State,
}

export interface Equation {
    reactionType: ReactionType,
    R1: EquationPart,
    R2: EquationPart,
    P1: EquationPart,
    P2: EquationPart,
}

export interface ReactionTypeMenuOption {
    reactionType: ReactionType,
    optionTitle: string,
}

export interface ReactionTypeDropdownProps {
    toggleFlag: boolean,
    reactionType: ReactionType
}

export interface InformationDisplay {
    reactionType: ReactionType,
    label: string,
    information: string,
    example: () => ReactElement,
}