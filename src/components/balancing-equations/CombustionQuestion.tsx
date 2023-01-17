import { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import CoefficientInput from "./CoefficientInput";
import DisplayFormula from "../compounds/DisplayFormula";
import { CombustionReaction } from "../reaction-types/configurations/interfaces";

const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const {hydrocarbon, o2, h2o, co2} = equation;

  const balancedCoefficients = useMemo (() => {return {
    HC: (hydrocarbon.coefficient === 1 ? "" : `${hydrocarbon.coefficient}`),
    O2: (o2.coefficient === 1 ? "" : `${o2.coefficient}`),
    H2O: (h2o.coefficient === 1 ? "" : `${h2o.coefficient}`),
    CO2: (co2.coefficient === 1 ? "" : `${co2.coefficient}`),
  }}, [hydrocarbon, o2, h2o, co2])

  const [coefficientHC, setCoefficientHC] = useState<string>("");
  const [coefficientO2, setCoefficientO2] = useState<string>("");
  const [coefficientH2O, setCoefficientH2O] = useState<string>("");
  const [coefficientCO2, setCoefficientCO2] = useState<string>("");
  const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightgray"});

  useEffect(() => {
    setCoefficientHC("");
    setCoefficientO2("");
    setCoefficientH2O("");
    setCoefficientCO2("");
    setFormStyle({backgroundColor: "lightgray"});
  }, [toggleFlag])

  const handleCheckClick = (): void => {
    if (coefficientHC === balancedCoefficients.HC 
      && coefficientO2 === balancedCoefficients.O2 
      && coefficientH2O === balancedCoefficients.H2O 
      && coefficientCO2 === balancedCoefficients.CO2) {
        setFormStyle({backgroundColor: "palegreen"})
    } else {
      setFormStyle({backgroundColor: "lightpink"});
    }
  }

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput id={hydrocarbon.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientHC} userAnswer={coefficientHC} />
          <label htmlFor={hydrocarbon.compoundName}>
            <DisplayFormula formulaParts={hydrocarbon.formulaParts} coefficient={1} state={hydrocarbon.state} />
          </label>

          <div>+</div>

          <CoefficientInput id={o2.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientO2} userAnswer={coefficientO2} />
          <label htmlFor={o2.compoundName}>
            <DisplayFormula formulaParts={o2.formulaParts} coefficient={1} state={o2.state} /> 
          </label>
        </div>

        <i className="fa-solid fa-arrow-right-long"></i>

        <div className="flex-left-center sm-gap">
          <CoefficientInput id={h2o.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientH2O} userAnswer={coefficientH2O} />
          <label htmlFor={h2o.compoundName}>
            <DisplayFormula formulaParts={h2o.formulaParts} coefficient={1} state={h2o.state} />
          </label>
          
          <div>+</div>

          <CoefficientInput id={co2.compoundName} formStyle={formStyle} handleUserAnswer={setCoefficientCO2} userAnswer={coefficientCO2} />
          <label htmlFor={co2.compoundName} >
            <DisplayFormula formulaParts={co2.formulaParts} coefficient={1} state={co2.state} />
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
export default CombustionQuestion