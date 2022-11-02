import { useEffect, useState, ReactElement } from "react";
import { Button } from "react-bootstrap";
import NamingQuestion from "./NamingQuestion";
import { QuestionGroupProps } from "../../interfaces";

const NamingQuestionGroup = ({type}: QuestionGroupProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [morePracticeToggle, setMorePracticeToggle] = useState<boolean>(false);

    useEffect(() => {
        let newQuestions: ReactElement[] = [];
        while (newQuestions.length < 10) {
            newQuestions = [...newQuestions, <NamingQuestion key={`question-${newQuestions.length}`} type={type} morePracticeToggle={morePracticeToggle}/>]
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

export default NamingQuestionGroup;