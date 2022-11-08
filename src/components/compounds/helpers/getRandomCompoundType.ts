import { CompoundType } from "../../common/configurations/types";

/**
 * Randomly generates a CompoundType
 * @returns a CompoundType
 */
export const getRandomCompoundType = (): CompoundType => {
    const randomValue: number = Math.random();
    let compoundType: CompoundType = "ionic-mixed";

    if (randomValue > 0.75) {
        compoundType = "molecular";
    } else if (randomValue > 0.55) {
        compoundType = "acids";
    }

    return compoundType
}