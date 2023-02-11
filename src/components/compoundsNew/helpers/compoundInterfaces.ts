import { CompoundType, PracticeType } from "../../common/configurations/types";

export interface CompoundPart {
    name: string;
    formula: string;
    isPolyatomic: boolean;
    needsRomanNumerals: boolean;
    molarMass: number;
    charge: number;
    subscript: number;
}

export interface Compound {
    type: CompoundType;
    name: string;
    formula: string;
    molarMass: number;
    numberOfParts: number;
    firstPart: CompoundPart;
    secondPart: CompoundPart;
    thirdPart: CompoundPart;
    coefficient: number;
}

export interface CompoundsPracticeProps {
    compoundType: CompoundType;
    practiceType: PracticeType;
}