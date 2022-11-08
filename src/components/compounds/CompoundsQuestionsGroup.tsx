import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import CompoundsQuestion from "./CompoundsQuestion";
import { useToggle } from "../../customHooks/useToggle";
import { CompoundsPracticeProps, Compound, MolecularCompound } from "./configurations/interfaces";
import { makeCompoundList } from "./helpers/makeCompoundList";
import { makeMolecularCompoundList } from "./helpers/makeMolecularCompoundList";
import { makeRandomCompoundList } from "./helpers/makeRandomCompoundList";

// Generates and displays a list of CompoundsQuestions display componenets of Compound objects
// Called from /compounds/CompoundsPractice.tsx
const CompoundsQuestionsGroup = ({compoundType, practiceType}: CompoundsPracticeProps) => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
        let newQuestions: ReactElement[];

        let compoundsList: (MolecularCompound | Compound)[];

        if (compoundType === "molecular") {
            compoundsList = makeMolecularCompoundList();

        } else if (compoundType === "mixed") {
            compoundsList = makeRandomCompoundList();
            
        } else {
            compoundsList = makeCompoundList(compoundType);
        }

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

export default CompoundsQuestionsGroup;