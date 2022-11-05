import { formulasInstructions } from "../../../configurations/formulasInstructions";
import { namingInstructions } from "../../../configurations/namingInstructions";
import { CompoundInstructions } from "../../../interfaces";

export const getCompoundInstructions = (type: string, practiceType: string): string[] => {
    let compoundInstructions: CompoundInstructions = {} as CompoundInstructions;

    if (practiceType === "naming") {
        compoundInstructions = namingInstructions;
    } else if (practiceType === "formulas") {
        compoundInstructions = formulasInstructions;
    }

    if (type === 'ionic-main') {
        return compoundInstructions.ionic.main
    } else if (type === 'ionic-transition') {
        return compoundInstructions.ionic.transition
    } else if (type === 'ionic-polyatomic') {
        return compoundInstructions.ionic.polyatomic
    } else if (type === 'ionic-mixed') {
        return compoundInstructions.ionic.mixed
    } else if (type === 'acids') {
        return compoundInstructions.acids
    } else if (type === 'molecular') {
        return compoundInstructions.molecular
    } else if (type === 'mixed') {
        return compoundInstructions.mixed
    } 

    return []
}