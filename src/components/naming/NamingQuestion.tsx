import { useState, useEffect, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import CompoundFormula from "../forms/CompoundFormula";
import { QuestionProps, Compound, FormulaParts } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";

const NamingQuestion = ({type, morePracticeToggle}: QuestionProps) => {
    const [formulaParts, setFormulaParts] = useState<FormulaParts>({
        firstPart: [],
        firstSubscript: "",
        secondPart: [],
        secondSubscript: ""
    });
    const [compoundName, setCompoundName] = useState<string>("");

    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleUserAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === compoundName) {
            setFormStyle({backgroundColor: "palegreen"})
        } else {
            setFormStyle({backgroundColor: "lightpink"})
        }
        setUserAnswer(event.target.value);
    }

    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    useEffect(() => {
        const ionicCompound: Compound = makeIonicCompound(type);
        setFormulaParts(ionicCompound.formulaParts);
        setCompoundName(ionicCompound.compoundName);
        setUserAnswer("");
        setFormStyle({backgroundColor: "lightpink"})
    }, [type, morePracticeToggle])

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