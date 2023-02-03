import { getTMNamingHints } from "./getTMNamingHints";
import { CompoundType } from "../../common/configurations/types";

export const getNamingHints = (userAnswer: string, compoundName: string, compoundType: CompoundType): string => {
    if (userAnswer.trim() === "") {
        return "Please enter a name for the compound.";
    }

    if (compoundType === "ionic-transition") {
        return getTMNamingHints(userAnswer, compoundName);
    }

    if (userAnswer.toLowerCase() !== userAnswer) {
        return "The name of the compound should be written in lower case unless it is the first word in a sentence.";
    }

    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");
    const [firstCorrectAnswerPart, secondCorrectAnswerPart] = compoundName.split(" ");

    if (compoundType === "ionic-main") {
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            return `The name of the cation is incorrect. It should be the name of the element on the periodic table.`;
        }

        if (secondUserAnswerPart !== secondCorrectAnswerPart) {
            return `The name of the anion is incorrect. It should be the root name of the element on the periodic table with the suffix -ide.`;
        }
    }
    
    return ""
};
