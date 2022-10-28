import { MenuLink } from "../interfaces" 

export const practiceTypes: MenuLink[] = [
    {path: "/naming", label: "Naming Compounds"},
    {path: "/formulas", label: "Formulas of Compounds"},
    {path: "/balancing", label: "Balancing Equations"},
    {path: "/reaction-types", label: "Reaction Types"},
    {path: "/predicting-products", label: "Predicting Products"}
]

export const namingCompoundTypes: MenuLink[] = [
    {path: "/naming/ionic/main", label: "Ionic - Main Group"},
    {path: "/naming/ionic/transition", label: "Ionic - Transition Metals"},
    {path: "/naming/ionic/polyatomic", label: "Ionic - Polyatomic Ions"},
    {path: "/naming/ionic/mixed", label: "Ionic - Mixed"},
    {path: "/naming/acids", label: "Acids"},
    {path: "/naming/molecular", label: "Molecular"},
    {path: "/naming/mixed", label: "Mixed"}
]

export const formulaCompoundTypes: MenuLink[] = [
    {path: "/formulas/ionic/main", label: "Ionic - Main Group"},
    {path: "/formulas/ionic/transition", label: "Ionic - Transition Metals"},
    {path: "/formulas/ionic/polyatomic", label: "Ionic - Polyatomic Ions"},
    {path: "/formulas/ionic/mixed", label: "Ionic - Mixed"},
    {path: "/formulas/acids", label: "Acids"},
    {path: "/formulas/molecular", label: "Molecular"},
    {path: "/formulas/mixed", label: "Mixed"}
]