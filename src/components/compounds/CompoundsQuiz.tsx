import { useState, useEffect } from 'react';
import Title from "../common/Title";
import PolyatomicIonTable from './PolyatomicIonTable';
import NamingQuizQuestion from './NamingQuizQuestion';
import FormulaQuizQuestion from './FormulaQuizQuestion';
import { getCompoundPracticeTitle } from "./helpers/getCompoundInformation"
import { getCompoundQuiz } from './helpers/getCompoundQuiz';
import { analyzeCompoundQuiz } from './helpers/analyzeCompoundQuiz';
import { CompoundType } from "./configurations/compoundTypes";
import { PracticeType } from "../common/configurations/commonTypes";
import { Compound, CompoundQuizQuestion, CompoundQuiz } from './configurations/compoundInterfaces';

interface CompoundsQuizProps {
    compoundType: CompoundType,
    practiceType: PracticeType
}

const CompoundsQuiz = ({compoundType, practiceType}: CompoundsQuizProps) => {
    const title: string = getCompoundPracticeTitle(compoundType, practiceType);
    const [compoundsList, setCompoundsList] = useState<Compound[]>([]);
    const [userQuiz, setUserQuiz] = useState<CompoundQuiz>({});
    const [results, setResults] = useState<CompoundQuiz>({});

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
        })
    }, [compoundType])

    const handleUserAnswer = (answer: string, compoundName: string) => {
        setUserQuiz({...userQuiz, [compoundName]: {...userQuiz[compoundName], answer: answer}});
    }

    const handleSubmitAnswers = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        analyzeCompoundQuiz(userQuiz, compoundType).then((res) => {
            const results: CompoundQuiz = res.data;
            console.log(results)
            setResults(results);
        })
    }
    
    return (
        <div className="flex-center-center full-width">
            <section className="flex-center-center flex-column full-width">
                <Title title={title} />
                <div className="flex-around-center med-gap">
                    <form className="compound-questions med-gap full-width" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmitAnswers(e)}>
                        {compoundsList.map((compound, i) => {
                            if (practiceType === "naming") {
                                return <NamingQuizQuestion key={compound.name} compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userQuiz[compound.name].answer} />
                            } else if (practiceType === "formulas") {
                                return <FormulaQuizQuestion key={compound.name} compound={compound} handleUserAnswer={handleUserAnswer} userAnswer={userQuiz[compound.name].answer} />
                            }

                            return null;
                        })}
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