import { ChangeEvent } from "react";
import { PracticeType, Type } from "../../common/configurations/types";
import { CationCharge, AnionCharge } from "./types";

export interface FormulaParts {
    firstPart: (string | number)[],
    firstSubscript: string,
    secondPart: (string | number)[],
    secondSubscript: string,
}

export interface QuestionProps {
    morePracticeToggle: boolean;
    compoundName: string;
    compoundFormula: string;
    formulaParts: FormulaParts;
    practiceType: PracticeType;
}

export interface CompoundsPracticeProps {
    type: Type;
    practiceType: PracticeType;
}

export interface Ion {
    ionName: string,
    ionSymbol: (string | number)[],
    charge: CationCharge | AnionCharge,
    isPolyatomic: boolean,
}

export interface Compound {
    cation: Ion,
    anion: Ion,
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
}

export interface NamingQuestionProps {
    formulaParts: FormulaParts;
    formStyle: {backgroundColor: string};
    handleUserAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
    userAnswer: string;
}