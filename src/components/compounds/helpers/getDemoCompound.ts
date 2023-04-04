import axios from "axios";
import { CompoundType } from "../configurations/compoundTypes";

/**
 * Generates a compound of a given type for demo purposes
 * @param compoundType A string representing the type of compounds to be generated as a type literal of CompoundType
 * @returns A compound of literal type CompoundDemo
 */
export const getDemoCompound = (compoundType: CompoundType) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:3333/compounds/demo/${compoundType}`);
};
