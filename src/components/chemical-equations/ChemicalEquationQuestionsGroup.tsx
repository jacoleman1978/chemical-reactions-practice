import { useState, useEffect, useMemo } from "react";
import { useFlag } from "../../customHooks/useFlag";
import { getEquationsList } from "./helpers/getEquationsList";
import ReactionTypeQuestion from "./ReactionTypeQuestion";
import BalancingQuestion from "./BalancingQuestion";
import ToggleButton from "../common/ToggleButton";
import { Equation } from "./configurations/equationInterfaces";
import { PracticeType } from "../common/configurations/commonTypes"
import SolubilityTable from "./SolubilityTable";

const ChemicalEquationQuestionsGroup = ({practiceType}: {practiceType: PracticeType}) => {
    const [flag, handleSetFlag] = useFlag();
    const [equationsList, setEquationsList] = useState<Equation[]>([]);

    const groupStyle: string = useMemo(() => {
        if (practiceType === "balancing") {
            return "balancing-group";

        } else if (practiceType === "reaction-types") {
            return "reaction-type-group";

        } else {
            return "";
        }
    }, [practiceType])

    // Gets a list of equations from the server and sets the equationsList state
    useEffect(() => {
      getEquationsList(practiceType === "reaction-types", 10).then((res) => {
          setEquationsList(res.data.equationList);
      })
    }, [flag, practiceType])

    return (
        <div className="flex-column med-gap">
            <div className={groupStyle}>
                {equationsList.map((equation, i) => {
                    if (practiceType === "balancing") {
                        return <BalancingQuestion key={`question-${i}`} toggleFlag={flag} equation={equation} />

                    } else if (practiceType === "reaction-types") {
                        return <ReactionTypeQuestion key={`question-${i}`} toggleFlag={flag} equation={equation} />

                    } else {
                        return null;
                    }
                })}
            </div>

            <SolubilityTable />
            
            <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
        </div>
    )
}
export default ChemicalEquationQuestionsGroup