import { ChangeEvent } from 'react';
import DisplayCompoundFormula from '../compounds/DisplayCompoundFormula';
import { Compound } from "../compounds/configurations/compoundInterfaces"

interface NamingQuizQuestionProps {
    compound: Compound;
    handleUserAnswer: (answer: string, compoundName: string) => void;
    userAnswer: string;
    formatIssues: string[];
}

/**
 * Displays the question and answer input for writing the formula of a compound
 * @param compound A Compound object
 * @param handleUserAnswer A function that sets the userAnswer state
 * @param userAnswer A string that represents the user's answer with subscripts surrounded by '/' characters
 * @returns ReactElement
 */
const FormulaQuizQuestion = ({compound, handleUserAnswer, userAnswer, formatIssues}: NamingQuizQuestionProps) => {
  return (
    <div className="flex-center-center border-bubble">
        <label htmlFor={compound.name} className="flex-formula-label">
            {compound.name}
        </label>

        <input
            className="flex-formula-input"
            id={compound.name}
            name={compound.name}
            type="text"
            aria-describedby="compound formula"
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUserAnswer(event.target.value, event.target.name);
            }}
            value={userAnswer}
        />

        <div className="width-90px">
            <DisplayCompoundFormula formattedFormula={userAnswer} />
        </div>
    </div>
  )
}
export default FormulaQuizQuestion