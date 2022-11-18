/**
 * Uses a weighted table to return the carbon subscript in the hydrocarbon MolecularCompound used for combustion reactions
 * @returns The subscript for carbon as a number
 */
 export const getRandomCSubscript = (): number => {
    const randomNumber: number = Math.random();

    if (randomNumber < 0.05) {
        return 10
    } else if (randomNumber < 0.15) {
        return 9
    } else if (randomNumber < 0.25) {
        return 8
    } else if (randomNumber < 0.35) {
        return 7
    } else if (randomNumber < 0.55) {
        return 6
    } else if (randomNumber < 0.75) {
        return 5
    } else if (randomNumber < 0.85) {
        return 4
    } else if (randomNumber < 0.92) {
        return 3
    } else if (randomNumber < 0.98) {
        return 2
    } else {
        return 1
    }
};

/**
 * Calculates the hydrogen subscript for the passed in carbonSubscript, using a weighted degree of unsaturation based on the carbonSubscript
 * @param carbonSubscript An integer, number type
 * @returns An integer, number type, indicating the hydrogen subscript
 */
 export const calculateHSubscript = (carbonSubscript: number): number => {
    // Uses degrees of unsaturation in the hydrocarbon to calculate the needed hydrogens
    const zeroDegUnsat: number = 2 * carbonSubscript + 2;
    const oneDegUnsat: number = zeroDegUnsat - 2;
    const twoDegUnsat: number = oneDegUnsat - 2;
    const threeDegUnsat: number = twoDegUnsat - 2;
    const fourDegUnsat: number = threeDegUnsat - 2;

    const randomNumber: number = Math.random();

    if (carbonSubscript <= 3) {
        return zeroDegUnsat

    } else if (carbonSubscript === 4) {
        if (randomNumber < 0.9) {
            return zeroDegUnsat
        } else {
            return oneDegUnsat
        }
    } else if (carbonSubscript === 5) {
        if (randomNumber < 0.7) {
            return zeroDegUnsat
        } else if (randomNumber < 0.9) {
            return oneDegUnsat
        } else {
            return twoDegUnsat
        }
    } else {
        if (randomNumber < 0.5) {
            return zeroDegUnsat
        } else if (randomNumber < 0.7) {
            return oneDegUnsat
        } else if (randomNumber < 0.85) {
            return twoDegUnsat
        } else if (randomNumber < 0.95) {
            return threeDegUnsat
        } else {
            return fourDegUnsat
        }
    }
};

/**
 * Uses a weighted scale to determine the oxygen subscript of the hydrocarbon
 * @returns An integer, number type, indicating the oxygen subscript
 */
 export const getRandomOSubscript = (): number => {
    const randomNumber: number = Math.random();

    if (randomNumber < 0.03) {
        return 3
    } else if (randomNumber < 0.07) {
        return 2
    } else if (randomNumber < 0.2) {
        return 1
    }
    
    return 0
};
