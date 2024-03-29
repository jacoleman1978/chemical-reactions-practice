/**
 * Generates a hint for the first error encountered when naming acid compounds
 * @param userAnswer A string representing the user's answer
 * @param compoundName A string representing the correct name of the compound, including case, spacing and punctuation
 * @returns A string indicating the first error encountered
 */
export const getAcidNamingHints = (userAnswer: string, compoundName: string): string  => {
    // Split the name into its words
    const [firstUserAnswerPart, secondUserAnswerPart] = userAnswer.split(" ");

    // Acids all have the same second name, 'acid', so the only difference should be in the first part of the name.
    const firstCorrectAnswerPart = compoundName.split(" ")[0];
    
    // Ensure the name ends with 'acid'
    if (secondUserAnswerPart !== "acid") {
        return "The name of the compound should end with 'acid'. Use the acid naming rules.";
    }

    let anionSuffix: string = "";

    // For acids with anions ending in 'ide'
    if (firstCorrectAnswerPart.includes("hydro") && compoundName.includes("ic acid")) {
        anionSuffix = "ide";

        // Check that the user has entered the correct suffix
        if (!userAnswer.includes("ic acid")) {
            return "Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the suffix 'ic acid'.";
        }

        // Check that the user has entered the correct prefix
        if (firstUserAnswerPart.slice(0, 5) !== "hydro") {
            return "Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the prefix 'hydro'.";
        }

    // Acids with anions that don't end in 'ide' should not have a 'hydro' prefix
    } else if (firstUserAnswerPart.includes("hydro")) {
        return "Acids are named depending on the suffix of the anion. Only acids with anions ending in 'ide' should have a 'hydro' prefix.";

    // For acids with anions ending in 'ite'
    } else if (compoundName.includes("ous acid")) {
        anionSuffix = "ite";

        // Check that the user has entered the correct suffix
        if (!userAnswer.includes("ous acid")) {
            return "Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.";
        }

    // For acids with anions ending in 'ate'
    } else {
        anionSuffix = "ate";

        // Check that the user has entered the correct suffix
        if (!userAnswer.includes("ic acid")) {
            return "Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.";
        }
    }

    // Check that the user has entered the correct root name for non-standard anions with sulfur or phosphorus based anions
    if (firstCorrectAnswerPart.includes("sulfur") && firstUserAnswerPart !== "sulfur") {
        return "This anion has a root that does not follow the normal pattern. The root name of ions containing sulfide, sulfate, or sulfite is 'sulfur'.";
    }

    if (firstCorrectAnswerPart.includes("phosphor") && firstUserAnswerPart !== "phosphor") {
        return "This anion has a root that does not follow the normal pattern. The root name of ions containing phosphide, phosphate, or phosphite is 'phosphor'.";
    }

    // Check that the user has entered the correct root name for the anion
    // Anions ending in 'ide' should follow the pattern 'hydro ________ic acid'
    if (anionSuffix === "ide") {
        return "The root name of the anion is incorrect. If the anion ends with 'ide', the acid should follow the format 'hydro (anion root name)ic acid'.";

    // Anions ending in 'ate' should follow the pattern '_______ic acid'
    } else if (anionSuffix === "ate") {
        return "Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.";
    }

    // Anions ending in 'ite' should follow the pattern '_______ous acid'
    return "Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.";
};
