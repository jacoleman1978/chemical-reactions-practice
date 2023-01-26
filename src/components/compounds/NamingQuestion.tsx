import { ChangeEvent } from "react";
import DisplayFormula from "./DisplayFormula";
import { FormulaParts } from "../common/configurations/types";

interface NamingQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    compoundName: string;
    formulaParts: FormulaParts;
    userAnswer: string;
}

// Displays the formula of the compound the user must name in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const NamingQuestion = ({formStyle, handleUserAnswer, compoundName, formulaParts, userAnswer}: NamingQuestionProps) => {
    return (
        <div className="flex-center-center med-gap border-bubble">
            <label htmlFor={compoundName} className="flex-naming-label">
                <DisplayFormula formulaParts={formulaParts} />
            </label>

            <input
                className="flex-naming-input"
                id={compoundName}
                style={formStyle}
                type="text"
                aria-describedby="compound name"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
                value={userAnswer}
            />

        </div>
    )
}

export default NamingQuestion;