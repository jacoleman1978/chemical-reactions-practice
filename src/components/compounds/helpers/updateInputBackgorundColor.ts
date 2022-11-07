import { isAnswerCorrect } from "./isAnswerCorrect";
import { Compound } from "../configurations/interfaces";
import { PracticeType } from "../../common/configurations/types";

/**
 * Determines the desired background color of the input field, depending on correctness of answer
 * @param answer The user's answer as a string from the input field of the compound question
 * @param compound An object of Compound including all of relevant compound data
 * @param practiceType The practice type of type PracticeType
 * @returns An object {backgroundColor: "color"} that can be used in a style attribute to change the background color
 */

export const updateInputBackgroundColor = (answer: string, compound: Compound, practiceType: PracticeType): {backgroundColor: string} => {
    if (isAnswerCorrect(answer, compound, practiceType)) {
        return {backgroundColor: "palegreen"}

    } else {
        return {backgroundColor: "lightpink"}
    }
}