import { useState, useEffect, ChangeEvent } from 'react';
import { Button } from 'react-bootstrap';
import { useFlag } from '../../customHooks/useFlag';
import DisplayCompoundFormula from './DisplayCompoundFormula';
import { getFormulaHints } from '../compounds/helpers/getFormulaHints';
import { Compound } from "./helpers/compoundInterfaces"

const FormulaQuestion = ({compound}: {compound: Compound}) => {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [displayHint, setDisplayHint] = useFlag();
    const [hints, setHints] = useState<string>("");

    useEffect(() => {
        setHints("");
        setDisplayHint(false);
        setUserAnswer("")
    }, [compound.formula]);

    const handleUserAnswer = (answer: string) => {
        setUserAnswer(answer);
    }

  return (
    <section className="flex-column border-bubble med-gap">
        <div className="flex-center-center med-gap ">
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

            <div className="width=90px">
                <DisplayCompoundFormula formattedFormula={userAnswer} />
            </div>
        
            {/* <div className="flex-left-center">
                <Button 
                    variant="secondary" 
                    className="flex-center-center check-answer-btn" 
                    onClick={() => {
                        setHints(() => getFormulaHints(userAnswer, compound.formula));
                        setDisplayHint(!displayHint);
                    }}
                >
                    Hint
                </Button>
            </div> */}
        </div>

        {/* <div className="hint-text">
            {displayHint
                ? <p className="no-bottom-margin">{hints}</p> 
                : null
            }
        </div> */}
    </section>
  )
}
export default FormulaQuestion