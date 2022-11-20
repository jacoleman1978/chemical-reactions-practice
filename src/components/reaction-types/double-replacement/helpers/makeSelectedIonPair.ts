import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { DRReactantPair, SolubilityPairs } from "../../configurations/interfaces";

/**
 * Returns a DRReactantPair object as one of the reactants
 * @param isSuccessful boolean: If true, at least one product must be insoluble ("s"), otherwise both products must be soluble ("aq")
 * @param firstSolubilityPairs SolubilityPairs object for the first cation
 * @param secondSolubilityPairs SolubilityPairs object for the second cation
 * @returns DRReactantPair object as one of the reactants
 */
export const makeSelectedIonPair = (isSuccessful: boolean, firstSolubilityPairs: SolubilityPairs, secondSolubilityPairs: SolubilityPairs): DRReactantPair => {
    const firstInsolublePairs = firstSolubilityPairs.insolublePairs;
    const firstSolublePairs = firstSolubilityPairs.solublePairs;
    const secondInsolublePairs = secondSolubilityPairs.insolublePairs;
    const secondSolublePairs = secondSolubilityPairs.solublePairs;

    let selectedIonPair: DRReactantPair = {
        cationName: "",
        anionName: "",
    };

    if (isSuccessful) {
        let allInsolublePairs = [...firstInsolublePairs, ...secondInsolublePairs];

        selectedIonPair = getRandomListMember(allInsolublePairs);

    } else {
        let allSolublePairs = [...firstSolublePairs, ...secondSolublePairs];

        selectedIonPair = getRandomListMember(allSolublePairs);
    }

    return selectedIonPair
};
