import { CompoundSubscripts } from "../../../interfaces"

export const findCompoundSubscripts = (cationCharge: number, anionCharge: number): CompoundSubscripts => {
    // Determine the max and min magnitudes of charges of cation and anion
    let min = Math.min(cationCharge, -anionCharge);
    let max = Math.max(cationCharge, -anionCharge);

    // If the bigger charge is evenly divisible by the smaller charge, the subscripts are one, otherwise the subscripts are equal to a multiple of the smaller charge that equals the larger charge
    if (max % min === 0) {
        return {first: max / cationCharge, second: max / -anionCharge}
    } else {
        let tempMin = min;
        let minCount = 1;

        let tempMax = max;
        let maxCount = 1;

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
        return {first: tempMax / cationCharge, second: tempMax / -anionCharge}
    }
}