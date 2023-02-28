import { Description } from "../../common/configurations/commonInterfaces";
import { compoundDescriptions } from "./compoundDescriptions";
import { compoundTitles } from "./compoundTitles";

export const generalIonicTypes: Description[] = [
    {
        title: compoundTitles.ionic.main,
        path: "/ionic/main",
        description: compoundDescriptions.ionic.main,
    },
    {
        title: compoundTitles.ionic.transition,
        path: "/ionic/transition",
        description: compoundDescriptions.ionic.transition,
    },
    {
        title: compoundTitles.ionic.polyatomic,
        path: "/ionic/polyatomic",
        description: compoundDescriptions.ionic.polyatomic,
    },
    {
        title: compoundTitles.ionic.mixed,
        path: "/ionic/mixed",
        description: compoundDescriptions.ionic.mixed,
    },
]