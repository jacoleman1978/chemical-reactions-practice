import { PracticeType } from "../../common/configurations/types";

/**
 * Determines the desired background color of the input field, depending on correctness of answer
 * @param answer The user's answer as a string from the input field of the compound question
 * @param compoundName The name of the compound as a string
 * @param compoundFormula The formatted formula of the compound as a string
 * @param practiceType The practice type of type PracticeType
 * @returns An object {backgroundColor: "color"} that can be used in a style attribute to change the background color
 */

export const updateInputBackgroundColor = (answer: string, compoundName: string, compoundFormula: string, practiceType: PracticeType): {backgroundColor: string} => {
    if (isAnswerCorrect(answer, compoundName, compoundFormula, practiceType)) {
        return {backgroundColor: "palegreen"}

    } else {
        return {backgroundColor: "lightpink"}
    }
}

/**
 * Determines if the user answer is correct depending on the practiceType of the question
 * @param answer Input field answer from compound question
 * @param compoundName The name of the compound as a string
 * @param compoundFormula The formatted compoundFormula as a string
 * @param practiceType The practice type of type PracticeType
 * @returns A boolean indicating if the answer is correct (true) or not (false)
 */
 const isAnswerCorrect = (answer: string, compoundName: string, compoundFormula: string, practiceType: PracticeType): boolean => {
    if (practiceType === "naming" && answer === compoundName) {
        return true

    } else if (practiceType === "formulas" && answer === compoundFormula) {
        return true
    }

    return false
}