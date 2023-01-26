import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import Arrow from "../common/Arrow";
import CoefficientInput from "./CoefficientInput";
import { useCoefficientInputs } from "../../customHooks/useCoeffcientInputs";
import { makeEquationParts } from "./helpers/makeEquationParts";
import { ReactionTypeList } from "../common/configurations/types";

const BalancingQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: ReactionTypeList}) => {
    const equationParts = useMemo(() => makeEquationParts(equation), [equation]);

    const [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor] = useCoefficientInputs();

    useEffect(() => {
      handleCoefficientInputs("all", "");
    }, [toggleFlag, handleCoefficientInputs])

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="balancing">
        <div className="flex-left-center sm-gap reactants">
          <CoefficientInput equationPart={equationParts.R1} formStyle={inputColor} userAnswer={coefficientInputs.R1} handleCoefficientChange={handleCoefficientInputs} />

          {equation.type !== "decomposition" ? <div>+</div> : null}

          {equation.type !== "decomposition" ? <CoefficientInput equationPart={equationParts.R2} formStyle={inputColor} userAnswer={coefficientInputs.R2} handleCoefficientChange={handleCoefficientInputs} /> : null}
        </div>

        <Arrow />

        <div className="flex-left-center sm-gap products">
          <CoefficientInput equationPart={equationParts.P1} formStyle={inputColor} userAnswer={coefficientInputs.P1} handleCoefficientChange={handleCoefficientInputs} />

          {equation.type !== "combination" ? <div>+</div> : null}

          {equation.type !== "combination" ? <CoefficientInput equationPart={equationParts.P2} formStyle={inputColor} userAnswer={coefficientInputs.P2} handleCoefficientChange={handleCoefficientInputs} /> : null}
        </div>
      </div>

      <div className="flex-left-center">
          <Button variant="success" className="flex-center-center lg-left-margin" onClick={() => handleUpdateInputColor(coefficientInputs, equationParts)}>
              Check Answer
          </Button>
      </div>
    </section>
  )
}
export default BalancingQuestion