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
