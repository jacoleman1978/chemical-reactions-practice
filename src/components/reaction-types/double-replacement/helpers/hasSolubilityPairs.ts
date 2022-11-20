import { SolubilityPairs } from "../../configurations/interfaces";

/**
 * Checks if there are viable SolubilityPairs for a DR reaction 
 * @param isSuccessful boolean: if true, at least one product will be insoluble ("s"), otherwise both products must be soluble ("aq")
 * @param firstSolubilityPairs A solubility pair object for the first cation
 * @param secondSolubilityPairs A solubility pair object for the second cation
 * @returns boolean, indicating whether there are viable Solubility pairs for a DR reaction based on "isSuccessful"
 */
export const hasSolubilityPairs = (isSuccessful: boolean, firstSolubilityPairs: SolubilityPairs, secondSolubilityPairs: SolubilityPairs): boolean => {
    // If the DR reaction should be successful, check if the two cations can generate at least one insoluble product ("s").
    if (isSuccessful) {
        const firstLength = firstSolubilityPairs.insolublePairs.length;
        const secondLength = secondSolubilityPairs.insolublePairs.length;

        if (firstLength === 0 && secondLength === 0) {
            return false
        } else {
            return true
        }

    // If the DR reaction should not be successful, check if the two cations can generate soluble products ("aq").
    } else {
        const firstLength = firstSolubilityPairs.solublePairs.length;
        const secondLength = secondSolubilityPairs.solublePairs.length;

        if (firstLength === 0 && secondLength === 0) {
            return false
        } else {
            return true
        }
    }
};
