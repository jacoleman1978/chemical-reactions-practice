import { Description } from "../interfaces";
import { compoundDescriptions } from "./compoundDescriptions";

export const generalIonicTypes: Description[] = [
    {
        title: "Main Group, Binary",
        path: "/ionic/main",
        description: compoundDescriptions.ionic.main,
    },
    {
        title: "Transition Metals",
        path: "/ionic/transition",
        description: compoundDescriptions.ionic.transition,
    },
    {
        title: "Polyatomic Ions",
        path: "/ionic/polyatomic",
        description: compoundDescriptions.ionic.polyatomic,
    },
    {
        title: "Mixed",
        path: "/ionic/mixed",
        description: compoundDescriptions.ionic.mixed,
    },
]