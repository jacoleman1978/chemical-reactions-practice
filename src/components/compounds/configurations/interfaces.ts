import { PracticeType, CompoundType, StateOfMatter } from "../../common/configurations/types";
import { CationCharge, AnionCharge, FirstSubscript, SecondSubscript, PosMolecularOxStates, NegMolecularOxStates, PolyatomicIonCharge } from "./types";
import { BooleanDict } from "../../common/configurations/interfaces";

export interface FormulaParts {
    firstPart: (string | number)[],
    firstSubscript: string,
    secondPart: (string | number)[],
    secondSubscript: string,
}

export interface PolyatomicIon {
    readonly ionFormula: string,
    readonly ionParts: (string | number)[],
    readonly ionName: string,
    readonly charge: PolyatomicIonCharge,
    readonly solubilityTable?: BooleanDict,
    readonly molarMass: number,
    quantityInReactants?: number,
    quantityInProducts?: number,
}

export interface PolyatomicIonData {
    [member: string]: PolyatomicIon,
}

export interface IonicCompound {
    compoundName: string,
    compoundFormula: string,
    cationFormula: string,
    cationSubscript: number,
    anionFormula: string,
    anionSubscript: number,
    state?: StateOfMatter,
    molarMass?: number,
    coefficient?: number,
    activitySeriesPriority?: number,
    solubilityTable?: BooleanDict,
}

export interface QuestionProps {
    toggleFlag: boolean;
    compoundName: string;
    compoundFormula: string;
    formulaParts: FormulaParts;
    practiceType: PracticeType;
}

export interface CompoundsPracticeProps {
    compoundType: CompoundType;
    practiceType: PracticeType;
}

export interface Ion {
    ionName: string,
    ionSymbol: (string | number)[],
    charge: CationCharge | AnionCharge,
    isPolyatomic: boolean,
}

export interface MolecularCompound {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
}

export interface Compound extends MolecularCompound {
    cation: Ion,
    anion: Ion,
}

export interface NamingQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    formulaParts: FormulaParts;
    userAnswer: string;
}

export interface FormulasQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    compoundName: string;
    userAnswer: string;
}

export interface CompoundSubscripts {
    first: FirstSubscript,
    second: SecondSubscript,
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

export interface FormattedIonProps {
    formulaParts: (string | number)[];
}

export interface MolecularElements {
    formulaName: string,
    elementSymbol: string,
}

export interface FirstMolecularElement extends MolecularElements {
    oxidationState: PosMolecularOxStates,
}

export interface SecondMolecularElement extends MolecularElements {
    oxidationState: NegMolecularOxStates,
}