import { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import ReactionTypesQuestion from "./ReactionTypesQuestion";
import { useToggle } from "../../customHooks/useToggle";

// Called from /reaction-types/ReactionTypesPractice.tsx
const ReactionTypesQuestionsGroup = () => {
    const [toggleFlag, handleToggle] = useToggle();

    useEffect(() => {

    }, [toggleFlag])

  return (
    <div>
        <ReactionTypesQuestion />
    </div>
  )
}
export default ReactionTypesQuestionsGroup