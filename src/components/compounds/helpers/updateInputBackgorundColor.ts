import { isAnswerCorrect } from "./isAnswerCorrect";
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