import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useToggle } from "../../customHooks/useToggle";
import Arrow from "../common/Arrow";
import CoefficientInput from "./CoefficientInput";
import BalancingInventoryTable from "./BalancingInventoryTable";
import { useCoefficientInputs } from "../../customHooks/useCoeffcientInputs";
import { convertUserCoefficients } from "./helpers/convertUserCoefficients";
import { getBalancingHint } from "./helpers/getBalancingHint";
import { makeBalancingTable } from "./helpers/makeBalancingTable";
import { Equation, BalancingTable } from "./configurations/equationInterfaces";
import { UserCoefficients } from "../../customHooks/configurations/interfaces";

/**
 * 
 * @param toggleFlag boolean, indicating whether should reset all question state
 * @param equation an object with a Equation interface, containing all of the components for creating and balancing a chemical equation of a specific type
 * @returns Display of an individual balancing chemical equation question with inputs for each coefficient and a "Check Answer" button
 */
const BalancingQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: Equation}) => {
  const { reactionType, R1, R2, P1, P2 } = equation;

  // Used in the "Check Answer" button and as a flag to display hints if user answer is incorrect
  const [answerCheckFlag, setAnswerCheckFlag] = useToggle();

  // State for user-entered coefficients and the background color of the input based on correctness of answer and button state. 
  const [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor] = useCoefficientInputs();

  // Converts the CoefficientInputs string-based object into a number-based UserCoefficients object.
  const userCoefficients: UserCoefficients = useMemo(() => convertUserCoefficients(coefficientInputs), [coefficientInputs]);

  // Make Balancing Table object to display the reactants and products of the equation
  const balancingTable: BalancingTable = useMemo(() => makeBalancingTable(equation), [equation]);
  
  // Used to reset state for the question
  useEffect(() => {
    handleCoefficientInputs("all", "");
    setAnswerCheckFlag();
  }, [toggleFlag, handleCoefficientInputs])

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="balancing-section med-gap">
        <div className="flex-column">
          <div className="balancing">
            <div className="flex-left-center sm-gap reactants">
              <CoefficientInput 
                equationPart={R1} 
                formStyle={inputColor} 
                userAnswer={coefficientInputs.R1} 
                handleCoefficientChange={handleCoefficientInputs} 
              />

              {/* Since decomposition equations only have one reactant, don't display the "+" or a second reactant. */}
              {reactionType !== "decomposition" ? <div>+</div> : null}

              {reactionType !== "decomposition" ? 
                <CoefficientInput 
                  equationPart={R2} 
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
                equationPart={P1} 
                formStyle={inputColor} 
                userAnswer={coefficientInputs.P1} 
                handleCoefficientChange={handleCoefficientInputs} 
              />

              {/* Since combination equations only have one product, don't display the "+" or a second product. */}
              {reactionType !== "combination" ? <div>+</div> : null}

              {reactionType !== "combination" ? 
                <CoefficientInput 
                  equationPart={P2} 
                  formStyle={inputColor} 
                  userAnswer={coefficientInputs.P2} 
                  handleCoefficientChange={handleCoefficientInputs} 
                /> 
                : null
              }
            </div>
          </div>

          {/* Display a hint to the user if the "Check Answer" button clicked and the answer is incorrect */}
          {answerCheckFlag && inputColor.backgroundColor === "lightpink" 
            ? <p className="hint-text">{getBalancingHint(coefficientInputs, equation)}</p> 
            : null
          }
        </div>

        <div className="flex-left-center">
            <Button 
              variant="success" 
              className="flex-center-center check-answer-btn" 
              onClick={() => {handleUpdateInputColor(coefficientInputs, equation)
                              setAnswerCheckFlag()}}
            >
                Check Answer
            </Button>
        </div>
      </div>

      {inputColor.backgroundColor === "lightpink" 
        ? <BalancingInventoryTable balancingTable={balancingTable} /> 
        : null
      }
    </section>
  )
}
export default BalancingQuestion