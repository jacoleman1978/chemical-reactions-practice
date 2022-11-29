import { MolecularElement, Ion } from "../../ions/configurations/interfaces";
import { FirstSubscript, SecondSubscript } from "./types";
import { StateOfMatter, FormulaParts } from "../../common/configurations/types";

export interface CompoundSubscripts {
    first: FirstSubscript,
    second: SecondSubscript,
}

export interface IonicCompound {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
    cation: Ion,
    anion: Ion,
    molarMass: number,
    state?: StateOfMatter,
    coefficient?: number,
}

export interface MolecularCompound {
    compoundName: string,
    compoundFormula: string,
    formulaParts: FormulaParts,
    firstElement: MolecularElement,
    secondElement: MolecularElement, 
    thirdElement?: MolecularElement,
    molarMass: number,
    state?: StateOfMatter,
    coefficient?: number,
}

export interface MolecularPart {
    elementSymbol: string,
    oxState: number,
}