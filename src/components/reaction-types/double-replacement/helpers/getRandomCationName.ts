import { solubilityCationNames } from "../../configurations/solubilityTable";

/**
 * Selects a random cation name from the solubilityCationNames object
 * @returns A random "cationName" as a string
 */
export const getRandomCationName = (): string => {
    const randomIndex = ():number => Math.floor(solubilityCationNames.length * Math.random());

    const cationName: string = solubilityCationNames[randomIndex()];

    return cationName
};
