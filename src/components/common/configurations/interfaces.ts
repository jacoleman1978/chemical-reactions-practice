import { PTGroup, PTPeriod, PossiblePositiveCharges, PossibleNegativeCharges, StateOfMatter } from "./types";

export interface Description {
    title: string;
    path: string;
    description: string;
}

export interface InstructionsListProps {
    label: string;
    instructionsList: string[];
}

export interface SubtitleProps {
    displayToggle: boolean;
    handleToggle: () => void;
    label: string;
}
export interface BooleanDict {
    [member: string]: boolean,
}

export interface Element {
    readonly elementSymbol: string,
    readonly elementName: string,
    readonly anionName?: string,
    readonly possiblePositiveCharges?: PossiblePositiveCharges[],
    readonly possibleNegativeCharges?: PossibleNegativeCharges[],
    readonly electronegativity?: number,
    readonly needsRomanNumerals?: boolean,
    readonly activitySeriesPriority?: number,
    readonly solubilityTable?: BooleanDict,
    readonly stateOfMatter: StateOfMatter,
    readonly molarMass: number,
    quantityInReactants?: number,
    quantityInProducts?: number,
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