import { Form } from "react-bootstrap";
import CompoundFormula from "./CompoundFormula";
import { NamingQuestionProps } from "./configurations/interfaces";

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