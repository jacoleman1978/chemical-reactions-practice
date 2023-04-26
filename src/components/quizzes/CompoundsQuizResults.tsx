import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PracticeType } from "../common/configurations/commonTypes";
import { CompoundQuizResults } from "../compounds/configurations/compoundInterfaces";
import FormulaQuizResults from "./FormulaQuizResults";
import NamingQuizResults from "./NamingQuizResults";
import Title from "../common/Title";
import { getCompoundTitle } from "./helpers/getCompoundTitle";
import { CompoundType } from "../compounds/configurations/compoundTypes";

const CompoundsQuizResults = ({practiceType}: {practiceType: PracticeType}) => {
    const [uniqueComments, setUniqueComments] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");

    const { state } = useLocation();
    const results: CompoundQuizResults = state.results;
    const compoundType: CompoundType = state.compoundType;
    const stats: CompoundQuizResults = state.stats;

    useEffect(() => {
        const comments: string[] = [];
        for(const compound in results) {
            for (const comment of results[compound].comments) {
                if (!comments.includes(comment)) {
                    comments.push(comment);
                }
            }
        }
        setUniqueComments(comments);
        setTitle(getCompoundTitle(practiceType, compoundType))
    }, [results]);

    return (
        <section className="flex-center-center full-width flex-column med-gap">
            <Title title={title} />

            <div className="border-bubble full-width">
                <h2 className="subtitle">Focus Areas</h2>
                {uniqueComments.length > 0 ?
                    <ul className="no-bottom-margin">
                        {uniqueComments.map((comment: string) => {
                            return <li key={comment}>{comment}</li>
                        })}
                    </ul> :
                    <p className="no-bottom-margin">Great job! You have no areas to focus on.</p>
                }
                
            </div>

            <div className="flex-center-left med-gap flex-column compound-questions">
                {practiceType === "formulas" ? <FormulaQuizResults results={results} /> : null}
                {practiceType === "naming" ? <NamingQuizResults results={results} /> : null}
            </div>
        </section>
  )
}
export default CompoundsQuizResults