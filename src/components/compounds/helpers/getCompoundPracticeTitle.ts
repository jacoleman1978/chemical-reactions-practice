import { getCompoundDescriptions } from "./getCompoundDescriptions";
import { compoundTitles } from "../configurations/compoundTitles";
import { Type, PracticeType } from "../../common/configurations/types";

/**
 * Generates the compound practice title depending on the type and practiceType.
 * @param type The literal type Type of compound practice
 * @param practiceType The literal type PracticeType of practice
 * @returns The compound practice title as a string
 */

export const getCompoundPracticeTitle = (type: Type, practiceType: PracticeType): string => {
    let title: string = "";

    // Add the beginning of the practice title depending on the practiceType
    if (practiceType === "naming") {
        title += "Naming Compounds: ";

    } else if (practiceType === "formulas") {
        title += "Formulas of Compounds: ";
    }

    // If the type is "ionic", add "Ionic - " to the title.
    // Add the rest of the title using the getCompoundDescriptions() helper function.
    title += (type.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(type, compoundTitles);

    return title
}