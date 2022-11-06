import { ChangeEvent } from "react";
import { CationCharge, AnionCharge} from "../src/components/compounds/configurations/types"

export interface MenuLink {
    path: string;
    label: string;
}

export interface IonicDescription {
    main: string,
    transition: string,
    polyatomic: string,
    mixed: string,
}

export interface CompoundDescription {
    ionic: IonicDescription,
    acids: string,
    molecular: string,
    mixed: string,
}

export interface IonicInstructions {
    main: string[],
    transition: string[],
    polyatomic: string[],
    mixed: string[],
}

export interface CompoundInstructions {
    ionic: IonicInstructions,
    acids: string[],
    molecular: string[],
    mixed: string[],
}





export interface CompoundSubscripts {
    first: number,
    second: number,
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