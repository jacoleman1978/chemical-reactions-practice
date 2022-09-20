import { MenuLink } from "../interfaces" 

export const practiceTypes: MenuLink[] = [
    {path: "/compounds/naming/ionic", label: "Naming Compounds"},
    {path: "/compounds/formulas/ionic", label: "Formulas of Compounds"},
    {path: "/balancing", label: "Balancing Equations"},
    {path: "/reactiontypes", label: "Reaction Types"},
    {path: "/predictingproducts", label: "Predicting Products"}
]

export const namingCompoundTypes: MenuLink[] = [
    {path: "/compounds/naming/ionic", label: "Ionic"},
    {path: "/compounds/naming/acids", label: "Acids"},
    {path: "/compounds/naming/molecular", label: "Molecular"},
    {path: "/compounds/naming/mixed", label: "Mixed"}
]

export const formulaCompoundTypes: MenuLink[] = [
    {path: "/compounds/formulas/ionic", label: "Ionic"},
    {path: "/compounds/formulas/acids", label: "Acids"},
    {path: "/compounds/formulas/molecular", label: "Molecular"},
    {path: "/compounds/formulas/mixed", label: "Mixed"}
]