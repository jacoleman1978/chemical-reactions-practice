import { solubilityTable, solubilityAnionNames } from "../../configurations/solubilityTable";
import { SolubilityAnions } from "../../configurations/interfaces";

export const makeAnionSolubilityLists = (cationName: string): string[][] => {
    let solubleAnionList: string[] = [];
    let insolubleAnionList: string[] = [];

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
