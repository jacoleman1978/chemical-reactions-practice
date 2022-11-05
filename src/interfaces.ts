import { ChangeEvent } from "react";

export interface CheckboxAction {
    addId: string;
    removeId: string;
}

export interface CheckboxInfo {
    value: string;
    label: string;
}

export interface ChecklistProps {
    title: string;
    listItems: CheckboxInfo[];
    checkedList: string[];
    setCheckedList: (arg0: string[]) => void;
}

export interface CompoundOptionsProps {
    includedCompoundTypes: string[];
    setIncludedCompoundTypes: (arg0: string[]) => void;
    includedIonTypes: string[];
    setIncludedIonTypes: (arg0: string[]) => void;
}

export interface MenuLink {
    path: string;
    label: string;
}

export interface NavDropdownMenuProps {
    title: string;
    options: MenuLink[];
}

export interface NavMenuProps {
    path: string;
}

export interface Description {
    title: string;
    path: string;
    description: string;
}

export interface TitleProps {
    title: string;
}

export interface TypesContainerProps {
    types: Description[];
}

export interface PracticeProps {
    type: string;
}

export interface IonicDescription {
    main: string,
    transition: string,
    polyatomic: string,
    mixed: string,
}

export interface CompoundDescription {
    ionic: IonicDescription,
    acids: string,
    molecular: string,
    mixed: string,
}

export interface IonicInstructions {
    main: string[],
    transition: string[],
    polyatomic: string[],
    mixed: string[],
}

export interface CompoundInstructions {
    ionic: IonicInstructions,
    acids: string[],
    molecular: string[],
    mixed: string[],
}

export interface InstructionsListProps {
    label: string;
    instructionsList: string[];
}

export interface Ion {
    ionName: string,
    ionSymbol: (string | number)[],
    charge: number,
    isPolyatomic: boolean,
}

export interface Compound {
    cation: Ion,
    anion: Ion,
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
}

export interface CompoundSubscripts {
    first: number,
    second: number,
}

export interface SubtitleProps {
    displayToggle: boolean;
    handleToggle: () => void;
    label: string;
}

export interface FormulaParts {
    firstPart: (string | number)[],
    firstSubscript: string,
    secondPart: (string | number)[],
    secondSubscript: string,
}

export interface CompoundFormulaProps {
    formulaParts: FormulaParts;
}

export interface FormattedIonProps {
    formulaParts: (string | number)[];
}

export interface QuestionGroupProps {
    type: string;

}

export interface QuestionProps {
    morePracticeToggle: boolean;
    compoundName: string;
    compoundFormula: string;
    formulaParts: FormulaParts;
    practiceType: string;
}

export interface CompoundsPracticeProps {
    type: string;
    practiceType: string;
}

export interface NamingQuestionProps {
    formulaParts: FormulaParts;
    formStyle: {backgroundColor: string};
    handleUserAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
    userAnswer: string;
}

export interface FormulasQuestionProps {
    compoundName: string;
    formStyle: {backgroundColor: string};
    handleUserAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
    userAnswer: string;
}