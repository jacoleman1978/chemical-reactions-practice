import { ChangeEvent } from "react";
import { CationCharge, AnionCharge} from "../src/components/compounds/configurations/types"

export interface MenuLink {
    path: string;
    label: string;
}















export interface FormattedIonProps {
    formulaParts: (string | number)[];
}

export interface QuestionGroupProps {
    type: string;
}



export interface FormulasQuestionProps {
    compoundName: string;
    formStyle: {backgroundColor: string};
    handleUserAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
    userAnswer: string;
}