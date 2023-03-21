interface DecomposedTMName {
    romanNum: string;
    cationNameWithoutRomanNum: string;
    anionName: string;
}

/**
 * Generates a hint for the first error encountered when naming transition metal compounds
 * @param userAnswer A string representing the user's answer
 * @param compoundName A string representing the correct name of the compound, including case, spacing and punctuation
 * @returns A string indicating the first error encountered
 */
export const getTMNamingHints = (userAnswer: string, compoundName: string): string => {
    // Decompose the correct name into its parts, Roman numeral, cation name without Roman numeral, and anion name
    const firstParenthesisIndexCorrect = compoundName.indexOf("(");
    const lastParenthesisIndexCorrect = compoundName.indexOf(")");

    const decomposedCorrectAnswer: DecomposedTMName = {
        romanNum: compoundName.slice(firstParenthesisIndexCorrect + 1, lastParenthesisIndexCorrect),
        cationNameWithoutRomanNum: compoundName.slice(0, firstParenthesisIndexCorrect),
        anionName: compoundName.slice(lastParenthesisIndexCorrect + 1).trim(),
    }

    // Decompose the user's answer into its parts
    const decomposedUserAnswer: DecomposedTMName = {
        romanNum: "",
        cationNameWithoutRomanNum: "",
        anionName: "",
    }

    // Transition metals are the only compounds that can have a Roman numeral in their name. Check for the first parenthesis.
    const firstParenthesisIndex = userAnswer.indexOf("(");
    const lastParenthesisIndex = userAnswer.indexOf(")");

    // Error for missing parentheses
    if (firstParenthesisIndex === -1 || lastParenthesisIndex === -1) {
        return "The name of the transition metal should contain a Roman numeral in parentheses after the cation without a space, followed by a space before the anion.";
    }

    decomposedUserAnswer.cationNameWithoutRomanNum = userAnswer.slice(0, firstParenthesisIndex);

    // Parentheses present, but cation name is missing
    if (decomposedUserAnswer.cationNameWithoutRomanNum === "") {
        return "The name of the cation should be written first.";
    }

    // Check for presence of anion name
    if (lastParenthesisIndex === userAnswer.length - 1) {
        return "The name of the anion is missing.";
    }

    decomposedUserAnswer.romanNum = userAnswer.slice(firstParenthesisIndex + 1, lastParenthesisIndex);

    // Check that there are no spaces in the cation name or Roman numeral
    const userAnswerSplitBySpaces = userAnswer.split(" ");
    if (userAnswer.slice(firstParenthesisIndex -1, firstParenthesisIndex) === " ") {
        return "There should not be a space between the cation name and the Roman numeral in parentheses.";
    }

    // Ensure that there is one and only one space between the Roman numeral and the anion
    if (userAnswerSplitBySpaces.length > 2) {
        return "There can only be one space between the two parts of the name located between the Roman numerals in parentheses and the name of the anion.";
    }

    // Ensure that there is a space between the Roman numeral and the anion
    if (userAnswer.slice(lastParenthesisIndex + 1, lastParenthesisIndex + 2) !== " ") {
        return "There must be one space between the two parts of the name located between the Roman numerals in parentheses and the name of the anion.";
    }
    
    // Check the Roman numeral for correctness
    if (decomposedUserAnswer.romanNum !== decomposedCorrectAnswer.romanNum) {
        // Check for missing Roman numerals in the parentheses
        if (decomposedUserAnswer.romanNum === "") {
            return "The Roman numeral indicating the cation's charge is missing.";
        }
    
        // Ensure that the Roman numeral is written in upper case
        if (decomposedUserAnswer.romanNum.toUpperCase() !== decomposedUserAnswer.romanNum) {
            return "The Roman numeral indicating the cation's charge should be written in upper case.";
        }

        return "The Roman numeral indicating the cation's charge is incorrect.";
    }

    // Check the cation name for correctness
    if (decomposedUserAnswer.cationNameWithoutRomanNum !== decomposedCorrectAnswer.cationNameWithoutRomanNum) {
        // Ensure that the cation name is written in lower case
        if (decomposedUserAnswer.cationNameWithoutRomanNum.toLowerCase() !== decomposedUserAnswer.cationNameWithoutRomanNum) {
            return "The name of the transition metal should be written in lower case. Capital letters should only be used for roman numerals.";
        }

        return "The name of the transition metal is incorrect. The cation is name of the element on the periodic table followed by the Roman numeral indicating the cation's charge.";
    }

    decomposedUserAnswer.anionName = userAnswer.slice(lastParenthesisIndex + 1);

    // Ensure that the anion name is written in lower case
    if (decomposedUserAnswer.anionName.toLowerCase() !== decomposedUserAnswer.anionName) {
        return "The name of the anion should be written in lower case. Capital letters should only be used for roman numerals.";
    }

    return "";
};
