import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from "../common/Title";
import PolyatomicIonTable from '../compounds/PolyatomicIonTable';
import NamingQuizQuestion from './NamingQuizQuestion';
import FormulaQuizQuestion from './FormulaQuizQuestion';
import { getCompoundPracticeTitle } from "../compounds/helpers/getCompoundInformation"
import { getCompoundQuiz } from '../compounds/helpers/getCompoundQuiz';
import { analyzeCompoundQuiz } from './helpers/analyzeCompoundQuiz';
import { CompoundType } from "../compounds/configurations/compoundTypes";
import { PracticeType } from "../common/configurations/commonTypes";
import { Compound, CompoundQuiz, CompoundQuizResults } from '../compounds/configurations/compoundInterfaces';
import { checkFormulaFormat } from './helpers/checkInputFormat';
import FormatIssues from './FormatIssues';
import { FormulaStats } from './configurations/quizInterfaces';

interface CompoundsQuizProps {
    compoundType: CompoundType,
    practiceType: PracticeType
}

const CompoundsQuiz = ({compoundType, practiceType}: CompoundsQuizProps) => {
    const navigate = useNavigate();
    const title: string = getCompoundPracticeTitle(compoundType, practiceType);

    const [compoundsList, setCompoundsList] = useState<Compound[]>([]);
    const [userQuiz, setUserQuiz] = useState<CompoundQuiz>({});
    const [formatIssues, setFormatIssues] = useState<string[]>([]);

    // Gets a list of compounds from the server and sets the compoundsList state
    useEffect(() => {
        getCompoundQuiz(compoundType).then((res) => {
            const quizQuestions: Compound[] = res.data.compoundQuiz;
            const quiz: CompoundQuiz = {};
            quizQuestions.forEach((compound) => {
                quiz[compound.name] = {...compound, answer: ""};
            });
            setUserQuiz(quiz);
            setCompoundsList(quizQuestions);
            setFormatIssues([]);
        })
    }, [compoundType]);

    const handleUserAnswer = (answer: string, compoundName: string) => {
        setUserQuiz({...userQuiz, [compoundName]: {...userQuiz[compoundName], answer: answer}});
    }

    const handleSubmitAnswers = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newIssues: string[] = [];
        for(const question in userQuiz) {
            const issues: string[] = checkFormulaFormat(userQuiz[question].answer, question);

            if (issues.length > 0) {
                newIssues.push(...issues);
            }
        }

        if (newIssues.length > 0) {
            setFormatIssues(newIssues);

        } else if (newIssues.length === 0) {
            setFormatIssues([]);
            analyzeCompoundQuiz(userQuiz, compoundType).then((res) => {
                let results: CompoundQuizResults = res.data.results;
                let stats: FormulaStats = res.data.stats;
                console.log(stats)
                const resultsUrl: string = `/quiz/results/${practiceType}/${compoundType}`;

                navigate(resultsUrl, {state: {results, compoundType, practiceType}});
            })
        }
    }
    
    return (
        <div className="flex-center-center full-width">
            <section className="flex-center-center flex-column full-width">
                <Title title={title} />
                <div className="flex-around-center med-gap">
                    <form className="compound-questions med-gap full-width" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmitAnswers(e)}>
                        {compoundsList.map((compound, i) => {
                            if (practiceType === "naming") {
                                return <NamingQuizQuestion key={compound.name} compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userQuiz[compound.name].answer} formatIssues={formatIssues} />
                            } else if (practiceType === "formulas") {
                                return <FormulaQuizQuestion key={compound.name} compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userQuiz[compound.name].answer} formatIssues={formatIssues}/>
                            }

                            return null;
                        })}

                        {formatIssues.length > 0 ? <FormatIssues issues={formatIssues} /> : null}
                        <div className="flex-center-center">
                            <button type="submit">Submit Answers</button>
                        </div>
                        
                    </form>

                    {!["ionic-main", "ionic-transition", "molecular"].includes(compoundType) ? <PolyatomicIonTable /> : null}
                </div>
            </section>
        </div>
    )
}
export default CompoundsQuiz