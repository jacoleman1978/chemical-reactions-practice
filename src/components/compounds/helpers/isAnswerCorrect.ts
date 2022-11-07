import { Compound } from "../configurations/interfaces";
import { PracticeType } from "../../common/configurations/types"

/**
 * Determines if the user answer is correct depending on the practiceType of the question
 * @param answer Input field answer from compound question
 * @param compound An object of Compound including all of relevant compound data
 * @param practiceType The practice type of type PracticeType
 * @returns A boolean indicating if the answer is correct (true) or not (false)
 */

export const isAnswerCorrect = (answer: string, compound: Compound, practiceType: PracticeType): boolean => {
    if (practiceType === "naming" && answer === compound.compoundName) {
        return true

    } else if (practiceType === "formulas" && answer === compound.compoundFormula) {
        return true
    }

    return false
}