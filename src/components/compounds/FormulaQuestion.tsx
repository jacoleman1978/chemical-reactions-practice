import { ChangeEvent } from 'react';
import DisplayCompoundFormula from './DisplayCompoundFormula';
import { Compound } from "./configurations/compoundInterfaces"

interface NamingQuestionProps {
    compound: Compound;
    handleUserAnswer: (answer: string) => void;
    userAnswer: string;
    setDisplayHint: (flag: boolean) => void;
}

/**
 * Displays the question and answer input for writing the formula of a compound
 * @param compound A Compound object
 * @param handleUserAnswer A function that sets the userAnswer state
 * @param userAnswer A string that represents the user's answer with subscripts surrounded by '/' characters
 * @param setDisplayHint A function that sets the displayHint state 
 * @returns ReactElement
 */
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