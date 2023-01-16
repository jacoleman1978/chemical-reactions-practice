import { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import CoefficientInput from "./CoefficientInput";
import DisplayFormula from "../compounds/DisplayFormula";
import { SRReaction } from "../reaction-types/configurations/interfaces";

const SRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: SRReaction}) => {
  const {reactantCompound, reactantElement, productCompound, productElement} = equation;

  const balancedCoefficients = useMemo (() => {return {
    RC: (reactantCompound.coefficient === 1 ? "" : `${reactantCompound.coefficient}`),
    RE: (reactantElement.coefficient === 1 ? "" : `${reactantElement.coefficient}`),
    PC: (productCompound.coefficient === 1 ? "" : `${productCompound.coefficient}`),
    PE: (productElement.coefficient === 1 ? "" : `${productElement.coefficient}`),
  }}, [reactantCompound, reactantElement, productCompound, productElement])

  const [coefficientRC, setCoefficientRC] = useState<string>("");
  const [coefficientRE, setCoefficientRE] = useState<string>("");
  const [coefficientPC, setCoefficientPC] = useState<string>("");
  const [coefficientPE, setCoefficientPE] = useState<string>("");
  const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightgray"});

  useEffect(() => {
    setCoefficientRC("");
    setCoefficientRE("");
    setCoefficientPC("");
    setCoefficientPE("");
    setFormStyle({backgroundColor: "lightgray"});
  }, [toggleFlag])

  const handleCheckClick = (): void => {
    if (coefficientRC === balancedCoefficients.RC 
      && coefficientRE === balancedCoefficients.RE 
      && coefficientPC === balancedCoefficients.PC 
      && coefficientPE === balancedCoefficients.PE) {
        setFormStyle({backgroundColor: "palegreen"})
    } else {
      setFormStyle({backgroundColor: "lightpink"});
    }
  }

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientRC} userAnswer={coefficientRC} />
          <DisplayFormula formulaParts={reactantCompound.formulaParts} coefficient={1} state={reactantCompound.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientRE} userAnswer={coefficientRE} />
          <DisplayFormula formulaParts={reactantElement.formulaParts} coefficient={1} state={reactantElement.state} />      
        </div>

        <i className="fa-solid fa-arrow-right-long"></i>  

        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientPC} userAnswer={coefficientPC} />
          <DisplayFormula formulaParts={productCompound.formulaParts} coefficient={1} state={productCompound.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientPE} userAnswer={coefficientPE} />
          <DisplayFormula formulaParts={productElement.formulaParts} coefficient={1} state={productElement.state} /> 
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
export default SRQuestion