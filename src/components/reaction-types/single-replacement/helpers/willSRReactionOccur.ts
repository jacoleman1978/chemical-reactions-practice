/**
 * If the SR reactant "element" has a greater priority (more reactive) than the reactant "compoundElement", then the reaction will occur, otherwise no reaction
 * @param elementPriority SR element reactant ActivitySeriesElement priority attribute as a number
 * @param compoundElementPriority SR compound element reactant ActivitySeriesElement priority attribute as a number
 * @returns boolean: if true, reaction will occur, otherwise it will not
 */
export const willSRReactionOccur = (elementPriority: boolean, compoundElementPriority: boolean): boolean => {
    if (elementPriority > compoundElementPriority) {
        return true
    }

    return false
};
