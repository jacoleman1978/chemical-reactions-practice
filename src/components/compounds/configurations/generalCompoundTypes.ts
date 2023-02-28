import { Description } from "../../common/configurations/commonInterfaces";
import { compoundDescriptions } from "./compoundDescriptions";
import { compoundTitles } from "./compoundTitles";

export const generalCompoundTypes: Description[] = [
    {
        title: compoundTitles.acids,
        path: "/acids",
        description: compoundDescriptions.acids,
    },
    {
        title: compoundTitles.molecular,
        path: "/molecular",
        description: compoundDescriptions.molecular,
    },
    {
        title: compoundTitles.mixed,
        path: "/mixed",
        description: compoundDescriptions.mixed,
    },
]