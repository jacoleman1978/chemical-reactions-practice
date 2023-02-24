import axios from "axios";

/**
 * Generates a list of chemical equations and number of equations in the list
 * @param shouldIncludeNoReaction A boolean representing whether or not to include equations with no reaction: true = include all, false = exclude 'sr-metal-no-reaction', 'sr-nonmetal-no-reaction', dr-no-reaction'
 * @param numberInList An integer representing the number of equations to be generated
 * @returns A list of chemical equations and number of equations in the list
 */
export const getEquationsList = (shouldIncludeNoReaction: boolean, numberInList: number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:3333/equations/${shouldIncludeNoReaction}/${numberInList}`);
};
