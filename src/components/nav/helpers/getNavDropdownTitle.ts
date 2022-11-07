import { PracticeType } from "../../common/configurations/types"

/**
 * Returns a nav dropdown title depending on practiceType
 * @param practiceType The type of practice as PracticeType
 * @returns A nav menu title as a string
 */
// Called from /nav/NavDropdownMenu.tsx
export const getNavDropdownTitle = (practiceType: PracticeType): string => {
    if (practiceType === "main") {
        return "Practice Type"

    } else if (["naming", "formulas"].includes(practiceType)) {
        return "Compound Type"

    } else {
        return ""
    }
}