import { FormulaParts, StateOfMatter } from '../../common/configurations/types';
import { CoefficientType } from '../../../customHooks/configurations/types';

export interface EquationPart {
    coefficientType: CoefficientType,
    compoundName: string,
    formulaParts: FormulaParts,
    state: StateOfMatter,
    targetCoefficient: string,
    coefficient: number,
}

export interface EquationParts {
    R1: EquationPart,
    R2: EquationPart,
    P1: EquationPart,
    P2: EquationPart,
}