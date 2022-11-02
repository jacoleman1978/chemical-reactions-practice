import { useEffect, useState, ReactElement } from "react";
import { Button } from "react-bootstrap";
import FormulasQuestion from "./FormulasQuestion";
import { QuestionGroupProps } from "../../interfaces";

const FormulasQuestionGroup = ({type}: QuestionGroupProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [morePracticeToggle, setMorePracticeToggle] = useState<boolean>(false);

    useEffect(() => {
        let newQuestions: ReactElement[] = [];
        while (newQuestions.length < 10) {
            newQuestions = [...newQuestions, <FormulasQuestion key={`question-${newQuestions.length}`} type={type} morePracticeToggle={morePracticeToggle}/>]
        }
        setQuestionsDisplay(newQuestions);

    }, [morePracticeToggle, type])
    return (
        <div className="flex-column med-gap">
            {questionsDisplay}
            <div className="flex-center-center">
                <Button variant="primary" className="flex-center-center" onClick={() => setMorePracticeToggle(!morePracticeToggle)}>
                    More Practice
                </Button>
            </div>
        </div>
    )
}

export default FormulasQuestionGroup;