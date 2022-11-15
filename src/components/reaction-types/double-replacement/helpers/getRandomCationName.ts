import { solubilityCationNames } from "../../configurations/solubilityTable";

export const getRandomCationName = (): string => {
    const randomIndex = ():number => Math.floor(solubilityCationNames.length * Math.random());

    const cationName: string = solubilityCationNames[randomIndex()];

    return cationName
};
