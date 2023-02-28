import axios from "axios";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates a list of compounds of a given type and number of compounds in the list
 * @param compoundType A string representing the type of compounds to be generated as a type literal of CompoundType
 * @param numberInList An integer representing the number of compounds to be generated
 * @returns A list of compounds of a given type and number of compounds in the list
 */
export const getCompoundsList = (compoundType: CompoundType, numberInList: number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:3333/compounds/${compoundType}/${numberInList}`);
};
