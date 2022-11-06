import { Ion } from "../configurations/interfaces";

/**
 * Returns a random Ion object from the passed in ionList.
 * @param ionList An array list of ions of literal type Ion
 * @returns A random ion of type Ion from the ionList
 */

export const getRandomIon = (ionList: Ion[]): Ion => {
    const length = ionList.length;
    const randomIndex = Math.floor(length * Math.random());

    return ionList[randomIndex]
}