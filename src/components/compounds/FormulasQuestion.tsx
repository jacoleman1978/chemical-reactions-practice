import { Form } from "react-bootstrap";
import DisplayUsersFormula from "./DisplayUsersFormula";
import { FormulasQuestionProps } from "../../interfaces";

const FormulasQuestion = ({compoundName, formStyle, handleUserAnswer, userAnswer}: FormulasQuestionProps) => {
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
                    onChange={handleUserAnswer}
                    value={userAnswer}
                />
            </div>
            <DisplayUsersFormula usersFormula={userAnswer} />
        </div>
    )
}

export default FormulasQuestion;