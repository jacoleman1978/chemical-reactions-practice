import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import DecompQuestion from "./decomposition/DecompQuestion";
import { makeDecompEqnList } from "./decomposition/helpers/makeDecompEqnList";
import { DecompositionReaction } from "./configurations/interfaces";
import { useToggle } from "../../customHooks/useToggle";

// Called from /reaction-types/ReactionTypesPractice.tsx
const ReactionTypesQuestionsGroup = () => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
      let newQuestions: ReactElement[];
      let equationsList: DecompositionReaction[] = makeDecompEqnList();

      newQuestions = equationsList.map((equation, i) => {
        return <DecompQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation} />
      })

      setQuestionsDisplay(newQuestions)

    }, [toggleFlag])

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
export default ReactionTypesQuestionsGroup