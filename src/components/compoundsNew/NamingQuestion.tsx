import { useState, useEffect, ChangeEvent } from 'react';
import { Button } from 'react-bootstrap';
import { useFlag } from '../../customHooks/useFlag';
import DisplayCompoundFormula from './DisplayCompoundFormula';
import { getNamingHints } from '../compounds/helpers/getNamingHints';
import { Compound } from "./helpers/compoundInterfaces"

const NamingQuestion = ({compound}: {compound: Compound}) => {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [displayHint, setDisplayHint] = useFlag();
    const [hints, setHints] = useState<string>("");

    useEffect(() => {
        setHints("");
        setDisplayHint(false);
        setUserAnswer("")
    }, [compound.name]);

    const handleUserAnswer = (answer: string) => {
        setUserAnswer(answer);
    }

  return (
    <section className="flex-column border-bubble med-gap">
        <div className="flex-center-center med-gap ">
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
        
            <div className="flex-left-center">
                <Button 
                    variant="secondary" 
                    className="flex-center-center check-answer-btn" 
                    onClick={() => {
                        setHints(() => getNamingHints(userAnswer, compound.name, compound.type));
                        setDisplayHint(!displayHint);
                    }}
                >
                    Hint
                </Button>
            </div>
        </div>

        <div className="hint-text">
            {displayHint
                ? <p className="no-bottom-margin">{hints}</p> 
                : null
            }
        </div>
    </section>
  )
}
export default NamingQuestion