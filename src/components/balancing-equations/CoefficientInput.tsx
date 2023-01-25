import { ChangeEvent } from "react";
import DisplayFormula from "../compounds/DisplayFormula";
import { EquationPart } from "./configurations/interfaces";
import { CoefficientType } from "../../customHooks/configurations/types";

interface CoefficientInputProps {
    equationPart: EquationPart,
    formStyle: {backgroundColor: string};
    userAnswer: string;
    handleCoefficientChange: (coefficientType: CoefficientType, coefficient: string) => void,
}

const CoefficientInput = ({equationPart, formStyle, userAnswer, handleCoefficientChange}: CoefficientInputProps) => {
  const {coefficientType, compoundName, formulaParts, state} = equationPart;

  return (
    <div className="flex-left-center sm-gap">
        <input 
            id={compoundName}
            className="coefficient-input"
            style={formStyle}
            type="number"
            min="1"
            max="100"
            step="1"
            aria-describedby="coefficient"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleCoefficientChange(coefficientType, event.target.value)}
            value={userAnswer}
        />
        <label htmlFor={compoundName} >
            <DisplayFormula formulaParts={formulaParts} coefficient={1} state={state} />
        </label>
    </div>
  )
}
export default CoefficientInput