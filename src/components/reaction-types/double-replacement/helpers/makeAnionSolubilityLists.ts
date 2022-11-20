import { solubilityTable, solubilityAnionNames } from "../../configurations/solubilityTable";
import { SolubilityAnions } from "../../configurations/interfaces";

/**
 * Uses the "solubilityTable" object to generate two arrays, one for anions that form soluble compounds with the passed in "cationName", and another array for anions that form insoluble compounds with the passed in "cationName".
 * @param cationName The name of a cation from the solubilityCationNames object as a string
 * @returns An array containing "solubleAnionList" as string[] and "insolubleAnionList" as string[]
 */
export const makeAnionSolubilityLists = (cationName: string): string[][] => {
    let solubleAnionList: string[] = [];
    let insolubleAnionList: string[] = [];

    // Get all the anion data from the "solubilityTable" related to the passed in "cationName" 
    const solubilityColumn: SolubilityAnions = solubilityTable[cationName];

    for (let anion of solubilityAnionNames) {
        if (solubilityColumn[anion]) {
            solubleAnionList = [...solubleAnionList, anion]
        } else {
            insolubleAnionList = [...insolubleAnionList, anion]
        }
    }

    return [solubleAnionList, insolubleAnionList]
};
