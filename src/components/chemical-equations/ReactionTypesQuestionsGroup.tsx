import { useState, useEffect } from "react";
import { useFlag } from "../../customHooks/useFlag";
import { getEquationsList } from "./helpers/getEquationsList";
import ReactionTypeQuestion from "./ReactionTypeQuestion";
import ToggleButton from "../common/ToggleButton";
import { Equation } from "./configurations/equationInterfaces";

/**
 * A container for a group of reaction type questions for a list of Equation objects
 * @returns ReactElement
 */
const ReactionTypesQuestionsGroup = () => {
    const [flag, handleSetFlag] = useFlag();
    const [equationsList, setEquationsList] = useState<Equation[]>([]);

    // Gets a list of equations from the server and sets the equationsList state
    useEffect(() => {
      getEquationsList(true, 10).then((res) => {
          setEquationsList(res.data.equationList);
      })
    }, [flag])

    return (
        <div className="flex-column med-gap">
            <div className="reaction-type-group">
                {equationsList.map((equation, i) => {
                    return <ReactionTypeQuestion key={`question-${i}`} toggleFlag={flag} equation={equation} />
                })}
            </div>
            
            <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
        </div>
    )
}
export default ReactionTypesQuestionsGroup