import { useState, useEffect, ReactElement } from "react";
import { makeEquationsList } from "./helpers/makeEquationsList";
import BalancingQuestion from "./BalancingQuestion";
import MorePracticeBtn from "../common/MorePracticeBtn";
import { useToggle } from "../../customHooks/useToggle";
import { ReactionTypeList } from "../common/configurations/types";

// Displays BalancingQuestion components and a "More Practice" button
const BalancingQuestionsGroup = () => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    // On load or click of "More Practice" button, generate a list of ReactionTypeList objects and display each of the individual BalancingQuestion objects
    useEffect(() => {
      let newQuestions: ReactElement[];
      let equationsList: ReactionTypeList[] = makeEquationsList();

      newQuestions = equationsList.map((equation, i) => {
        return <BalancingQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation} />
      })

      setQuestionsDisplay(newQuestions)

    }, [toggleFlag])

  return (
    <div className="flex-column med-gap">
        <div className="balancing-group">
          {questionsDisplay}
        </div>

        <MorePracticeBtn handleToggle={handleToggle} />
    </div>
  )
}
export default BalancingQuestionsGroup