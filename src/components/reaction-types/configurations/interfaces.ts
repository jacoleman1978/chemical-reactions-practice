import { ReactElement } from "react";
import { StateOfMatter } from "./types";
import { Compound } from "../../compounds/configurations/interfaces";
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
    fluoride: boolean,
    chloride: boolean,
    bromide: boolean,
    iodide: boolean,
    chlorate: boolean,
    hydroxide: boolean,
    sulfite: boolean,
    sulfate: boolean,
    carbonate: boolean,
    nitrite: boolean,
    nitrate: boolean,
    phosphate: boolean,
    acetate: boolean,
    chromate: boolean,
}

export interface SolubilityCations {
    ammonium: SolubilityAnions,
    lithium: SolubilityAnions,
    sodium: SolubilityAnions,
    potassium: SolubilityAnions,
    magnesium: SolubilityAnions,
    calcium: SolubilityAnions,
    barium: SolubilityAnions,
    iron: SolubilityAnions,
    copper: SolubilityAnions,
    silver: SolubilityAnions,
    zinc: SolubilityAnions,
    lead: SolubilityAnions,
    aluminum: SolubilityAnions,
    mercury: SolubilityAnions,
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