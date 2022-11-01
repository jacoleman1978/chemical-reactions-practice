import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import CompoundLabel from "../forms/CompoundLabel";
import { Ion, NamingPracticeProps, Compound } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";

const NamingQuestion = ({type}: NamingPracticeProps) => {
    const [compound, setCompound] = useState<Compound>({
        cation: {} as Ion,
        anion: {} as Ion,
        compoundName: "",
        compoundFormula: "",
        formulaParts: {
            firstPart: [],
            firstSubscript: "",
            secondPart: [],
            secondSubscript: ""
        }
    });
    const [compoundName, setCompoundName] = useState<string>("");

    useEffect(() => {
        setCompound(makeIonicCompound(type));
    }, [type])

    return (
        <div className="flex-left-center med-gap">
            <CompoundLabel formulaParts={compound.formulaParts} />
            <Form.Control 
                required
                type="text"
                aria-describedby="compound name"
                onChange={(e) => setCompoundName(e.target.value)}
            />
        </div>
    )
}

export default NamingQuestion;