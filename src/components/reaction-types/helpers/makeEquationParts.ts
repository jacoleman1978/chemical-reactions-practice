import { EquationPartType } from "../configurations/types";
import { ReactionTypeList } from "../../common/configurations/types";
import { DecompositionReaction, CombinationReaction, SRReaction, DRReaction, CombustionReaction, EquationPart, EquationParts, CompoundParts } from "../configurations/interfaces";

export const makeEquationParts = (equation: ReactionTypeList): EquationParts => {
    let R1: EquationPartType = null;
    let R2: EquationPartType = null;
    let P1: EquationPartType = null;
    let P2: EquationPartType = null;
    let R1AriaLabel: string = "";
    let R2AriaLabel: string = "";
    let P1AriaLabel: string = "";
    let P2AriaLabel: string = "";
    let R1CompoundParts: CompoundParts = {} as CompoundParts;
    let R2CompoundParts: CompoundParts = {} as CompoundParts;
    let P1CompoundParts: CompoundParts = {} as CompoundParts;
    let P2CompoundParts: CompoundParts = {} as CompoundParts;
    
    if (equation.type === "decomposition") {
        const {reactantOne, productOne, productTwo} = equation as DecompositionReaction;
        R1 = reactantOne;
        P1 = productOne;
        P2 = productTwo;

        R1AriaLabel = reactantOne.compoundName;
        P1AriaLabel = productOne.compoundName + productTwo.compoundName;
        P2AriaLabel = productTwo.compoundName + productOne.compoundName;

        R1CompoundParts[reactantOne.cation.ionFormula] = reactantOne.cation.subscript;
        R1CompoundParts[reactantOne.anion.ionFormula] = reactantOne.anion.subscript;
        P1CompoundParts[productOne.compoundFormula] = productOne.subscript;
        P2CompoundParts[productTwo.compoundFormula] = productTwo.subscript;

    } else if (equation.type === "combination") {
        const {reactantOne, reactantTwo, productOne} = equation as CombinationReaction;
        R1 = reactantOne;
        R2 = reactantTwo;
        P1 = productOne;

        R1AriaLabel = reactantOne.compoundName + reactantTwo.compoundName;
        R2AriaLabel = reactantTwo.compoundName + reactantOne.compoundName;
        P1AriaLabel = productOne.compoundName;

        R1CompoundParts[reactantOne.compoundFormula] = reactantOne.subscript;
        R2CompoundParts[reactantTwo.compoundFormula] = reactantTwo.subscript;
        P1CompoundParts[productOne.cation.ionFormula] = productOne.cation.subscript;
        P1CompoundParts[productOne.anion.ionFormula] = productOne.anion.subscript;

    } else if (equation.type === "single-replacement" || equation.type === "sr-no-reaction") {
        const {reactantCompound, reactantElement, productCompound, productElement} = equation as SRReaction;
        R1 = reactantCompound;
        R2 = reactantElement;
        P1 = productCompound;
        P2 = productElement;

        R1AriaLabel = reactantCompound.compoundName + reactantElement.compoundName;
        R2AriaLabel = reactantElement.compoundName + reactantCompound.compoundName;
        P1AriaLabel = productCompound.compoundName + productElement.compoundName;
        P2AriaLabel = productElement.compoundName + productCompound.compoundName;

        R1CompoundParts[reactantCompound.cation.ionFormula] = reactantCompound.cation.subscript;
        R1CompoundParts[reactantCompound.anion.ionFormula] = reactantCompound.anion.subscript;
        R2CompoundParts[reactantElement.compoundFormula] = reactantElement.subscript;
        P1CompoundParts[productCompound.cation.ionFormula] = productCompound.cation.subscript;
        P1CompoundParts[productCompound.anion.ionFormula] = productCompound.anion.subscript;
        P2CompoundParts[productElement.compoundFormula] = productElement.subscript;

    } else if (equation.type === "double-replacement" || equation.type === "dr-no-reaction") {
        const {reactantOne, reactantTwo, productOne, productTwo} = equation as DRReaction;
        R1 = reactantOne;
        R2 = reactantTwo;
        P1 = productOne;
        P2 = productTwo;

        R1AriaLabel = reactantOne.compoundName + reactantTwo.compoundName;
        R2AriaLabel = reactantTwo.compoundName + reactantOne.compoundName;
        P1AriaLabel = productOne.compoundName + productTwo.compoundName;
        P2AriaLabel = productTwo.compoundName + productOne.compoundName;

        R1CompoundParts[reactantOne.cation.ionFormula] = reactantOne.cation.subscript;
        R1CompoundParts[reactantOne.anion.ionFormula] = reactantOne.anion.subscript;
        R2CompoundParts[reactantTwo.cation.ionFormula] = reactantTwo.cation.subscript;
        R2CompoundParts[reactantTwo.anion.ionFormula] = reactantTwo.anion.subscript;
        P1CompoundParts[productOne.cation.ionFormula] = productOne.cation.subscript;
        P1CompoundParts[productOne.anion.ionFormula] = productOne.anion.subscript;
        P2CompoundParts[productTwo.cation.ionFormula] = productTwo.cation.subscript;
        P2CompoundParts[productTwo.anion.ionFormula] = productTwo.anion.subscript;

    } else {
        const {hydrocarbon, o2, h2o, co2} = equation as CombustionReaction;
        R1 = hydrocarbon;
        R2 = o2;
        P1 = h2o;
        P2 = co2;

        R1AriaLabel = hydrocarbon.compoundFormula;
        R2AriaLabel = o2.compoundName + hydrocarbon.compoundFormula;
        P1AriaLabel = h2o.compoundName + hydrocarbon.compoundFormula;
        P2AriaLabel = co2.compoundName + hydrocarbon.compoundFormula;

        R1CompoundParts["C"] = hydrocarbon.firstElement.subscript;
        R1CompoundParts["H"] = hydrocarbon.secondElement.subscript;
        R1CompoundParts["O"] = hydrocarbon.thirdElement?.subscript ?? 0;
        R2CompoundParts["O"] = 2;
        P1CompoundParts["H"] = 2;
        P1CompoundParts["O"] = 1;
        P2CompoundParts["C"] = 1;
        P2CompoundParts["O"] = 2;

    }

    const defaultEquationPart: EquationPart = {
        coefficientType: "all",
        ariaLabel: "",
        formulaParts: [],
        state: "",
        targetCoefficient: "",
        coefficient: 1,
        compoundParts: {},
    }

    const equationParts: EquationParts = {
        reactionType: equation.type,
        R1: R1 === null ? defaultEquationPart : {
            coefficientType: "R1",
            ariaLabel: R1AriaLabel,
            formulaParts: R1.formulaParts,
            state: R1.state,
            targetCoefficient: (R1.coefficient === 1 ? "" : `${R1.coefficient}`),
            coefficient: R1.coefficient,
            compoundParts: R1CompoundParts,
        },
        R2: R2 === null ? defaultEquationPart : {
            coefficientType: "R2",
            ariaLabel: R2AriaLabel,
            formulaParts: R2.formulaParts,
            state: R2.state,
            targetCoefficient: (R2.coefficient === 1 ? "" : `${R2.coefficient}`),
            coefficient: R2.coefficient,
            compoundParts: R2CompoundParts,
        },
        P1: P1 === null ? defaultEquationPart : {
            coefficientType: "P1",
            ariaLabel: P1AriaLabel,
            formulaParts: P1.formulaParts,
            state: P1.state,
            targetCoefficient: (P1.coefficient === 1 ? "" : `${P1.coefficient}`),
            coefficient: P1.coefficient,
            compoundParts: P1CompoundParts,
        },
        P2: P2 === null ? defaultEquationPart : {
            coefficientType: "P2",
            ariaLabel: P2AriaLabel,
            formulaParts: P2.formulaParts,
            state: P2.state,
            targetCoefficient: (P2.coefficient === 1 ? "" : `${P2.coefficient}`),
            coefficient: P2.coefficient,
            compoundParts: P2CompoundParts,
        },
    }

    return {...equationParts}
};