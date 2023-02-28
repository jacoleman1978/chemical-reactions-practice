import { Description } from "./commonInterfaces"

// Briefly describes each of the type of practice available, giving both the title and base url path for each of the types
// Called by /common/TypesContainer.tsx
export const generalPracticeTypes: Description[] = [
    {
        title: "Naming Compounds",
        path: "/naming",
        description: "Write the name of the compound, when given the formula",
    },
    {
        title: "Writing Formulas of Compounds",
        path: "/formulas",
        description: "Write the formula of the compound, when given the name",
    },
    {
        title: "Balancing Equations",
        path: "/balancing",
        description: "Balance the given chemical equation",
    },
    {
        title: "Identifying Reaction Types",
        path: "/reaction-types",
        description: "Identify the reaction type from a set of reactants, set of products or a chemical equation",
    },
    {
        title: "Predicting Products",
        path: "/predicting-products",
        description: "Write the correct formulas of the products of a chemical reaction, when the reactants are given",
    },
]