import { PossiblePositiveCharges, PossibleNegativeCharges, MolecularOxStates, GreekPrefixes } from "./types";
import { StateOfMatter, FormulaParts } from "../../common/configurations/types";

export interface BooleanDict {
    [member: string]: boolean,
}

export interface Element {
    readonly elementSymbol: string,
    readonly elementName: string,
    readonly ionName: string,
    readonly possiblePositiveCharges?: PossiblePositiveCharges[],
    readonly possibleNegativeCharges?: PossibleNegativeCharges[],
    charge?: (PossiblePositiveCharges | PossibleNegativeCharges),
    readonly electronegativity?: number,
    readonly needsRomanNumerals: boolean,
    readonly activitySeriesPriority?: number,
    readonly solubilityTable?: BooleanDict,
    readonly stateOfMatter: StateOfMatter,
    readonly molarMass: number,
    subscript: number,
    
}

export interface ElementData {
    [member: string]: Element,
}

export interface TMMetalsByCharge {
    readonly plusOne: string[],
    readonly plusTwo: string[],
    readonly plusThree: string[],
    readonly plusFour: string[],
    readonly plusFive: string[],
    readonly plusSix: string[],
    readonly plusSeven: string[],
    readonly plusEight: string[]
}

export interface MolecularByOxState {
    readonly allPositive: string[],
    readonly plusOne: string[],
    readonly plusTwo: string[],
    readonly plusThree: string[],
    readonly plusFour: string[],
    readonly plusFive: string[],
    readonly plusSix: string[],
    readonly allNegative: string[],
    readonly negOne: string[],
    readonly negTwo: string[],
    readonly negThree: string[],
}

export interface Ion {
    ionName: string,
    ionFormula: string,
    ionParts: FormulaParts,
    charge: (PossiblePositiveCharges | PossibleNegativeCharges),
    isPolyatomic: boolean,
    molarMass: number,
    subscript: number,
    activitySeriesPriority?: number,
    solubilityTable?: BooleanDict,
}

export interface MolecularElement {
    elementSymbol: string,
    elementName: string,
    anionName: string,
    isDiatomic: boolean,
    oxState: MolecularOxStates,
    molarMass: number,
    subscript: number,
    coefficient: number,
    greekPrefix: GreekPrefixes,
}

export interface PolyatomicIonData {
    [member: string]: Ion,
}