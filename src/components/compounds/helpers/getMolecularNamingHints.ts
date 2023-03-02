export const getMolecularNamingHints = (userAnswer: string, compoundName: string): string => {
    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");
    const [firstCorrectAnswerPart, secondCorrectAnswerPart] = compoundName.split(" ");

    // Ensure that the first part of the name is the name of the first element and includes Greek prefixes other than 'mono'
    if (firstUserAnswerPart !== firstCorrectAnswerPart) {
        // Ensure that "mono" prefix is not used for the first part of the name
        if (firstUserAnswerPart.slice(0, 4) === "mono") {
            return "The prefix 'mono' should not be used for the first part of the name.";
        }

        if (compoundName.slice(0, 2) === "di" && firstUserAnswerPart.slice(0, 2) !== "di") {
            console.log(compoundName)
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
    if (secondUserAnswerPart !== secondCorrectAnswerPart) {
        if (secondCorrectAnswerPart.slice(0, 4) === "mono" && secondUserAnswerPart.slice(0, 4) !== "mono") {
            return "The prefix for a subscript of 1 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 2) === "di" && secondUserAnswerPart.slice(0, 2) !== "di") {
            return "The prefix for a subscript of 2 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "tri" && secondUserAnswerPart.slice(0, 3) !== "tri") {
            return "The prefix for a subscript of 3 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 5) === "tetra" && secondUserAnswerPart.slice(0, 5) !== "tetra") {
            return "The prefix for a subscript of 4 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 5) === "penta" && secondUserAnswerPart.slice(0, 5) !== "penta") {
            return "The prefix for a subscript of 5 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "hexa" && secondUserAnswerPart.slice(0, 4) !== "hexa") {
            return "The prefix for a subscript of 6 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 5) === "hepta" && secondUserAnswerPart.slice(0, 5) !== "hepta") {
            return "The prefix for a subscript of 7 should be used for the second part of the name.";
        
        } else if (secondCorrectAnswerPart.slice(0, 4) === "octa" && secondUserAnswerPart.slice(0, 4) !== "octa") {
            return "The prefix for a subscript of 8 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "nona" && secondUserAnswerPart.slice(0, 4) !== "nona") {
            return "The prefix for a subscript of 9 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "deca" && secondUserAnswerPart.slice(0, 4) !== "deca") {
            return "The prefix for a subscript of 10 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "mono" && secondUserAnswerPart.slice(0, 5) === "monoo") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "tetr" && secondUserAnswerPart.slice(0, 5) === "tetra") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "tetr" && secondUserAnswerPart.slice(0, 4) !== "tetr") {
            return "The prefix for a subscript of 4 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "pent" && secondUserAnswerPart.slice(0, 4) === "pent") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "pent" && secondUserAnswerPart.slice(0, 4) !== "pent") {
            return "The prefix for a subscript of 5 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "hex" && secondUserAnswerPart.slice(0, 4) === "hexa") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "hex" && secondUserAnswerPart.slice(0, 3) !== "hex") {
            return "The prefix for a subscript of 6 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "hept" && secondUserAnswerPart.slice(0, 5) === "hepta") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 4) === "hept" && secondUserAnswerPart.slice(0, 4) !== "hept") {
            return "The prefix for a subscript of 7 should be used for the second part of the name.";
        
        } else if (secondCorrectAnswerPart.slice(0, 3) === "oct" && secondUserAnswerPart.slice(0, 4) === "octa") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "oct" && secondUserAnswerPart.slice(0, 3) !== "oct") {
            return "The prefix for a subscript of 8 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "non" && secondUserAnswerPart.slice(0, 4) === "nona") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "non" && secondUserAnswerPart.slice(0, 3) !== "non") {
            return "The prefix for a subscript of 9 should be used for the second part of the name.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "dec" && secondUserAnswerPart.slice(0, 4) === "deca") {
            return "When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.";

        } else if (secondCorrectAnswerPart.slice(0, 3) === "dec" && secondUserAnswerPart.slice(0, 3) !== "dec") {
            return "The prefix for a subscript of 10 should be used for the second part of the name.";
        }

        return `The anion name of the element from the periodic table is used after any Greek prefix for the second part of the name.`;
    }

    return ""
};
