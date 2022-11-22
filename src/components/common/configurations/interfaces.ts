import { PTGroup, PTPeriod, PossibleCharges, StateOfMatter } from "./types";

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
    readonly group: PTGroup,
    readonly period: PTPeriod,
    readonly isDiatomic: boolean,
    readonly ionName: string,
    readonly possibleCharges: PossibleCharges[],
    readonly electronegativity: number,
    readonly isMetal: boolean,
    readonly needsRomanNumerals: boolean,
    readonly isOnActivitySeries: boolean,
    readonly activitySeriesPriority?: number,
    readonly isOnSolubilityTable: boolean,
    readonly solubilityTable?: BooleanDict,
    readonly stateOfMatter: StateOfMatter,
    readonly molarMass: number,
    quantity: number,
}

export interface ElementData {
    [member: string]: Element,
}