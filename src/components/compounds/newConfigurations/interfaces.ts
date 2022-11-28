import { Ion } from "../../ions/configurations/interfaces";
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