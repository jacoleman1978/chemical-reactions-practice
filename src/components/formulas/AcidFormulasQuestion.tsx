import { useState, useEffect, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import DisplayUsersFormula from "./DisplayUsersFormula";
import { Compound } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";
import { convertToAcid } from "../common/helpers/convertToAcid";

const AcidFormulasQuestion = ({morePracticeToggle}: {morePracticeToggle: boolean}) => {
    const [acidName, setAcidName] = useState<string>("");
    const [acidFormula, setAcidFormula] = useState<string>("");
    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleUserAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === acidFormula) {
            setFormStyle({backgroundColor: "palegreen"})
        } else {
            setFormStyle({backgroundColor: "lightpink"})
        }
        setUserAnswer(event.target.value);
    }

    useEffect(() => {
        let compound: Compound = makeIonicCompound("acids");
        compound = convertToAcid(compound);
        setAcidFormula(compound.compoundFormula);
        setAcidName(compound.compoundName);
        setUserAnswer("");
        setFormStyle({backgroundColor: "lightpink"})
    }, [morePracticeToggle])

    return (
        <div className="grid-formulas med-gap">
            <div className="flex-right-center">
                {acidName}
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

export default AcidFormulasQuestion;