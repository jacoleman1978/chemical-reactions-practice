import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import DisplayFormula from "./DisplayFormula";
import { FormulaParts } from "../common/configurations/types";

interface NamingQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    formulaParts: FormulaParts;
    userAnswer: string;
}

// Displays the formula of the compound the user must name in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const NamingQuestion = ({formStyle, handleUserAnswer, formulaParts, userAnswer}: NamingQuestionProps) => {
    return (
        <div className="grid-naming med-gap">
            <DisplayFormula formulaParts={formulaParts} />
            <div>
                <Form.Control 
                    style={formStyle}
                    type="text"
                    aria-describedby="compound name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
                    value={userAnswer}
                />
            </div>
        </div>
    )
}

export default NamingQuestion;