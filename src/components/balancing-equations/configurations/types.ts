import { IonicCompound, MolecularCompound } from "../../compounds/configurations/interfaces";
import { EquationElement } from "../../reaction-types/configurations/interfaces";

export type EquationPartType  = MolecularCompound | EquationElement | IonicCompound | null;