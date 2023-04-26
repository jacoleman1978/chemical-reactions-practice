import { CompoundType } from "./compoundTypes";
import { PracticeType } from "../../common/configurations/commonTypes";

export interface CompoundDescription {
    ionic: {
        main: string,
        transition: string,
        polyatomic: string,
        mixed: string,
    }
    acids: string,
    molecular: string,
    mixed: string,
}

export interface CompoundInstructions {
    ionic: {
        main: string[],
        transition: string[],
        polyatomic: string[],
        mixed: string[],
    },
    acids: string[],
    molecular: string[],
    mixed: string[],
}

export interface CompoundPart {
    name: string;
    formula: string;
    isPolyatomic: boolean;
    needsRomanNumerals: boolean;
    molarMass: number;
    charge: number;
    subscript: number;
}

export interface CompoundsPracticeProps {
    compoundType: CompoundType;
    practiceType: PracticeType;
}

export interface Compound {
    name: string;
    formula: string;
    type: CompoundType;
}

export interface CompoundQuizQuestion {
    name: string;
    formula: string;
    type: CompoundType;
    answer: string;
}

export interface CompoundQuiz {
    [key: string]: CompoundQuizQuestion;
}

export interface QuestionResults {
    isCorrect: boolean;
    question: CompoundQuizQuestion;
    comments: string[];
}

export interface CompoundQuizResults {
    [key: string]: QuestionResults;
}

export interface CompoundDemo {
    type: CompoundType;
    cationName: string;
    cationFormula: string;
    cationCharge: number;
    cationSubscript: number;
    anionName: string;
    anionFormula: string;
    anionCharge: number;
    anionSubscript: number;
}