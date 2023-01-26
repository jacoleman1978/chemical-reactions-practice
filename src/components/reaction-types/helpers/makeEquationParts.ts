import { EquationPartType } from "../../balancing-equations/configurations/types";
import { EquationPart, EquationParts } from "../../balancing-equations/configurations/interfaces";
import { ReactionTypeList } from "../../common/configurations/types";
import { DecompositionReaction, CombinationReaction, SRReaction, DRReaction, CombustionReaction } from "../configurations/interfaces";

export const makeEquationParts = (equation: ReactionTypeList): EquationParts => {
    let R1: EquationPartType = null;
    let R2: EquationPartType = null;
    let P1: EquationPartType = null;
    let P2: EquationPartType = null;
    let R1name: string = "";
    let R2name: string = "";
    let P1name: string = "";
    let P2name: string = "";
    
    if (equation.type === "decomposition") {
        const {reactantOne, productOne, productTwo} = equation as DecompositionReaction;
        R1 = reactantOne;
        P1 = productOne;
        P2 = productTwo;
        R1name = reactantOne.compoundName;
        P1name = productOne.compoundName + productTwo.compoundName;
        P2name = productTwo.compoundName + productOne.compoundName;

    } else if (equation.type === "combination") {
        const {reactantOne, reactantTwo, productOne} = equation as CombinationReaction;
        R1 = reactantOne;
        R2 = reactantTwo;
        P1 = productOne;
        R1name = reactantOne.compoundName + reactantTwo.compoundName;
        R2name = reactantTwo.compoundName + reactantOne.compoundName;
        P1name = productOne.compoundName;

    } else if (equation.type === "single-replacement" || equation.type === "sr-no-reaction") {
        const {reactantCompound, reactantElement, productCompound, productElement} = equation as SRReaction;
        R1 = reactantCompound;
        R2 = reactantElement;
        P1 = productCompound;
        P2 = productElement;
        R1name = reactantCompound.compoundName + reactantElement.compoundName;
        R2name = reactantElement.compoundName + reactantCompound.compoundName;
        P1name = productCompound.compoundName + productElement.compoundName;
        P2name = productElement.compoundName + productCompound.compoundName;

    } else if (equation.type === "double-replacement" || equation.type === "dr-no-reaction") {
        const {reactantOne, reactantTwo, productOne, productTwo} = equation as DRReaction;
        R1 = reactantOne;
        R2 = reactantTwo;
        P1 = productOne;
        P2 = productTwo;
        R1name = reactantOne.compoundName + reactantTwo.compoundName;
        R2name = reactantTwo.compoundName + reactantOne.compoundName;
        P1name = productOne.compoundName + productTwo.compoundName;
        P2name = productTwo.compoundName + productOne.compoundName;

    } else {
        const {hydrocarbon, o2, h2o, co2} = equation as CombustionReaction;
        R1 = hydrocarbon;
        R2 = o2;
        P1 = h2o;
        P2 = co2;
        R1name = hydrocarbon.compoundFormula;
        R2name = o2.compoundName + hydrocarbon.compoundFormula;
        P1name = h2o.compoundName + hydrocarbon.compoundFormula;
        P2name = co2.compoundName + hydrocarbon.compoundFormula;
    }

    const defaultEquationPart: EquationPart = {
        coefficientType: "all",
        compoundName: "",
        formulaParts: [],
        state: "",
        targetCoefficient: "",
        coefficient: 1,
    }

    const equationParts: EquationParts = {
        R1: R1 === null ? defaultEquationPart : {
            coefficientType: "R1",
            compoundName: R1name,
            formulaParts: R1.formulaParts,
            state: R1.state,
            targetCoefficient: (R1.coefficient === 1 ? "" : `${R1.coefficient}`),
            coefficient: R1.coefficient,
        },
        R2: R2 === null ? defaultEquationPart : {
            coefficientType: "R2",
            compoundName: R2name,
            formulaParts: R2.formulaParts,
            state: R2.state,
            targetCoefficient: (R2.coefficient === 1 ? "" : `${R2.coefficient}`),
            coefficient: R2.coefficient,
        },
        P1: P1 === null ? defaultEquationPart : {
            coefficientType: "P1",
            compoundName: P1name,
            formulaParts: P1.formulaParts,
            state: P1.state,
            targetCoefficient: (P1.coefficient === 1 ? "" : `${P1.coefficient}`),
            coefficient: P1.coefficient,
        },
        P2: P2 === null ? defaultEquationPart : {
            coefficientType: "P2",
            compoundName: P2name,
            formulaParts: P2.formulaParts,
            state: P2.state,
            targetCoefficient: (P2.coefficient === 1 ? "" : `${P2.coefficient}`),
            coefficient: P2.coefficient,
        },
    }

    return {...equationParts}
};