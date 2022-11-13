import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import { makeEquationsList } from "./helpers/makeEquationsList";
import DecompQuestion from "./decomp-comb/DecompQuestion";
import CombQuestion from "./decomp-comb/CombQuestion";
import { useToggle } from "../../customHooks/useToggle";
import { DecompositionReaction, CombustionReaction, SRReaction, DRReaction, CombinationReaction } from "./configurations/interfaces";
import { RxnTypeList } from "../common/configurations/types";

// Called from /reaction-types/ReactionTypesPractice.tsx
const ReactionTypesQuestionsGroup = () => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
      let newQuestions: ReactElement[];
      let equationsList: RxnTypeList[] = makeEquationsList();

      newQuestions = equationsList.map((equation, i) => {
        if (equation.type === "decomposition") {
            return <DecompQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as DecompositionReaction} />
        } else if (equation.type === "combination") {
            return <CombQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as CombinationReaction} />
        } else {
            return <></>
        }
        
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