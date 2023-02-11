import { ChangeEvent } from 'react';
import DisplayCompoundFormula from './DisplayCompoundFormula';
import { Compound } from "./configurations/compoundInterfaces"

interface NamingQuestionProps {
    compound: Compound;
    handleUserAnswer: (answer: string) => void;
    userAnswer: string;
    setDisplayHint: (flag: boolean) => void;
}

const FormulaQuestion = ({compound, handleUserAnswer, userAnswer, setDisplayHint}: NamingQuestionProps) => {
  return (
    <>
        <label htmlFor={compound.name} className="flex-formula-label">
            {compound.name}
        </label>

        <input
            className="flex-formula-input"
            id={compound.name}
            type="text"
            style={{backgroundColor: compound.formula === userAnswer ? "palegreen" : "lightpink"}}
            aria-describedby="compound formula"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUserAnswer(event.target.value);
                setDisplayHint(false);
            }}
            value={userAnswer}
        />

        <div className="width-90px">
            <DisplayCompoundFormula formattedFormula={userAnswer} />
        </div>
    </>
  )
}
export default FormulaQuestion