import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import { makeEquationsList } from "./helpers/makeEquationsList";
import DecompositionQuestion from "./DecompositionQuestion";
import CombustionQuestion from "./CombustionQuestion";
import DRQuestion from "./DRQuestion";
import CombinationQuestion from "./CombinationQuestion";
import SRQuestion from "./SRQuestion";
import { useToggle } from "../../customHooks/useToggle";
import { DecompositionReaction, CombustionReaction, SRReaction, DRReaction, CombinationReaction } from "../reaction-types/configurations/interfaces";
import { ReactionTypeList } from "../common/configurations/types";

const BalancingQuestionsGroup = () => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
      let newQuestions: ReactElement[];
      let equationsList: ReactionTypeList[] = makeEquationsList();

      newQuestions = equationsList.map((equation, i) => {
        if (equation.type === "decomposition") {
            return <DecompositionQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as DecompositionReaction} />
        } else if (equation.type === "combustion") {
            return <CombustionQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as CombustionReaction} />
        } else if (equation.type === "double-replacement") {
            return <DRQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as DRReaction} />
        } else if (equation.type === "single-replacement") {
            return <SRQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as SRReaction} />
        } else if (equation.type === "combination") {
            return <CombinationQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation as CombinationReaction} />
        } else {
            return <div key={`equation-${i}`}></div>
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
export default BalancingQuestionsGroup