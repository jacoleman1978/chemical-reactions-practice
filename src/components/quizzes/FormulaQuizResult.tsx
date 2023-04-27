import { QuestionResults } from "./configurations/quizInterfaces";
import DisplayCompoundFormula from "../compounds/DisplayCompoundFormula";

const FormulaQuizResult = ({result}: {result: QuestionResults}) => {
    const defaultClass: string = "flex-column full-width";
    const bubbleStyle: string = result.isCorrect ? defaultClass + " border-bubble-correct" : defaultClass + " border-bubble-incorrect";

    return (
        <div className="flex-column full-width border-bubble">
            <p className="no-bottom-margin"><strong>Compound Name: </strong>{result.question.name}</p>
            
            <div className="flex sm-gap">
                <p className="no-bottom-margin"><strong>Correct Answer: </strong></p>
                <DisplayCompoundFormula formattedFormula={result.question.formula} />
            </div>

            <div className={bubbleStyle}>
                <div className="flex sm-gap">
                    <p className="no-bottom-margin"><strong>User Answer:</strong></p>
                    <DisplayCompoundFormula formattedFormula={result.question.answer} />
                </div>

                <ul className="no-bottom-margin">
                    {result.comments.map((comment, i) => {
                        return (
                            <li key={i}><em>{comment}</em></li>
                        )})
                    }
                </ul>
            </div>
        </div>
    )
}
export default FormulaQuizResult