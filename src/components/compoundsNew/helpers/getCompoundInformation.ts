import { compoundTitles } from "../configurations/compoundTitles";
import { formulasInstructions, namingInstructions } from "../configurations/compoundInstructions"
import { CompoundDescription, CompoundInstructions } from "../configurations/compoundInterfaces";
import { PracticeType } from "../../common/configurations/commonTypes";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates the compound practice title depending on the type and practiceType.
 * @param compoundType The literal type Type of compound practice
 * @param practiceType The literal type PracticeType of practice
 * @returns The compound practice title as a string
 */
export const getCompoundPracticeTitle = (compoundType: CompoundType, practiceType: PracticeType): string => {
    let title: string = "";

    // Add the beginning of the practice title depending on the practiceType
    if (practiceType === "naming") {
        title += "Naming Compounds: ";

    } else if (practiceType === "formulas") {
        title += "Formulas of Compounds: ";
    }

    // If the type is "ionic", add "Ionic - " to the title.
    // Add the rest of the title using the getCompoundDescriptions() helper function.
    title += (compoundType.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(compoundType, compoundTitles);

    return title
}

/**
 * Uses the Type of practice and the CompoundDescription object to return the general description of that type of practice.
 * @param compoundType Literal type of CompoundType of practice.
 * @param compoundData CompoundDescription object with a brief description of that type of practice
 * @returns A string description for the compound type
 */
 export const getCompoundDescriptions = (compoundType: CompoundType, compoundData: CompoundDescription): string => {
    if (compoundType === 'ionic-main') {
        return compoundData.ionic.main

    } else if (compoundType === 'ionic-transition') {
        return compoundData.ionic.transition

    } else if (compoundType === 'ionic-polyatomic') {
        return compoundData.ionic.polyatomic

    } else if (compoundType === 'ionic-mixed') {
        return compoundData.ionic.mixed

    } else if (compoundType === 'acids') {
        return compoundData.acids

    } else if (compoundType === 'molecular') {
        return compoundData.molecular

    } else if (compoundType === 'mixed') {
        return compoundData.mixed
    } 

    return ""
}

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