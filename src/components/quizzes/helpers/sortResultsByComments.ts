import { CompoundQuizResults, QuestionResults } from "../configurations/quizInterfaces";

export const sortResultsByComments = (results: CompoundQuizResults): QuestionResults[] => {
    const sortedResults: QuestionResults[] = [];
    const resultsKeys: string[] = Object.keys(results);
    const sortingObject: { [key: number]: QuestionResults[]} = {};
    let maxComments: number = 0;

    resultsKeys.forEach((key: string) => {
        const questionResults: QuestionResults = results[key];
        const commentsLength: number = questionResults.comments.length;
        if (commentsLength > maxComments) maxComments = commentsLength;

        if (sortingObject[commentsLength] === undefined) {
            sortingObject[commentsLength] = [questionResults];

        } else {
            sortingObject[commentsLength].push(questionResults);
        }
    });

    for (let i = 0; i <= maxComments; i++) {
        if (sortingObject[i] !== undefined) {
            sortingObject[i].forEach((questionResults: QuestionResults) => {
                sortedResults.push(questionResults)
            });
        } 
    }

    return sortedResults;
};
