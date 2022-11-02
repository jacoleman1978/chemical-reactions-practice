import { useState, useEffect, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { QuestionProps, Compound } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";

const FormulasQuestion = ({type, morePracticeToggle}: QuestionProps) => {
    const [compoundName, setCompoundName] = useState<string>("");
    const [compoundFormula, setCompoundFormula] = useState<string>("");
    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleUserAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === compoundFormula) {
            setFormStyle({backgroundColor: "palegreen"})
        } else {
            setFormStyle({backgroundColor: "lightpink"})
        }
        setUserAnswer(event.target.value);
    }

    useEffect(() => {
        const ionicCompound: Compound = makeIonicCompound(type);
        setCompoundFormula(ionicCompound.compoundFormula);
        setCompoundName(ionicCompound.compoundName);
        setUserAnswer("");
        setFormStyle({backgroundColor: "lightpink"})
    }, [type, morePracticeToggle])

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
        </div>
    )
}

export default FormulasQuestion;