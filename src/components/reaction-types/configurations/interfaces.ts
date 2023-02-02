import { ReactElement } from "react";
import { Ion } from "../../ions/configurations/interfaces";
import { IonicCompound, MolecularCompound } from "../../compounds/configurations/interfaces";
import { ReactionType, FormulaParts, StateOfMatter } from "../../common/configurations/types";
import { CoefficientType } from "../../../customHooks/configurations/types";

export interface InformationDisplay {
    reactionType: ReactionType,
    label: string,
    information: string,
    example: () => ReactElement,
}

export interface ReactionTypeMenuOption {
    reactionType: ReactionType,
    optionTitle: string,
}

export interface RxnTypeDropdownProps {
    toggleFlag: boolean,
    reactionType: ReactionType
}

export interface EquationElement {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
    molarMass: number,
    state: StateOfMatter,
    coefficient: number,
    subscript: number,
}

export interface DecompositionReaction {
    type: ReactionType,
    reactantOne: IonicCompound,
    productOne: EquationElement,
    productTwo: EquationElement,
}

export interface CombustionReaction {
    type: ReactionType,
    hydrocarbon: MolecularCompound,
    o2: EquationElement,
    h2o: MolecularCompound,
    co2: MolecularCompound,
}

export interface SRReaction {
    type: ReactionType,
    reactantCompound: IonicCompound,
    reactantElement: EquationElement,
    productCompound: IonicCompound,
    productElement: EquationElement,
}

export interface DRReaction {
    type: ReactionType,
    reactantOne: IonicCompound,
    reactantTwo: IonicCompound,
    productOne: IonicCompound,
    productTwo: IonicCompound,
}

export interface CombinationReaction {
    type: ReactionType,
    reactantOne: EquationElement,
    reactantTwo: EquationElement,
    productOne: IonicCompound,
}

export interface BalancingTable {
    [member: string]: {
        qtyReactants: number,
        qtyProducts: number,
    },
}

export interface SolubilityLists {
    solubleIons: string [],
    insolubleIons: string [],
}

export interface SortedCationSolubilityTable extends SolubilityLists {
    cation: Ion,
}

export interface DRAnionsWithCation {
    firstCation: Ion,
    firstAnion: Ion,
    secondAnion: Ion,
}

export interface DRIons extends DRAnionsWithCation {
    secondCation: Ion,
}

export interface CompoundParts {
    [key: string]: number;
}

export interface EquationPart {
    coefficientType: CoefficientType,
    ariaLabel: string,
    formulaParts: FormulaParts,
    state: StateOfMatter,
    targetCoefficient: string,
    coefficient: number,
    compoundParts: CompoundParts,
}

export interface EquationParts {
    reactionType: ReactionType,
    R1: EquationPart,
    R2: EquationPart,
    P1: EquationPart,
    P2: EquationPart,
}