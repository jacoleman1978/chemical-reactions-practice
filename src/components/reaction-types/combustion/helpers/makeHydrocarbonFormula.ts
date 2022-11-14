/**
 * Generates the hydrocarbon formatted formula string based on the passed in subscripts
 * @param carbonSubscript An integer, number type
 * @param hydrogenSubscript An integer, number type
 * @param oxygenSubscript An integer, number type
 * @returns hydrocarbon compoundFormula as a string
 */
export const makeHydrocarbonFormula = (carbonSubscript: number, hydrogenSubscript: number, oxygenSubscript: number): string => {
    let hydrocarbonFormula: string = "C";

    // Only add subscripts that are greater than 1
    if (carbonSubscript > 1) {
        hydrocarbonFormula += `/${carbonSubscript}/H`;
    } 

    if (hydrogenSubscript > 1) {
        hydrocarbonFormula += `/${hydrogenSubscript}/`;
    }

    // Only add O if the subcript is greater than 0
    if (oxygenSubscript === 1) {
        hydrocarbonFormula += "O";
    } else if (oxygenSubscript > 1) {
        hydrocarbonFormula += `O/${oxygenSubscript}/`
    }

    return hydrocarbonFormula
};
