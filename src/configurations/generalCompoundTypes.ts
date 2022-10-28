import { Description } from "../interfaces";
import { compoundDescriptions } from "./compoundDescriptions";

export const generalCompoundTypes: Description[] = [
    {
        title: "Acids",
        path: "/acids",
        description: compoundDescriptions.acids,
    },
    {
        title: "Molecular",
        path: "/molecular",
        description: compoundDescriptions.molecular,
    },
    {
        title: "Mixed",
        path: "/mixed",
        description: compoundDescriptions.mixed,
    },
]