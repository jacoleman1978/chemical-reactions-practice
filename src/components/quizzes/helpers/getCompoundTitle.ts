import { PracticeType } from "../../common/configurations/commonTypes";
import { CompoundType } from "../../compounds/configurations/compoundTypes";

export const getCompoundTitle = (practiceType: PracticeType, compoundType: CompoundType) => {
    let title: string = "Quiz Results: ";

    if (practiceType === "naming") {
        title += "Naming - ";

    } else if (practiceType === "formulas") {
        title += "Formulas - ";
    }

    if (compoundType === "ionic-main") {
        title += "Ionic - Main Group, Binary";

    } else if (compoundType === "ionic-transition") {
        title += "Ionic - Transition Metals";

    } else if (compoundType === "ionic-polyatomic") {
        title += "Ionic - Polyatomic Ions";

    } else if (compoundType === "ionic-mixed") {
        title += "Ionic - Mixed";

    } else if (compoundType === "acids") {
        title += "Acids";

    } else if (compoundType === "molecular") {
        title += "Molecular";

    } else if (compoundType === "mixed") {
        title += "Mixed";
    }

    return title;
};
