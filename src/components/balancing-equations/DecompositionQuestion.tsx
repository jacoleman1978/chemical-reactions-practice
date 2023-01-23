import { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import CoefficientInput from "./CoefficientInput";
import DisplayFormula from "../compounds/DisplayFormula";
import { DecompositionReaction } from "../reaction-types/configurations/interfaces";

const DecompositionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {
  const {reactantOne, productOne, productTwo} = equation;

  const balancedCoefficients = useMemo (() => {return {
    R1: (reactantOne.coefficient === 1 ? "" : `${reactantOne.coefficient}`),
    P1: (productOne.coefficient === 1 ? "" : `${productOne.coefficient}`),
    P2: (productTwo.coefficient === 1 ? "" : `${productTwo.coefficient}`),
  }}, [reactantOne, productOne, productTwo])
  
  const [coefficientR1, setCoefficientR1] = useState<string>("");
  const [coefficientP1, setCoefficientP1] = useState<string>("");
  const [coefficientP2, setCoefficientP2] = useState<string>("");
  const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightgray"});

  useEffect(() => {
    setCoefficientR1("");
    setCoefficientP1("");
    setCoefficientP2("");
    setFormStyle({backgroundColor: "lightgray"});
  }, [toggleFlag])

  const handleCheckClick = (): void => {
    if (coefficientR1 === balancedCoefficients.R1 
      && coefficientP1 === balancedCoefficients.P1 
      && coefficientP2 === balancedCoefficients.P2
      ) {
        setFormStyle({backgroundColor: "palegreen"})
    } else {
      setFormStyle({backgroundColor: "lightpink"});
    }
  }

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput id={reactantOne.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientR1} userAnswer={coefficientR1} />
          <label htmlFor={reactantOne.compoundName} >
            <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={1} state={reactantOne.state} />
          </label>
        </div>

        <i className="fa-solid fa-arrow-right-long"></i>

        <div className="flex-left-center sm-gap">
          <CoefficientInput id={productOne.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientP1} userAnswer={coefficientP1} />
          <label htmlFor={productOne.compoundName} >
            <DisplayFormula formulaParts={productOne.formulaParts} coefficient={1} state={productOne.state} />
          </label>

          <div>+</div>

          <CoefficientInput id={productTwo.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientP2} userAnswer={coefficientP2} />
          <label htmlFor={productTwo.compoundName} >
            <DisplayFormula formulaParts={productTwo.formulaParts} coefficient={1} state={productTwo.state} />
          </label>
          
        </div>
      </div>

      <div className="flex-left-center">
        <Button variant="success" className="flex-center-center lg-left-margin" onClick={() => handleCheckClick()}>
            Check Answer
        </Button>
      </div>
    </section>
  )
}
export default DecompositionQuestion;