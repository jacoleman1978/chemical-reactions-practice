import { getCompoundDescriptions } from "./getCompoundDescriptions";
import { compoundTitles } from "../../../configurations/compoundTitles";

export const getCompoundPracticeTitle = (type: string, practiceType: string): string => {
    let title: string = "";

    if (practiceType === "naming") {
        title += "Naming Compounds: ";
    } else if (practiceType === "formulas") {
        title += "Formulas of Compounds: ";
    }

    title += (type.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(type, compoundTitles);

    return title
}