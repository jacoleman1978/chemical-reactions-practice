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
 * Displays the question and answer input for the naming of a compound
 * @param compound A Compound object
 * @param handleUserAnswer A function that sets the userAnswer state
 * @param userAnswer A string that represents the user's answer
 * @param setDisplayHint A function that sets the displayHint state 
 * @returns ReactElement
 */
const NamingQuestion = ({compound, handleUserAnswer, userAnswer, setDisplayHint}: NamingQuestionProps) => {
  return (
    <>
        <label htmlFor={compound.name} className="flex-naming-label">
            <DisplayCompoundFormula formattedFormula={compound.formula} />
        </label>

        <input
            className="flex-naming-input"
            id={compound.name}
            type="text"
            style={{backgroundColor: compound.name === userAnswer ? "palegreen" : "lightpink"}}
            aria-describedby="compound name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUserAnswer(event.target.value);
                setDisplayHint(false);
            }}
            value={userAnswer}
        />
    </>
  )
}
export default NamingQuestion