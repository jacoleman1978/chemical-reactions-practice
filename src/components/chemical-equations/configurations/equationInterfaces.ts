import { ReactElement } from "react";
import { CompoundType } from "../../compounds/configurations/compoundTypes";
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
    readonly coefficientType: CoefficientType,
    ariaLabel: string,
    coefficient: number,
    readonly targetCoefficient: number,
    readonly name: string,
    readonly formula: string,
    readonly compoundType: CompoundType,
    readonly state: State,
    readonly inventory: {
        [key: string]: number;
    }
}

export interface Equation {
    readonly reactionType: ReactionType,
    R1: EquationPart,
    R2: EquationPart,
    P1: EquationPart,
    P2: EquationPart,
}

export interface BalancingTable {
    [key: string]: {
        qtyInReactants: number;
        qtyInProducts: number;
    };
}