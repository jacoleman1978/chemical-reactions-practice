// Called from /nav/NavDropdownMenu.tsx
export const getNavDropdownTitle = (practiceType: string): string => {
    if (practiceType === "main") {
        return "Practice Type"
    } else if (["naming", "formulas"].includes(practiceType)) {
        return "Compound Type"
    } else {
        return ""
    }
}