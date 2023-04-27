import { useMemo } from "react";
import FormulaQuizResult from "./FormulaQuizResult";
import { sortResultsByComments } from "./helpers/sortResultsByComments";
import { CompoundQuizResults, QuestionResults } from "./configurations/quizInterfaces";

const FormulaQuizResults = ({results}: {results: CompoundQuizResults}) => {
    const sortedResults = useMemo(() => sortResultsByComments(results), [results]);

    return (
        <>
            {sortedResults.map((compound: QuestionResults) => {
                return (
                    <FormulaQuizResult key={compound.question.formula} result={results[compound.question.formula]} />)
            })}
        </>
  )
}
export default FormulaQuizResults