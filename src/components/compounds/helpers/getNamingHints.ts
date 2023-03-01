import { getTMNamingHints } from "./getTMNamingHints";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates a hint for naming compounds for the first error encountered
 * @param userAnswer A string representing the user's answer
 * @param compoundName A string representing the correct name of the compound, including case, spacing and punctuation
 * @param compoundType A string representing the type of compound as a type literal of CompoundType
 * @returns 
 */
export const getNamingHints = (userAnswer: string, compoundName: string, compoundType: CompoundType): string => {
    if (userAnswer === compoundName) {
        return "The name of the compound is correct."
    }

    // Ensure that the user has entered an answer
    if (userAnswer.trim() === "") {
        return "Please enter a name for the compound.";
    }

    // Give hints for 'ionic-transition' compounds
    if (compoundType === "ionic-transition") {
        return getTMNamingHints(userAnswer, compoundName);
    } 
    
    // Ensure that therea are no capital letters in the user's answer
    if (userAnswer.toLowerCase() !== userAnswer) {
        return "The name of the compound should be written in lower case unless it is the first word in a sentence.";
    }

    // Ensure that there is a space between the two parts of the name
    if (!userAnswer.includes(" ")) {
        return "The name must have a space between the two parts of the name.";
    }

    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");
    const [firstCorrectAnswerPart, secondCorrectAnswerPart] = compoundName.split(" ");

    // Ensure that there is only one space in the user's answer
    if (userAnswer.split(" ").length > 2) {
        return "There can only be one space between the two parts of the name.";
    }

    // Give hints for 'ionic-main' compounds
    if (compoundType === "ionic-main") {
        // Ensure that the first part of the name is the name of the cation
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            return `The name of the cation is incorrect. It should be the name of the element on the periodic table.`;
        }

        // Ensure that the second part of the name is the name of the monatomic anion
        if (secondUserAnswerPart !== secondCorrectAnswerPart) {
            return `The name of the anion is incorrect. It should be the root name of the element on the periodic table with the suffix -ide.`;
        }
    }

    // Give hints for 'ionic-polyatomic' compounds
    if (compoundType === "ionic-polyatomic") {
        // Ensure that the first part of the name is the name of the cation
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            return `The name of the cation is incorrect. It should be the name of the element on the periodic table.`;
        }

        // Ensure that the second part of the name is the name of the correct polyatomic anion
        if (secondUserAnswerPart !== secondCorrectAnswerPart) {
            if (secondUserAnswerPart.slice(0, -3) === secondCorrectAnswerPart.slice(0, -3)) {
                return `The root name of the anion is correct. However, the suffix is incorrect.`;
            }

            return `The root name of the anion is incorrect.`;
        }
    }

    // Give hints for 'acids' compounds
    if (compoundType === "acids") {
        // Ensure the name ends with 'acid'
        if (secondUserAnswerPart !== "acid") {
            return 'The name of the compound should end with "acid".';
        }

        // Ensure that the first part of the name follows the correct naming convention based on anion suffix
        if (compoundName.includes("ous acid") && !userAnswer.includes("ous acid")) {
            return 'Acids are named depending on the suffix of the anion. If the anion ends with "ite", the acid is named with the suffix "ous acid".';
        }

        if (compoundName.includes("ic acid")) {
            if (!userAnswer.includes("ic acid")) {
                return 'Acids are named depending on the suffix of the anion. If the anion ends with "ide" or "ate", the acid is named with the suffix "ic acid".';

            } else if (compoundName.includes("hydro")) {
                let rootName: string = firstCorrectAnswerPart.slice(5, -2);

                if (firstUserAnswerPart.slice(0, 5) !== "hydro") {
                    return `The name of the acid should start with "hydro".`;
                }
                console.log(firstUserAnswerPart.slice(5, -2))
                if (firstUserAnswerPart.slice(5, -2) !== rootName) {
                    return `The root name of the anion is incorrect. If the anion ends with "ide", the acid should follow the format "hydro (anion root name)ic acid".`;
                }
            } else {
                return 'Acids are named depending on the suffix of the anion. If the anion ends with "ate", the acid is named with the suffix "ic acid".';
            }
        }
    }

    // Give hints for 'molecular' compounds
    if (compoundType === "molecular") {
        // Ensure that the first part of the name is the name of the first element and includes Greek prefixes other than 'mono'
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            // Ensure that "mono" prefix is not used for the first part of the name
            if (firstUserAnswerPart.slice(0, 4) === "mono") {
                return "The prefix 'mono' should not be used for the first part of the name.";
            }

            return `The first part of the name is incorrect. The name should start with the a Greek prefix equal to the subscript, but never 'mono' for the first part of the name followed by the name of the element on the periodic table.`;
        }

        // Ensure that the second part of the name is the name of the second element and includes Greek prefixes
        if (secondUserAnswerPart !== secondCorrectAnswerPart) {
            return `The second part of the name is incorrect. The name should start with the a Greek prefix equal to the subscript followed by the name of the element on the periodic table.`;
        }
    }
    
    return "The name of the compound is correct."
};
