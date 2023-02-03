import { useState, ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import { useToggle } from "../../customHooks/useToggle";
import DisplayFormula from "./DisplayFormula";
import { getNamingHints } from "./helpers/getNamingHints";
import { CompoundType, FormulaParts } from "../common/configurations/types";

interface NamingQuestionProps {
    formStyle: {backgroundColor: string};
    handleUserAnswer: (arg0: string) => void;
    compoundName: string;
    formulaParts: FormulaParts;
    userAnswer: string;
    compoundType: CompoundType;
}

// Displays the formula of the compound the user must name in the input field
// The input field's background color will change to a light green when the answer is correct.
// Called from /compound/CompoundsQuestion.tsx
const NamingQuestion = ({formStyle, handleUserAnswer, compoundName, formulaParts, userAnswer, compoundType}: NamingQuestionProps) => {
    const [toggleHint, setToggleHint] = useToggle();
    const [hints, setHints] = useState<string>("");
    
    return (
        <section className="flex-column border-bubble med-gap">
            <div className="flex-center-center med-gap ">
                <label htmlFor={compoundName} className="flex-naming-label">
                    <DisplayFormula formulaParts={formulaParts} />
                </label>

                <input
                    className="flex-naming-input"
                    id={compoundName}
                    style={formStyle}
                    type="text"
                    aria-describedby="compound name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleUserAnswer(event.target.value)}
                    value={userAnswer}
                />
                <div className="flex-left-center">
                    <Button 
                        variant="secondary" 
                        className="flex-center-center check-answer-btn" 
                        onClick={() => {
                            setHints(() => getNamingHints(userAnswer, compoundName, compoundType));
                            setToggleHint();
                        }}
                    >
                        Hint
                    </Button>
                </div>
            </div>

            <div className="hint-text">
                {toggleHint
                    ? <p className="no-bottom-margin">{hints}</p> 
                    : null
                }
            </div>
        </section>
    )
}

export default NamingQuestion;