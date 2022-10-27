import { MenuLink } from "../interfaces" 

export const practiceTypes: MenuLink[] = [
    {path: "/naming", label: "Naming Compounds"},
    {path: "/formulas", label: "Formulas of Compounds"},
    {path: "/balancing", label: "Balancing Equations"},
    {path: "/reaction-types", label: "Reaction Types"},
    {path: "/predicting-products", label: "Predicting Products"}
]

export const namingCompoundTypes: MenuLink[] = [
    {path: "/naming/ionic", label: "Ionic"},
    {path: "/naming/acids", label: "Acids"},
    {path: "/naming/molecular", label: "Molecular"},
    {path: "/naming/mixed", label: "Mixed"}
]

export const formulaCompoundTypes: MenuLink[] = [
    {path: "/formulas/ionic", label: "Ionic"},
    {path: "/formulas/acids", label: "Acids"},
    {path: "/formulas/molecular", label: "Molecular"},
    {path: "/formulas/mixed", label: "Mixed"}
]