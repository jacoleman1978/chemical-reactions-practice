import { ReactElement } from "react";
import { StateOfMatter } from "./types";
import { Compound, Ion, MolecularCompound } from "../../compounds/configurations/interfaces";
import { ReactionType } from "../../common/configurations/types";

export interface InformationDisplay {
    reactionType: ReactionType,
    label: string,
    information: string,
    example: () => ReactElement,
}

export interface ActivitySeries {
    elementSymbol: string,
    elementName: string,
    possibleCharges: number[],
    priority: number,
    isTransitionMetal: boolean,
}

export interface SolubilityAnions {
    [member: string]: boolean,

}

export interface SolubilityCations {
    [member: string]: SolubilityAnions,
}

export interface ReactionTypeMenuOption {
    reactionType: ReactionType,
    optionTitle: string,
}

export interface Element {
    elementName: string,
    elementSymbol: string,
    isDiatomic: boolean,
    state: StateOfMatter,
}

export interface BalancingData {
    initialCationQty: number,
    initialAnionQty: number,
    totalCationQty: number,
    totalAnionQty: number,
}

export interface EquationElement {
    element: Element,
    coefficient: number,
    balancingData: BalancingData,
    formulaParts: {
        elementSymbol: string,
        subscript: string,
    },
}

export interface EquationCompound {
    compound: Compound,
    coefficient: number,
    state: StateOfMatter,
    balancingData: BalancingData,
}

export interface EquationMolecCompound {
    compound: MolecularCompound,
    coefficient: number,
    state: StateOfMatter,
    balancingData: BalancingData,
}

export interface DecompositionReaction {
    type: ReactionType,
    reactantOne: EquationCompound,
    productOne: EquationElement,
    productTwo: EquationElement,
}

export interface MakeDecompProductsReturn {
    productOne: EquationElement,
    productTwo: EquationElement,
}

export interface CombustionReaction {
    type: ReactionType,
    hydrocarbon: Hydrocarbon,
    o2: CombustionEquationOxygen,
    h2o: CombustionEquationProduct,
    co2: CombustionEquationProduct,
}

export interface MakeCombustProductsReturn {
    productOne: EquationMolecCompound,
    productTwo: EquationMolecCompound,
}

export interface SRReaction {
    type: ReactionType,
    reactantOne: EquationCompound,
    reactantTwo: EquationElement,
    productOne: EquationCompound,
    productTwo: EquationElement,
}

export interface MakeSRProductsReturn {
    productOne: EquationCompound,
    productTwo: EquationElement,
}

export interface DRReaction {
    type: ReactionType,
    reactantOne: EquationCompound,
    reactantTwo: EquationCompound,
    productOne: EquationCompound,
    productTwo: EquationCompound,
}

export interface MakeDRProductsReturn {
    productOne: EquationCompound,
    productTwo: EquationCompound,
}

export interface CombinationReaction {
    type: ReactionType,
    reactantOne: EquationElement,
    reactantTwo: EquationElement,
    productOne: EquationCompound,
}

export interface MakeCombProductsReturn {
    productOne: EquationCompound,
}

export interface MakeCombReactantsReturn {
    reactantOne: EquationElement,
    reactantTwo: EquationElement,
}

export interface BalancingTable {
    [member: string]: {
        qtyReactants: number,
        qtyProducts: number,
    }
}

export interface RxnTypeDropdownProps {
    toggleFlag: boolean,
    reactionType: ReactionType
}

export interface CombustionBalancingData {
    currentCQty: number,
    currentHQty: number,
    currentOQty: number
}

export interface Hydrocarbon {
    compoundFormula: string,
    carbonSubscript: string,
    hydrogenSubscript: string,
    hasOxygen: boolean
    oxygenSubscript?: string,
    coefficient: number,
    balancingData: CombustionBalancingData
}

export interface CombustionEquationProduct {
    compoundName: string,
    compoundFormula: string,
    coefficient: number,
    balancingData: CombustionBalancingData,
}

export interface CombustionEquationOxygen {
    elementName: string,
    elementSymbol: string,
    isDiatomic: boolean,
    state: StateOfMatter,
    coefficient: number,
    balancingData: CombustionBalancingData,
}

export interface DRReactantPair {
    cationName: string,
    anionName: string,
}

export interface DRIons {
    [member: string]: Ion,
}