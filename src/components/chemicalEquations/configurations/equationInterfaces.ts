import { ReactElement } from "react";
import { CompoundType } from "../../compoundsNew/configurations/compoundTypes";
import { ReactionType } from "./equationTypes";
import { CoefficientType, State } from "./equationTypes";

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

export interface EquationPart {
    coefficientType: CoefficientType,
    ariaLabel: string,
    coefficient: number,
    targetCoefficient: number,
    name: string,
    formula: string,
    compoundType: CompoundType,
    state: State,
}

export interface Equation {
    reactionType: ReactionType,
    R1: EquationPart,
    R2: EquationPart,
    P1: EquationPart,
    P2: EquationPart,
    balancingTable: BalancingTable,
}

export interface BalancingTable {
    [key: string]: {
        qtyInReactants: number;
        qtyInProducts: number;
    };
}

export interface BalancingTableKeys {
    [key: string]: CoefficientType[];
}