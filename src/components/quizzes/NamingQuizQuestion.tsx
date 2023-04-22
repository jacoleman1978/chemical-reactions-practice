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
 * Displays the question and answer input for the naming of a compound
 * @param compound A Compound object
 * @param handleUserAnswer A function that sets the userAnswer state
 * @param userAnswer A string that represents the user's answer
 * @returns ReactElement
 */
const NamingQuizQuestion = ({compound, handleUserAnswer, userAnswer, formatIssues}: NamingQuizQuestionProps) => {
  return (
    <div className="flex-center-center border-bubble">
        <label htmlFor={compound.name} className="flex-naming-label">
            <DisplayCompoundFormula formattedFormula={compound.formula} />
        </label>

        <input
            className="flex-naming-input"
            id={compound.name}
            name={compound.name}
            type="text"
            aria-describedby="compound name"
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUserAnswer(event.target.value, event.target.name);
            }}
            value={userAnswer}
        />
    </div>
  )
}
export default NamingQuizQuestion