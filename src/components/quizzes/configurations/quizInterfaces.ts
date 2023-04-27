import { CompoundType } from "../../compounds/configurations/compoundTypes";

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

export interface NumberOfTypes {
    overall: number;
    main: number;
    transitionMetal: number;
    polyatomic: number;
    tmAndPoly: number;
    acids: number;
    molecular: number;
}

export interface FormulaStats {
    askedByType: NumberOfTypes;
    correctByType: NumberOfTypes;
    capitalization: string[];
    elementSwaps: string[];
    parentheses: string[];
    subscripts: string[];
    monatomicIons: string[];
    polyatomicIons: string[];
    greekPrefixes: string[];
    acids: string[];
}

export interface NamingStats {
    askedByType: NumberOfTypes;
    correctByType: NumberOfTypes;
    capitalization: string[];
    elementSwaps: string[];
    parentheses: string[];
    subscripts: string[];
    monatomicIons: string[];
    polyatomicIons: string[];
    greekPrefixes: string[];
    acids: string[];
}

export interface CompoundStats {
    formulas: FormulaStats;
    naming: NamingStats;
}