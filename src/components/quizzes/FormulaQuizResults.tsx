import FormulaQuizResult from "./FormulaQuizResult";
import { CompoundQuizResults } from "../compounds/configurations/compoundInterfaces";
import { FormulaStats } from "./configurations/quizInterfaces";

// interface FormulaQuizResultsProps {
//     results: CompoundQuizResults;
//     stats: FormulaStats;
// }


const FormulaQuizResults = ({results}: {results: CompoundQuizResults}) => {
    return (
        <>
            {Object.keys(results).map((compound: string) => {
                return (
                    <FormulaQuizResult key={compound} result={results[compound]} />)
            })}
        </>
  )
}
export default FormulaQuizResults