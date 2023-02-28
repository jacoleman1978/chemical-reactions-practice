import { useState, useEffect } from "react";
import { getEquationsList } from "./helpers/getEquationsList";
import BalancingQuestion from "./BalancingQuestion";
import ToggleButton from "../common/ToggleButton";
import { useFlag } from "../../customHooks/useFlag";
import { Equation } from "./configurations/equationInterfaces";

// Displays BalancingQuestion components and a "More Practice" button
const BalancingQuestionsGroup = () => {
    const [flag, handleSetFlag] = useFlag();
    const [equationsList, setEquationsList] = useState<Equation[]>([]);

    // Gets a list of equations from the server and sets the equationsList state
    useEffect(() => {
      getEquationsList(false, 10).then((res) => {
          setEquationsList(res.data.equationList);
      })
    }, [flag])

  return (
    <div className="flex-column med-gap">
        <div className="balancing-group">
          {equationsList.map((equation, i) => {
              return <BalancingQuestion key={`question-${i}`} toggleFlag={flag} equation={equation} />
          })}
        </div>

        <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
    </div>
  )
}
export default BalancingQuestionsGroup