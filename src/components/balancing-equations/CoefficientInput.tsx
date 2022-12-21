import { ChangeEvent } from "react";

interface CoefficientInputProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    userAnswer: string;
}

const CoefficientInput = ({formStyle, handleUserAnswer, userAnswer}: CoefficientInputProps) => {
  return (
    <div>
        <input 
            className="coefficient-input"
            style={formStyle}
            type="number"
            min="1"
            max="100"
            step="1"
            aria-describedby="coefficient"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
            value={userAnswer}
        />
    </div>
  )
}
export default CoefficientInput