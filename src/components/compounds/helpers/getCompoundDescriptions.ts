import { CompoundDescription } from "../configurations/interfaces";
import { Type } from "../../common/configurations/types";

/**
 * Uses the Type of practice and the CompoundDescription object to return the general description of that type of practice.
 * @param type Literal type of Type of practice.
 * @param compoundData CompoundDescription object with a brief description of that type of practice
 * @returns A string description for the compound type
 */

export const getCompoundDescriptions = (type: Type, compoundData: CompoundDescription): string => {
    if (type === 'ionic-main') {
        return compoundData.ionic.main

    } else if (type === 'ionic-transition') {
        return compoundData.ionic.transition

    } else if (type === 'ionic-polyatomic') {
        return compoundData.ionic.polyatomic

    } else if (type === 'ionic-mixed') {
        return compoundData.ionic.mixed

    } else if (type === 'acids') {
        return compoundData.acids

    } else if (type === 'molecular') {
        return compoundData.molecular

    } else if (type === 'mixed') {
        return compoundData.mixed
    } 

    return ""
}