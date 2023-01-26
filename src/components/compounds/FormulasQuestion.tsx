import { ChangeEvent } from "react";
import DisplayUsersFormula from "./DisplayUsersFormula";

interface FormulasQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    compoundName: string;
    userAnswer: string;
}

// Displays the name of the compound for which the user must write the formula in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const FormulasQuestion = ({formStyle, handleUserAnswer, compoundName, userAnswer}: FormulasQuestionProps) => {
    return (
        <div className="flex-center-center med-gap border-bubble">
            <label htmlFor={compoundName} className="flex-formula-label">
                {compoundName}
            </label>

            <input 
                className="flex-formula-input"
                id={compoundName}
                style={formStyle}
                type="text"
                aria-describedby="compound formula"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
                value={userAnswer}
            />

            <DisplayUsersFormula usersFormula={userAnswer} />
        </div>
    )
}

export default FormulasQuestion;