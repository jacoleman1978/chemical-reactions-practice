import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useFlag } from '../../customHooks/useFlag';
import NamingQuestion from './NamingQuestion';
import FormulaQuestion from './FormulaQuestion';
import { getNamingHints } from './helpers/getNamingHints';
import { getFormulaHints } from './helpers/getFormulaHints';
import { Compound } from "./configurations/compoundInterfaces"
import { PracticeType } from '../common/configurations/commonTypes';

interface CompoundsQuestionProps {
    compound: Compound;
    practiceType: PracticeType;
}

/**
 * Displays the question and answer input for the naming or formula depending on PracticeType type literal
 * @param compound A Compound object
 * @param practiceType A string indicating the PracticeType type literal 
 * @returns ReactElement
 */
const CompoundsQuestion = ({compound, practiceType}: CompoundsQuestionProps) => {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [displayHint, setDisplayHint] = useFlag();
    const [hints, setHints] = useState<string>("");

    // Resets the userAnswer and displayHint state when the compound changes
    useEffect(() => {
        setHints("");
        setDisplayHint(false);
        setUserAnswer("")
    }, [compound.name]);

    const handleUserAnswer = (answer: string) => {
        setUserAnswer(answer);
    }

    // Sets the hints state depending on the practiceType
    const handleHintsClick = () => {
        if (practiceType === "naming") {
            setHints(() => getNamingHints(userAnswer, compound.name, compound.type));
        } else if (practiceType === "formulas") {
            setHints(() => getFormulaHints(userAnswer, compound.formula, compound.type));
        }
        setDisplayHint(!displayHint);
    }

  return (
    <section className="flex-column border-bubble">
        <div className="flex-center-center med-gap">
            {practiceType === "naming" ? <NamingQuestion compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userAnswer} setDisplayHint={setDisplayHint} /> : null}

            {practiceType === "formulas" ? <FormulaQuestion compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userAnswer} setDisplayHint={setDisplayHint} /> : null}
        
            <div className="flex-left-center">
                <Button 
                    variant="secondary" 
                    className="flex-center-center check-answer-btn" 
                    onClick={handleHintsClick}
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
export default CompoundsQuestion