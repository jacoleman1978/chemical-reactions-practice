import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import CompoundsQuestion from "./CompoundsQuestion";
import { useToggle } from "../../customHooks/useToggle";
import { CompoundsPracticeProps, Compound } from "./configurations/interfaces";
import { makeCompoundList } from "./helpers/makeCompoundList";

// Generates and displays a list of CompoundsQuestions display componenets of Compound objects
// Called from /compounds/CompoundsPractice.tsx
const CompoundsQuestionsGroup = ({type, practiceType}: CompoundsPracticeProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
        let compoundsList: Compound[] = makeCompoundList(type);
        let newQuestions: ReactElement[];

        newQuestions = compoundsList.map((compound, i) => {
            const passedInProps = {
                key:`question-${i}`, 
                toggleFlag, 
                compound,
                practiceType
            }

            return <CompoundsQuestion {...passedInProps} />
        })

        setQuestionsDisplay(newQuestions);

    }, [toggleFlag, type, practiceType])

    return (
        <div className="flex-column med-gap">
            {questionsDisplay}
            <div className="flex-center-center">
                <Button variant="primary" className="flex-center-center" onClick={handleToggle}>
                    More Practice
                </Button>
            </div>
        </div>
    )
}

export default CompoundsQuestionsGroup;