import { getCompoundDescriptions } from "./getCompoundDescriptions";
import { compoundTitles } from "../configurations/compoundTitles";
import { CompoundType, PracticeType } from "../../common/configurations/types";

/**
 * Generates the compound practice title depending on the type and practiceType.
 * @param compoundType The literal type Type of compound practice
 * @param practiceType The literal type PracticeType of practice
 * @returns The compound practice title as a string
 */

export const getCompoundPracticeTitle = (compoundType: CompoundType, practiceType: PracticeType): string => {
    let title: string = "";

    // Add the beginning of the practice title depending on the practiceType
    if (practiceType === "naming") {
        title += "Naming Compounds: ";

    } else if (practiceType === "formulas") {
        title += "Formulas of Compounds: ";
    }

    // If the type is "ionic", add "Ionic - " to the title.
    // Add the rest of the title using the getCompoundDescriptions() helper function.
    title += (compoundType.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(compoundType, compoundTitles);

    return title
}