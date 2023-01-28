import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useToggle } from "../../customHooks/useToggle";
import Arrow from "../common/Arrow";
import CoefficientInput from "./CoefficientInput";
import { useCoefficientInputs } from "../../customHooks/useCoeffcientInputs";
import { makeEquationParts } from "../reaction-types/helpers/makeEquationParts";
import { getBalancingHint } from "./helpers/getBalancingHint";
import { ReactionTypeList } from "../common/configurations/types";

const BalancingQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: ReactionTypeList}) => {
    const equationParts = useMemo(() => makeEquationParts(equation), [equation]);

    const [answerCheckFlag, setAnswerCheckFlag] = useToggle();

    const [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor] = useCoefficientInputs();
    
    useEffect(() => {
      handleCoefficientInputs("all", "");
      setAnswerCheckFlag();
    }, [toggleFlag, handleCoefficientInputs])

  return (
    <section className="balancing-section med-gap border-bubble">
      <div className="flex-column">
        <div className="balancing">
          <div className="flex-left-center sm-gap reactants">
            <CoefficientInput 
              equationPart={equationParts.R1} 
              formStyle={inputColor} 
              userAnswer={coefficientInputs.R1} 
              handleCoefficientChange={handleCoefficientInputs} 
            />

            {equation.type !== "decomposition" ? <div>+</div> : null}

            {equation.type !== "decomposition" ? 
              <CoefficientInput 
                equationPart={equationParts.R2} 
                formStyle={inputColor} 
                userAnswer={coefficientInputs.R2} 
                handleCoefficientChange={handleCoefficientInputs} 
              /> 
              : null
            }
          </div>

          <Arrow />

          <div className="flex-left-center sm-gap products">
            <CoefficientInput 
              equationPart={equationParts.P1} 
              formStyle={inputColor} 
              userAnswer={coefficientInputs.P1} 
              handleCoefficientChange={handleCoefficientInputs} 
            />

            {equation.type !== "combination" ? <div>+</div> : null}

            {equation.type !== "combination" ? 
              <CoefficientInput 
                equationPart={equationParts.P2} 
                formStyle={inputColor} 
                userAnswer={coefficientInputs.P2} 
                handleCoefficientChange={handleCoefficientInputs} 
              /> 
              : null
            }
          </div>
        </div>

        {answerCheckFlag && inputColor.backgroundColor === "lightpink" 
          ? <p className="hint-text">{getBalancingHint(coefficientInputs, equationParts)}</p> 
          : null
        }
      </div>

      <div className="flex-left-center">
          <Button 
            variant="success" 
            className="flex-center-center check-answer-btn" 
            onClick={() => {handleUpdateInputColor(coefficientInputs, equationParts)
                            setAnswerCheckFlag()}}
          >
              Check Answer
          </Button>
      </div>
    </section>
  )
}
export default BalancingQuestion