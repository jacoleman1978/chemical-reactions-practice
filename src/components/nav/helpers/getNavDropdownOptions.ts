import { MenuLink } from "../configurations/interfaces";
import { PracticeType } from "../../common/configurations/commonTypes";
import { practiceTypes, namingCompoundTypes, formulaCompoundTypes } from "../configurations/navDropdowns";

/**
 * Generates the labels and paths for nav dropdown menues
 * @param practiceType The type of practice as PracticeType
 * @returns A list of MenuLink objects, containing paths and labels for different nav dropdown options
 */
// Called from /nav/NavDropdownMenu.tsx
export const getNavDropdownOptions = (practiceType: PracticeType): MenuLink[] => {
    if (practiceType === "main") {
        return practiceTypes

    } else if (practiceType === "naming") {
        return namingCompoundTypes

    } else if (practiceType === "formulas") {
        return formulaCompoundTypes

    } else {
        return [{path: "", label: ""}]
    }
}