import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useCoefficientInputs } from "../../customHooks/useCoeffcientInputs";
import CoefficientInput from "./CoefficientInput";
import { getTargetCoefficients } from "./helpers/getTargetCoefficients";
import { makeEquationParts } from "./helpers/makeEquationParts";
import { DRReaction } from "../reaction-types/configurations/interfaces";

const DRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DRReaction}) => {
  const {reactantOne, reactantTwo, productOne, productTwo} = equation;

  const equationParts = useMemo(() => makeEquationParts(reactantOne, reactantTwo, productOne, productTwo), [reactantOne, reactantTwo, productOne, productTwo]);

  const targetCoefficients = useMemo (() => getTargetCoefficients(reactantOne.coefficient, reactantTwo.coefficient, productOne.coefficient, productTwo.coefficient), [reactantOne, reactantTwo, productOne, productTwo]);

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
export default DRQuestion