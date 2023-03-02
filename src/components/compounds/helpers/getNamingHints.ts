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

    const firstSpaceIndex = userAnswer.indexOf(" ");

    if (userAnswer.slice(firstSpaceIndex + 1, firstSpaceIndex + 2) === " ") {
        return "There can only be one space between the two parts of the name.";
    }

    // Ensure that there is a space between the two parts of the name
    if (!userAnswer.includes(" ")) {
        return "The name must have a space between the two parts of the name.";
    }

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
            return "The name of the compound should end with 'acid'. Use the acid naming rules.";
        }

        let correctAnionRootName: string = "";
        let userAnionRootName: string = "";
        let anionSuffix: string = "";

        // For acids with anions ending in 'ide'
        if (firstCorrectAnswerPart.includes("hydro") && compoundName.includes("ic acid")) {
            correctAnionRootName = firstCorrectAnswerPart.slice(5, -2);
            anionSuffix = "ide";

            // Check that the user has entered the correct suffix
            if (!userAnswer.includes("ic acid")) {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the suffix 'ic acid'.";
            }

            // Check that the user has entered the correct prefix
            if (firstUserAnswerPart.slice(0, 5) !== "hydro") {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the prefix 'hydro'.";
            }

            userAnionRootName = firstUserAnswerPart.slice(5, -2);

        // Acids with anions that don't end in 'ide' should not have a 'hydro' prefix
        } else if (firstUserAnswerPart.includes("hydro")) {
            return "Acids are named depending on the suffix of the anion. Only acids with anions ending in 'ide' should have a 'hydro' prefix.";

        // For acids with anions ending in 'ite'
        } else if (compoundName.includes("ous acid")) {
            correctAnionRootName = firstCorrectAnswerPart.slice(0, -3);
            anionSuffix = "ite";

            // Check that the user has entered the correct suffix
            if (!userAnswer.includes("ous acid")) {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.";
            }

            userAnionRootName = firstUserAnswerPart.slice(0, -3);

        // For acids with anions ending in 'ate'
        } else if (compoundName.includes("ic acid")) {
            correctAnionRootName = firstCorrectAnswerPart.slice(0, -2);
            anionSuffix = "ate";

            // Check that the user has entered the correct suffix
            if (!userAnswer.includes("ic acid")) {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.";
            }

            userAnionRootName = firstUserAnswerPart.slice(0, -2);
        }

        // Check that the user has entered the correct root name for non-standard anions with sulfur or phosphorus based anions
        if (firstCorrectAnswerPart.includes("sulfur") && firstUserAnswerPart !== "sulfur") {
            return "This anion has a root that does not follow the normal pattern. The root name of ions containing sulfide, sulfate, or sulfite is 'sulfur'.";
        }

        if (firstCorrectAnswerPart.includes("phosphor") && firstUserAnswerPart !== "phosphor") {
            return "This anion has a root that does not follow the normal pattern. The root name of ions containing phosphide, phosphate, or phosphite is 'phosphor'.";
        }

        // Check that the user has entered the correct root name for the anion
        if (correctAnionRootName !== userAnionRootName) {
            if (anionSuffix === "ide") {
                return "The root name of the anion is incorrect. If the anion ends with 'ide', the acid should follow the format 'hydro (anion root name)ic acid'.";

            } else if (anionSuffix === "ate") {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.";
            
            } else if (anionSuffix === "ite") {
                return "Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.";
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
