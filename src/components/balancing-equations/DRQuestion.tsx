import { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import CoefficientInput from "./CoefficientInput";
import DisplayFormula from "../compounds/DisplayFormula";
import { DRReaction } from "../reaction-types/configurations/interfaces";

const DRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DRReaction}) => {
  const {reactantOne, reactantTwo, productOne, productTwo} = equation;

  const balancedCoefficients = useMemo (() => {return {
    R1: (reactantOne.coefficient === 1 ? "" : `${reactantOne.coefficient}`),
    R2: (reactantTwo.coefficient === 1 ? "" : `${reactantTwo.coefficient}`),
    P1: (productOne.coefficient === 1 ? "" : `${productOne.coefficient}`),
    P2: (productTwo.coefficient === 1 ? "" : `${productTwo.coefficient}`),
  }}, [reactantOne, reactantTwo, productOne, productTwo])

  const [coefficientR1, setCoefficientR1] = useState<string>("");
  const [coefficientR2, setCoefficientR2] = useState<string>("");
  const [coefficientP1, setCoefficientP1] = useState<string>("");
  const [coefficientP2, setCoefficientP2] = useState<string>("");
  const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

  useEffect(() => {
    setCoefficientR1("");
    setCoefficientR2("");
    setCoefficientP1("");
    setCoefficientP2("");
    setFormStyle({backgroundColor: "lightpink"});
  }, [toggleFlag])

  const handleCheckClick = (): void => {
    if (coefficientR1 === balancedCoefficients.R1 
      && coefficientR2 === balancedCoefficients.R2 
      && coefficientP1 === balancedCoefficients.P1 
      && coefficientP2 === balancedCoefficients.P2) {
        setFormStyle({backgroundColor: "palegreen"})
    } else {
      setFormStyle({backgroundColor: "lightpink"});
    }
  }

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientR1} userAnswer={coefficientR1} />
          <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={1} state={reactantOne.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientR2} userAnswer={coefficientR2} />
          <DisplayFormula formulaParts={reactantTwo.formulaParts} coefficient={1} state={reactantTwo.state} />

        </div>

        <i className="fa-solid fa-arrow-right-long"></i>

        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientP1} userAnswer={coefficientP1} />
          <DisplayFormula formulaParts={productOne.formulaParts} coefficient={1} state={productOne.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientP2} userAnswer={coefficientP2} />
          <DisplayFormula formulaParts={productTwo.formulaParts} coefficient={1} state={productTwo.state} />
        </div>
      </div>

      <div className="flex-left-center">
        <Button variant="success" className="flex-center-center lg-left-margin" onClick={() => handleCheckClick()}>
            Check Answer
        </Button>
      </div>
    </div>
  )
}
export default DRQuestion