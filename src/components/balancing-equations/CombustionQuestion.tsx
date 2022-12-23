import { useState, useEffect, useMemo } from "react";
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
  const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

  useEffect(() => {
    setCoefficientHC("");
    setCoefficientO2("");
    setCoefficientH2O("");
    setCoefficientCO2("");
    setFormStyle({backgroundColor: "lightpink"});
  }, [toggleFlag])

  useEffect(() => {
    if (coefficientHC === balancedCoefficients.HC 
      && coefficientO2 === balancedCoefficients.O2 
      && coefficientH2O === balancedCoefficients.H2O 
      && coefficientCO2 === balancedCoefficients.CO2) {
        setFormStyle({backgroundColor: "palegreen"})
    } else {
      setFormStyle({backgroundColor: "lightpink"});
    }
  }, [coefficientHC, coefficientO2, coefficientH2O, coefficientCO2, balancedCoefficients])

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap sm-gap">
        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientHC} userAnswer={coefficientHC} />
          <DisplayFormula formulaParts={hydrocarbon.formulaParts} coefficient={1} state={hydrocarbon.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientO2} userAnswer={coefficientO2} />
          <DisplayFormula formulaParts={o2.formulaParts} coefficient={1} state={o2.state} /> 
        </div>

        <i className="fa-solid fa-arrow-right-long"></i>

        <div className="flex-left-center sm-gap">
          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientH2O} userAnswer={coefficientH2O} />
          <DisplayFormula formulaParts={h2o.formulaParts} coefficient={1} state={h2o.state} />

          <div>+</div>

          <CoefficientInput formStyle={formStyle} handleUserAnswer={setCoefficientCO2} userAnswer={coefficientCO2} />
          <DisplayFormula formulaParts={co2.formulaParts} coefficient={1} state={co2.state} />
        </div>
      </div>
    </div>
  )
}
export default CombustionQuestion