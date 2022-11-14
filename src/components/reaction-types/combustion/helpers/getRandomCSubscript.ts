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
