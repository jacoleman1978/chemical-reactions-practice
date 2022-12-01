import { ReactElement } from "react";
import { MolecularElement } from "../../ions/configurations/interfaces";
import { IonicCompound, MolecularCompound } from "../../compounds/newConfigurations/interfaces";
import { ReactionType, FormulaParts, StateOfMatter } from "../../common/configurations/types";

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
    element: MolecularElement,
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
    reactantOne: IonicCompound,
    reactantTwo: EquationElement,
    productOne: IonicCompound,
    productTwo: EquationElement,
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
    }
}