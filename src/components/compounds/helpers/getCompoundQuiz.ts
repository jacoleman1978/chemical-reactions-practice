import axios from "axios";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates a list of compounds of a given type
 * @param compoundType A string representing the type of compounds to be generated as a type literal of CompoundType
 * @returns A list of Compound objects
 */
export const getCompoundQuiz = (compoundType: CompoundType) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:3333/compounds/quiz/${compoundType}`);
};
