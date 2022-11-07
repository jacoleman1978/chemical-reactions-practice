import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import CompoundFormula from "./CompoundFormula";
import { NamingQuestionProps } from "./configurations/interfaces";

// Displays the formula of the compound the user must name in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const NamingQuestion = ({formStyle, handleUserAnswer, formulaParts, userAnswer}: NamingQuestionProps) => {
    return (
        <div className="grid-naming med-gap">
            <CompoundFormula formulaParts={formulaParts} />
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