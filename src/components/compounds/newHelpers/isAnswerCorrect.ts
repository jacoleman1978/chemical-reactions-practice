import { PracticeType } from "../../common/configurations/types"

/**
 * Determines if the user answer is correct depending on the practiceType of the question
 * @param answer Input field answer from compound question
 * @param compoundName The name of the compound as a string
 * @param compoundFormula The formatted compoundFormula as a string
 * @param practiceType The practice type of type PracticeType
 * @returns A boolean indicating if the answer is correct (true) or not (false)
 */
export const isAnswerCorrect = (answer: string, compoundName: string, compoundFormula: string, practiceType: PracticeType): boolean => {
    if (practiceType === "naming" && answer === compoundName) {
        return true

    } else if (practiceType === "formulas" && answer === compoundFormula) {
        return true
    }

    return false
}