import { formulasInstructions, namingInstructions } from "../configurations/compoundInstructions"
import { CompoundInstructions } from "../configurations/interfaces";
import { Type, PracticeType } from "../../common/configurations/types";

/**
 * Use the type and practiceType to determine which set of practice instructions to return
 * @param type The literal Type to indicate the type of compound practice
 * @param practiceType The literal PracticeType to indicate whether "naming" or "formula" practice type is being used
 * @returns Instructions as an array of strings for the compound type and practiceType
 */

export const getCompoundInstructions = (type: Type, practiceType: PracticeType): string[] => {
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