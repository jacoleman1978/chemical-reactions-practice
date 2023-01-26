import { useState, useEffect, ReactElement } from "react";
import { makeEquationsList } from "./helpers/makeEquationsList";
import ReactionTypeQuestion from "./ReactionTypeQuestion";
import MorePracticeBtn from "../common/MorePracticeBtn";
import { useToggle } from "../../customHooks/useToggle";
import { ReactionTypeList } from "../common/configurations/types";

// Called from /reaction-types/ReactionTypesPractice.tsx
const ReactionTypesQuestionsGroup = () => {
    const [questionsDisplay, setQuestionsDisplay] = useState<ReactElement[]>([]);
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {
      let newQuestions: ReactElement[];
      let equationsList: ReactionTypeList[] = makeEquationsList();

      newQuestions = equationsList.map((equation, i) => {
        return <ReactionTypeQuestion key={`equation-${i}`} toggleFlag={toggleFlag} equation={equation} />
      })

      setQuestionsDisplay(newQuestions)

    }, [toggleFlag])

  return (
    <div className="flex-column med-gap">
        <div className="reaction-type-group">
            {questionsDisplay}
        </div>
        
        <MorePracticeBtn handleToggle={handleToggle} />
    </div>
  )
}
export default ReactionTypesQuestionsGroup