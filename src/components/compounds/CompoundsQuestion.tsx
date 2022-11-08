import { useState, useEffect } from "react";
import NamingQuestion from "./NamingQuestion";
import FormulasQuestion from "./FormulasQuestion";
import { updateInputBackgroundColor } from "./helpers/updateInputBackgorundColor";
import { QuestionProps } from "./configurations/interfaces";

// Displays the question based on practiceType.
// Resets the question when the toggleFlag is updated.
// The input field's background color is updated depending on the correctness of the answer.
// Called from /compounds/CompoundsQuestionsGroup.tsx
const CompoundsQuestion = ({toggleFlag, compoundName, compoundFormula, formulaParts, practiceType}: QuestionProps) => {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    useEffect(() => {
        setUserAnswer("");
        setFormStyle({backgroundColor: "lightpink"})
    }, [toggleFlag])

    const handleUserAnswer = (answer: string) => {
        setFormStyle(updateInputBackgroundColor(answer, compoundName, compoundFormula, practiceType))
        setUserAnswer(answer);
    }

    if (practiceType === "naming") {
        return <NamingQuestion formStyle={formStyle} handleUserAnswer={handleUserAnswer} formulaParts={formulaParts} userAnswer={userAnswer} />

    } else if (practiceType === "formulas") {
        return <FormulasQuestion formStyle={formStyle} handleUserAnswer={handleUserAnswer} compoundName={compoundName} userAnswer={userAnswer} />

    } else {
        return <></>
    }

}

export default CompoundsQuestion;