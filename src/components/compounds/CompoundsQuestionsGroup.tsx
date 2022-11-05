import { useEffect, useState, ReactElement } from "react";
import { Button } from "react-bootstrap";
import CompoundsQuestion from "./CompoundsQuestion";
import { CompoundsPracticeProps, Compound } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";


const CompoundsQuestionsGroup = ({type, practiceType}: CompoundsPracticeProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [morePracticeToggle, setMorePracticeToggle] = useState<boolean>(false);

    useEffect(() => {
        let newQuestions: ReactElement[] = [];

        let compoundsList: Compound[] = [];
        let formulasList: string[] = [];
        while (compoundsList.length < 10) {
            let newCompound: Compound = makeIonicCompound(type);

            if (!formulasList.includes(newCompound.compoundFormula)) {
                compoundsList = [...compoundsList, newCompound];
                formulasList = [...formulasList, newCompound.compoundFormula];
            }
        }
        
        newQuestions = compoundsList.map((compound, i) => {
            const passedInProps = {
                key:`question-${i}`, 
                morePracticeToggle, 
                compoundName:compound.compoundName, 
                compoundFormula:compound.compoundFormula, 
                formulaParts:compound.formulaParts,
                practiceType: practiceType
            }

            return <CompoundsQuestion {...passedInProps} />
        })
        
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

export default CompoundsQuestionsGroup;