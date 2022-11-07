import { CompoundDescription } from "../configurations/interfaces";
import { CompoundType } from "../../common/configurations/types";

/**
 * Uses the Type of practice and the CompoundDescription object to return the general description of that type of practice.
 * @param compoundType Literal type of CompoundType of practice.
 * @param compoundData CompoundDescription object with a brief description of that type of practice
 * @returns A string description for the compound type
 */

export const getCompoundDescriptions = (compoundType: CompoundType, compoundData: CompoundDescription): string => {
    if (compoundType === 'ionic-main') {
        return compoundData.ionic.main

    } else if (compoundType === 'ionic-transition') {
        return compoundData.ionic.transition

    } else if (compoundType === 'ionic-polyatomic') {
        return compoundData.ionic.polyatomic

    } else if (compoundType === 'ionic-mixed') {
        return compoundData.ionic.mixed

    } else if (compoundType === 'acids') {
        return compoundData.acids

    } else if (compoundType === 'molecular') {
        return compoundData.molecular

    } else if (compoundType === 'mixed') {
        return compoundData.mixed
    } 

    return ""
}