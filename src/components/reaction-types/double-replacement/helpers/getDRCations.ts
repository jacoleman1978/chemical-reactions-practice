import { getRandomCationName } from "./getRandomCationName";

/**
 * Use the drCations table to generate two random, unique cationNames
 * @returns [firstCationName: string, secondCationName: string]
 */
export const getDRCations = (): [firstCationName: string, secondCationName: string] => {
    let firstCationName: string = getRandomCationName();

    let secondCationName: string = firstCationName;

    while (firstCationName === secondCationName) {
        secondCationName = getRandomCationName();
    }

    return [firstCationName, secondCationName]
};
