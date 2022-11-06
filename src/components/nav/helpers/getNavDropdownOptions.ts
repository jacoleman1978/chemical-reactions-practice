import { MenuLink } from "../../../interfaces";
import { practiceTypes, namingCompoundTypes, formulaCompoundTypes } from "../configurations/navDropdowns";

// Called from /nav/NavDropdownMenu.tsx
export const getNavDropdownOptions = (practiceType: string): MenuLink[] => {
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