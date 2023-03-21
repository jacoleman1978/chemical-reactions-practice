import { getTMNamingHints } from "./getTMNamingHints";
import { getAcidNamingHints } from "./getAcidNamingHints";
import { getMolecularNamingHints } from "./getMolecularNamingHints";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates a hint for naming compounds for the first error encountered
 * @param userAnswer A string representing the user's answer
 * @param compoundName A string representing the correct name of the compound, including case, spacing and punctuation
 * @param compoundType A string representing the type of compound as a type literal of CompoundType
 * @returns A string indicating the first error encountered
 */
export const getNamingHints = (userAnswer: string, compoundName: string, compoundType: CompoundType): string => {
    let hint: string = "";

    if (userAnswer === compoundName) {
        return "The name of the compound is correct."
    }

    // Ensure that the user has entered an answer
    if (userAnswer.trim() === "") {
        return "Please enter a name for the compound.";
    }

    // Give hints for 'ionic-transition' compounds
    if (compoundType === "ionic-transition" || compoundType === "ionic-mixed") {
        hint = getTMNamingHints(userAnswer, compoundName);

        if (hint !== "") {
            return hint;
        }
    } 
    
    // Ensure that therea are no capital letters in the user's answer
    if (compoundType !== "ionic-transition" && compoundType !== "ionic-mixed")
    if (userAnswer.toLowerCase() !== userAnswer) {
        return "The name of the compound should be written in lower case unless it is the first word in a sentence.";
    }

    // Check that the name has one and only one space between the two parts of the name
    const firstSpaceIndex = userAnswer.indexOf(" ");
    if (userAnswer.slice(firstSpaceIndex + 1, firstSpaceIndex + 2) === " ") {
        return "There can only be one space between the two parts of the name.";
    }

    // Ensure that there is a space between the two parts of the name
    if (!userAnswer.includes(" ")) {
        return "The name must have a space between the two parts of the name.";
    }

    // Split the user's answer and the correct answer into two words
    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");
    const [firstCorrectAnswerPart, secondCorrectAnswerPart] = compoundName.split(" ");

    // Ensure that there is only one space in the user's answer
    if (userAnswer.split(" ").length > 2) {
        return "There can only be two parts of a compound name.";
    }

    // Give hints for 'ionic-main' compounds
    if (compoundType === "ionic-main") {
        // Ensure that the first part of the name is the name of the cation
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            return `The name of the cation is incorrect. It should be the name of the element on the periodic table.`;
        }

        // Ensure that the second part of the name is the name of the monatomic anion
        return `The name of the anion is incorrect. It should be the root name of the element on the periodic table with the suffix -ide.`;
    }

    // Give hints for 'ionic-polyatomic' compounds
    if (compoundType === "ionic-polyatomic" || compoundType === "ionic-mixed") {
        // Ensure that the first part of the name is the name of the cation
        if (firstUserAnswerPart !== firstCorrectAnswerPart) {
            return `The name of the cation is incorrect. It should be the name of the element on the periodic table.`;
        }

        // Ensure that the second part of the name is the name of the correct polyatomic anion
        if (secondUserAnswerPart.slice(0, -3) === secondCorrectAnswerPart.slice(0, -3)) {
            return `The root name of the anion is correct. However, the suffix is incorrect.`;
        }

        return `The root name of the anion is incorrect.`;
    }

    // Give hints for 'acids' compounds
    if (compoundType === "acids") {
        return getAcidNamingHints(userAnswer, compoundName);
    }

    // Give hints for 'molecular' compounds
    if (compoundType === "molecular") {
        return getMolecularNamingHints(userAnswer, compoundName);
    }

    return `The second part of the name is incorrect.`;
};
