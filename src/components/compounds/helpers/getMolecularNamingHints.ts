/**
 * Get the first hint for a user's molecular naming answer from a given chemical formula
 * @param userAnswer A string representing the user's answer to a molecular naming question
 * @param compoundName A string representing the correct molecular naming answer
 * @returns The first hint encountered
 */
export const getMolecularNamingHints = (userAnswer: string, compoundName: string): string => {
    // Split both the user and correct names into their words
    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");
    const [firstCorrectAnswerPart, secondCorrectAnswerPart] = compoundName.split(" ");

    // Ensure that the first part of the name is the name of the first element and includes Greek prefixes other than 'mono'
    if (firstUserAnswerPart !== firstCorrectAnswerPart) {
        // Ensure that "mono" prefix is not used for the first part of the name
        if (firstUserAnswerPart.slice(0, 4) === "mono") {
            return "The prefix 'mono' should not be used for the first part of the name.";
        }

        if (compoundName.slice(0, 2) === "di" && firstUserAnswerPart.slice(0, 2) !== "di") {
            return "The prefix for a subscript of 2 should be used for the first part of the name.";

        } else if (compoundName.slice(0, 3) === "tri" && firstUserAnswerPart.slice(0, 3) !== "tri") {
            return "The prefix for a subscript of 3 should be used for the first part of the name.";

        } else if (compoundName.slice(0, 5) === "tetra" && firstUserAnswerPart.slice(0, 5) !== "tetra") {
            return "The prefix for a subscript of 4 should be used for the first part of the name.";

        } else if (compoundName.slice(0, 5) === "penta" && firstUserAnswerPart.slice(0,5) !== "penta") {
            return "The prefix for a subscript of 5 should be used for the first part of the name.";

        } else if (compoundName.slice(0, 4) === "hexa" && firstUserAnswerPart.slice(0, 4) !== "hexa") {
            return "The prefix for a subscript of 6 should be used for the first part of the name.";
        } 

        return `The name of the element from the periodic table is used after any Greek prefix for the first part of the name.`;
    }

    // Ensure that the second part of the name is the name of the second element and includes Greek prefixes
    const twoCorrectAnswerLetters = secondCorrectAnswerPart.slice(0, 2);
    const threeCorrectAnswerLetters = secondCorrectAnswerPart.slice(0, 3);
    const fourCorrectAnswerLetters = secondCorrectAnswerPart.slice(0, 4);
    const fourUserAnswerLetters = secondUserAnswerPart.slice(0, 4);
    const fiveUserAnswerLetters = secondUserAnswerPart.slice(0, 5);

    if (fourCorrectAnswerLetters === "mono") {
        if(fiveUserAnswerLetters === "monoo") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (fourUserAnswerLetters !== "mono") {
            return "The prefix for a subscript of 1 should be used for the second part of the name.";
        }

    } else if (twoCorrectAnswerLetters === "di") {
        return "The prefix for a subscript of 2 should be used for the second part of the name.";

    } else if (threeCorrectAnswerLetters === "tri") {
        return "The prefix for a subscript of 3 should be used for the second part of the name.";

    } else if (fourCorrectAnswerLetters === "tetr") {
        if (secondCorrectAnswerPart[4] === "a" && fiveUserAnswerLetters !== "tetra") {
            return "The prefix for a subscript of 4 should be used for the second part of the name.";

        } else if (fiveUserAnswerLetters === "tetra") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 4 should be used for the second part of the name.";
        }

    } else if (fourCorrectAnswerLetters === "pent") {
        if (secondCorrectAnswerPart[4] === "a" && fiveUserAnswerLetters !== "penta") {
            return "The prefix for a subscript of 5 should be used for the second part of the name.";

        } else if (fiveUserAnswerLetters === "penta") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 5 should be used for the second part of the name.";
        }

    } else if (threeCorrectAnswerLetters === "hex") {
        if (secondCorrectAnswerPart[3] === "a" && fourUserAnswerLetters !== "hexa") {
            return "The prefix for a subscript of 6 should be used for the second part of the name.";

        } else if (fourUserAnswerLetters === "hexa") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 6 should be used for the second part of the name.";
        }

    } else if (fourCorrectAnswerLetters === "hept") {
        if (secondCorrectAnswerPart[4] === "a" && fiveUserAnswerLetters !== "hepta") {
            return "The prefix for a subscript of 7 should be used for the second part of the name.";

        } else if (fiveUserAnswerLetters === "hepta") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 7 should be used for the second part of the name.";
        }

    } else if (threeCorrectAnswerLetters === "oct") {
        if (secondCorrectAnswerPart[3] === "a" && fourUserAnswerLetters !== "octa") {
            return "The prefix for a subscript of 8 should be used for the second part of the name.";

        } else if (fourUserAnswerLetters === "octa") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 8 should be used for the second part of the name.";
        }

    } else if (threeCorrectAnswerLetters === "non") {
        if (secondCorrectAnswerPart[3] === "a" && fourUserAnswerLetters !== "nona") {
            return "The prefix for a subscript of 9 should be used for the second part of the name.";

        } else if (fourUserAnswerLetters === "nona") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 9 should be used for the second part of the name.";
        }

    } else {
        if (secondCorrectAnswerPart[3] === "a" && fourUserAnswerLetters !== "deca") {
            return "The prefix for a subscript of 10 should be used for the second part of the name.";

        } else if (fourUserAnswerLetters === "deca") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else {
            return "The prefix for a subscript of 10 should be used for the second part of the name.";
        }
    }

    return `The Greek prefix for the second part is correct, however the name of the element should be the root of the name of the element with 'ide' as the suffix.`;
};