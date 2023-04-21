import axios from "axios";
import { CompoundType } from "../configurations/compoundTypes";
import { CompoundQuiz } from "../configurations/compoundInterfaces";

/**
 * Generates a list of compounds of a given type
 * @param compoundQuiz A CompoundQuiz object
 * @param compoundType A string representing the type of compounds to be generated as a type literal of CompoundType
 * @returns A list of Compound objects
 */
export const analyzeCompoundQuiz = (compoundQuiz: CompoundQuiz, compoundType: CompoundType) => {
    axios.defaults.withCredentials = true;
    return axios.post(`http://localhost:3333/compounds/quiz/analyze/formulas/${compoundType}`, compoundQuiz);
};
