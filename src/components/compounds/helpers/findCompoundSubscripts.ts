import { CompoundSubscripts } from "../configurations/interfaces";
import { FirstSubscript, SecondSubscript } from "../configurations/types";
import { PossiblePositiveCharges, PossibleNegativeCharges } from "../../ions/configurations/types";

/**
 * Uses the charges of the ions involved to determine the least common multiple integers to use as subscripts for a compound made of ions with those charges.
 * @param cationCharge The charge of the cation of literal type "PossiblePositiveCharges"
 * @param anionCharge The charge of the anion of literal type "PossibleNegativeCharges"
 * @returns CompoundSubscripts object using literal types FirstSubscript and SecondSubscript
 */
 export const findCompoundSubscripts = (cationCharge: PossiblePositiveCharges, anionCharge: PossibleNegativeCharges): CompoundSubscripts => {
    // Determine the max and min magnitudes of charges of cation and anion
    let min = Math.min(cationCharge, -anionCharge);
    let max = Math.max(cationCharge, -anionCharge);

    // Determine the least common multiple (LCM) charge
    if (max % min === 0) {
        // Check for one of the subscripts to be a multiple of the other subscript, returning the LCM
        let first: FirstSubscript = max / cationCharge as FirstSubscript;
        let second: SecondSubscript = max / -anionCharge as SecondSubscript;
        return {first, second}

    } else {
        // Find LCM where subscripts are not multiples of each other
        let tempMin = min;
        let minCount = 1;

        let tempMax = max;
        let maxCount = 1;

        // Increase the multiplier for the smaller of tempMax or tempMin until tempMax === tempMin.
        while (tempMax !== tempMin) {
            if (tempMin < tempMax) {
                minCount += 1;
                tempMin = minCount * min;
            } else {
                maxCount += 1;
                tempMax = maxCount * max;
            }
        }

        // The subscripts are the tempMax (aka lowest common multiple) divided by the respective charges
        let first: FirstSubscript = tempMax / cationCharge as FirstSubscript;
        let second: SecondSubscript = tempMax / -anionCharge as SecondSubscript;
        return {first, second}
    }
}