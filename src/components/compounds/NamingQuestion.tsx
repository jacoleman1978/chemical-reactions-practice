import { Form } from "react-bootstrap";
import CompoundFormula from "../forms/CompoundFormula";
import { NamingQuestionProps } from "../../interfaces";

const NamingQuestion = ({formulaParts, formStyle, handleUserAnswer, userAnswer}: NamingQuestionProps) => {
    return (
        <div className="grid-naming med-gap">
            <CompoundFormula formulaParts={formulaParts} />
            <div>
                <Form.Control 
                    style={formStyle}
                    type="text"
                    aria-describedby="compound name"
                    onChange={handleUserAnswer}
                    value={userAnswer}
                />
            </div>
        </div>
    )
}

export default NamingQuestion;