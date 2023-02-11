import { ChangeEvent } from 'react';
import DisplayCompoundFormula from './DisplayCompoundFormula';
import { Compound } from "./configurations/compoundInterfaces"

interface NamingQuestionProps {
    compound: Compound;
    handleUserAnswer: (answer: string) => void;
    userAnswer: string;
    setDisplayHint: (flag: boolean) => void;
}

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