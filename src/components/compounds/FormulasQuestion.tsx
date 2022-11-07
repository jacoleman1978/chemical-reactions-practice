import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import DisplayUsersFormula from "./DisplayUsersFormula";
import { FormulasQuestionProps } from "./configurations/interfaces";

// Displays the name of the compound for which the user must write the formula in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const FormulasQuestion = ({formStyle, handleUserAnswer, compoundName, userAnswer}: FormulasQuestionProps) => {
    return (
        <div className="grid-formulas med-gap">
            <div className="flex-right-center">
                {compoundName}
            </div>
            <div>
                <Form.Control 
                    style={formStyle}
                    type="text"
                    aria-describedby="compound name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
                    value={userAnswer}
                />
            </div>
            <DisplayUsersFormula usersFormula={userAnswer} />
        </div>
    )
}

export default FormulasQuestion;