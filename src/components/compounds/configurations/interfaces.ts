import { MolecularElement, Ion } from "../../ions/configurations/interfaces";
import { FirstSubscript, SecondSubscript } from "./types";
import { StateOfMatter, FormulaParts, CompoundType } from "../../common/configurations/types";

export interface CompoundSubscripts {
    first: FirstSubscript,
    second: SecondSubscript,
}

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

export interface IonicCompound {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
    cation: Ion,
    anion: Ion,
    molarMass: number,
    state: StateOfMatter,
    coefficient: number,
    compoundType: CompoundType,
}

export interface MolecularCompound {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
    firstElement: MolecularElement,
    secondElement: MolecularElement, 
    thirdElement?: MolecularElement,
    molarMass: number,
    state: StateOfMatter,
    coefficient: number,
    compoundType: CompoundType,
}

export interface MolecularPart {
    elementSymbol: string,
    oxState: number,
}