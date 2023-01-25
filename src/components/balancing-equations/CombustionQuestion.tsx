import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useCoefficientInputs } from "../../customHooks/useCoeffcientInputs";
import CoefficientInput from "./CoefficientInput";
import { getTargetCoefficients } from "./helpers/getTargetCoefficients";
import { makeEquationParts } from "./helpers/makeEquationParts";
import { CombustionReaction } from "../reaction-types/configurations/interfaces";

const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const {hydrocarbon, o2, h2o, co2} = equation;

  const equationParts = useMemo(() => makeEquationParts(hydrocarbon, o2, h2o, co2), [hydrocarbon, o2, h2o, co2]);

  const targetCoefficients = useMemo (() => getTargetCoefficients(hydrocarbon.coefficient, o2.coefficient, h2o.coefficient, co2.coefficient), [hydrocarbon, o2, h2o, co2])

  const [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor] = useCoefficientInputs();

  useEffect(() => {
    handleCoefficientInputs("all", "");
  }, [toggleFlag, handleCoefficientInputs])

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput equationPart={equationParts.R1} formStyle={inputColor} userAnswer={coefficientInputs.R1} handleCoefficientChange={handleCoefficientInputs} />

          <div>+</div>

          <CoefficientInput equationPart={equationParts.R2} formStyle={inputColor} userAnswer={coefficientInputs.R2} handleCoefficientChange={handleCoefficientInputs} />
        </div>

        <i className="fa-solid fa-arrow-right-long"></i>

        <div className="flex-left-center sm-gap">
          <CoefficientInput equationPart={equationParts.P1} formStyle={inputColor} userAnswer={coefficientInputs.P1} handleCoefficientChange={handleCoefficientInputs} />
          
          <div>+</div>

          <CoefficientInput equationPart={equationParts.P2} formStyle={inputColor} userAnswer={coefficientInputs.P2} handleCoefficientChange={handleCoefficientInputs} />
        </div>
      </div>

      <div className="flex-left-center">
          <Button variant="success" className="flex-center-center lg-left-margin" onClick={() => handleUpdateInputColor(coefficientInputs, targetCoefficients)}>
              Check Answer
          </Button>
      </div>
    </section>
  )
}
export default CombustionQuestion