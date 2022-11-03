import { useState, useEffect, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import CompoundFormula from "../forms/CompoundFormula";
import { Compound, FormulaParts } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";
import { convertToAcid } from "./helpers/convertToAcid";

const AcidNamingQuestion = ({morePracticeToggle}: {morePracticeToggle: boolean}) => {
    const [acidName, setAcidName] = useState<string>("");
    const [formulaParts, setFormulaParts] = useState<FormulaParts>({
        firstPart: [],
        firstSubscript: "",
        secondPart: [],
        secondSubscript: ""
    });

    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleUserAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === acidName) {
            setFormStyle({backgroundColor: "palegreen"})
        } else {
            setFormStyle({backgroundColor: "lightpink"})
        }
        setUserAnswer(event.target.value);
    }

    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    useEffect(() => {
        let compound: Compound = makeIonicCompound("acids");
        compound = convertToAcid(compound);
        setAcidName(compound.compoundName);
        setFormulaParts(compound.formulaParts);
    }, [morePracticeToggle])
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

export default AcidNamingQuestion;