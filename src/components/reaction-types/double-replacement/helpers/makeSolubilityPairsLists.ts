import { DRReactantPair, SolubilityPairs } from "../../configurations/interfaces";

/**
 * Makes a SolubilityPairs object from the cation and the appropriate solubility list of anions
 * @param cationName string
 * @param insolubleAnionList string[]: list of anions that form an insoluble ("s") compound with the passed in cation
 * @param solubleAnionList string[]: list of anions that form a soluble ("aq") compound with the passed in cation
 * @returns SolubilityPairs object for the passed in cationName
 */
export const makeSolubilityPairsLists = (cationName: string, insolubleAnionList: string[], solubleAnionList: string[]): SolubilityPairs => {
    let insolublePairs: DRReactantPair[] = [];
    let solublePairs: DRReactantPair[] = [];

    for (let anionName of solubleAnionList) {
        let reactantPair: DRReactantPair = {cationName, anionName}

        if (insolubleAnionList.includes(anionName)) {
            insolublePairs = [...insolublePairs, reactantPair];

        } else {
            solublePairs = [...solublePairs, reactantPair];
        }
    }

    return {insolublePairs, solublePairs}
};
