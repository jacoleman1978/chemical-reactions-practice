import { useLocation } from "react-router-dom";
import { PracticeType } from "../common/configurations/commonTypes";
import { CompoundQuizResults } from "./configurations/quizInterfaces";
import FormulaQuizResults from "./FormulaQuizResults";
import NamingQuizResults from "./NamingQuizResults";
import Title from "../common/Title";
import { getCompoundTitle } from "./helpers/getCompoundTitle";
import { CompoundType } from "../compounds/configurations/compoundTypes";
import FormulasFocusAreas from "./FormulasFocusAreas";
import { CompoundStats } from "./configurations/quizInterfaces";

const CompoundsQuizResults = ({practiceType}: {practiceType: PracticeType}) => {
    const { state } = useLocation();
    const results: CompoundQuizResults = state.results;
    const compoundType: CompoundType = state.compoundType;
    const stats: CompoundStats = state.stats;

    return (
        <section className="flex-center-center full-width flex-column med-gap">
            <Title title={getCompoundTitle(practiceType, compoundType)} />
                
            {practiceType === "formulas" ? <FormulasFocusAreas stats={stats.formulas} /> : null}

            <div className="flex-center-left med-gap flex-column compound-questions">
                {practiceType === "formulas" ? <FormulaQuizResults results={results} /> : null}
                {practiceType === "naming" ? <NamingQuizResults results={results} /> : null}
            </div>
        </section>
  )
}
export default CompoundsQuizResults