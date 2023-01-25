import { EquationPartType } from "../configurations/types";
import { EquationPart, EquationParts } from "../configurations/interfaces";

export const makeEquationParts = (R1: EquationPartType, R2: EquationPartType, P1: EquationPartType, P2: EquationPartType): EquationParts => {
    const defaultEquationPart: EquationPart = {
        coefficientType: "all",
        compoundName: "",
        formulaParts: [],
        state: "",
    }

    const equationParts: EquationParts = {
        R1: R1 === null ? defaultEquationPart : {
            coefficientType: "R1",
            compoundName: R1.compoundName,
            formulaParts: R1.formulaParts,
            state: R1.state,
        },
        R2: R2 === null ? defaultEquationPart : {
            coefficientType: "R2",
            compoundName: R2.compoundName,
            formulaParts: R2.formulaParts,
            state: R2.state,
        },
        P1: P1 === null ? defaultEquationPart : {
            coefficientType: "P1",
            compoundName: P1.compoundName,
            formulaParts: P1.formulaParts,
            state: P1.state,
        },
        P2: P2 === null ? defaultEquationPart : {
            coefficientType: "P2",
            compoundName: P2.compoundName,
            formulaParts: P2.formulaParts,
            state: P2.state,
        },
    }

    return {...equationParts}
};