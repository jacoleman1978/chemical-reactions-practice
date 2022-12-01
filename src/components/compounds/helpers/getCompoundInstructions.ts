import { formulasInstructions, namingInstructions } from "../configurations/compoundInstructions"
import { CompoundInstructions } from "../configurations/interfaces";
import { CompoundType, PracticeType } from "../../common/configurations/types";

/**
 * Use the type and practiceType to determine which set of practice instructions to return
 * @param compoundType The literal Type to indicate the type of compound practice
 * @param practiceType The literal PracticeType to indicate whether "naming" or "formula" practice type is being used
 * @returns Instructions as an array of strings for the compound type and practiceType
 */

export const getCompoundInstructions = (compoundType: CompoundType, practiceType: PracticeType): string[] => {
    let compoundInstructions: CompoundInstructions = {} as CompoundInstructions;
    
    if (practiceType === "naming") {
        compoundInstructions = namingInstructions;

    } else if (practiceType === "formulas") {
        compoundInstructions = formulasInstructions;
    }

    if (compoundType === 'ionic-main') {
        return compoundInstructions.ionic.main

    } else if (compoundType === 'ionic-transition') {
        return compoundInstructions.ionic.transition

    } else if (compoundType === 'ionic-polyatomic') {
        return compoundInstructions.ionic.polyatomic

    } else if (compoundType === 'ionic-mixed') {
        return compoundInstructions.ionic.mixed

    } else if (compoundType === 'acids') {
        return compoundInstructions.acids

    } else if (compoundType === 'molecular') {
        return compoundInstructions.molecular

    } else if (compoundType === 'mixed') {
        return compoundInstructions.mixed
    } 

    return []
}