import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import CompoundsQuestion from "./CompoundsQuestion";
import { makeCompoundList } from "./helpers/makeCompoundList";
import { useToggle } from "../../customHooks/useToggle";
import { IonicCompound, MolecularCompound } from "./configurations/interfaces";
import { CompoundType, PracticeType, GenerateQuantity } from "../common/configurations/types";

interface CompoundsPracticeProps {
    compoundType: CompoundType;
    practiceType: PracticeType;
}

// Generates and displays a list of CompoundsQuestions display componenets of Compound objects
// Called from /compounds/CompoundsPractice.tsx
const CompoundsQuestionGroup = ({compoundType, practiceType}: CompoundsPracticeProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
        let numberOfQuestions: GenerateQuantity = 10;

        if (compoundType === "ionic-mixed") {
            numberOfQuestions = 15;

        } else if (compoundType === "mixed") {
            numberOfQuestions = 15;
        }

        let newQuestions: ReactElement[];

        let compoundsList: (IonicCompound | MolecularCompound)[] = makeCompoundList(compoundType, numberOfQuestions)

        newQuestions = compoundsList.map((compound, i) => {
            const passedInProps = {
                key:`question-${i}`, 
                toggleFlag, 
                compoundName: compound.compoundName,
                compoundFormula: compound.compoundFormula,
                formulaParts: compound.formulaParts,
                practiceType
            }

            return <CompoundsQuestion {...passedInProps} />
        })

        setQuestionsDisplay(newQuestions);

    }, [toggleFlag, compoundType, practiceType])

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

export default CompoundsQuestionGroup;