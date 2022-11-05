import { useState, useEffect, ChangeEvent } from "react";
import NamingQuestion from "./NamingQuestion";
import FormulasQuestion from "./FormulasQuestion";
import { QuestionProps } from "../../interfaces";

const CompoundsQuestion = ({morePracticeToggle, compoundName, compoundFormula, formulaParts, practiceType}: QuestionProps) => {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleUserAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        if (practiceType === "naming" && event.target.value === compoundName) {
            setFormStyle({backgroundColor: "palegreen"})
        } else if (practiceType === "formulas" && event.target.value === compoundFormula) {
            setFormStyle({backgroundColor: "palegreen"})
        } else {
            setFormStyle({backgroundColor: "lightpink"})
        }
        setUserAnswer(event.target.value);
    }

    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    useEffect(() => {
        setUserAnswer("");
        setFormStyle({backgroundColor: "lightpink"})
    }, [morePracticeToggle])

    return (
        <>
            {practiceType === "naming" ? <NamingQuestion formulaParts={formulaParts} formStyle={formStyle} handleUserAnswer={handleUserAnswer} userAnswer={userAnswer} /> : <></>}

            {practiceType === "formulas" ? <FormulasQuestion compoundName={compoundName} formStyle={formStyle} handleUserAnswer={handleUserAnswer} userAnswer={userAnswer} /> : <></>}
        </>
    )
}

export default CompoundsQuestion;