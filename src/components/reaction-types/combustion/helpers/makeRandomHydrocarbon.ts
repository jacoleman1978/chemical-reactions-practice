import { getRandomCSubscript, calculateHSubscript, getRandomOSubscript } from "./hydrocarbonSubscripts";
import { makeHydrocarbonFormula } from "./makeHydrocarbonFormula";
import { Hydrocarbon } from "../../configurations/interfaces";

/**
 * Generates a random Hydrocarbon object
 * @returns A randomly generated Hydrocarbon object
 */
export const makeRandomHydrocarbon = (): Hydrocarbon => {
    // Determine the subscripts for the hydrocarbon
    const carbonSubscript: number = getRandomCSubscript();
    const hydrogenSubscript: number = calculateHSubscript(carbonSubscript);
    const oxygenSubscript: number = getRandomOSubscript();

    // Create the Hydrocarbon object
    const hydrocarbon: Hydrocarbon = {
        compoundFormula: makeHydrocarbonFormula(carbonSubscript, hydrogenSubscript, oxygenSubscript),
        carbonSubscript: (carbonSubscript > 1 ? carbonSubscript.toString() : ""),
        hydrogenSubscript: (hydrogenSubscript > 1 ? hydrogenSubscript.toString(): ""),
        hasOxygen: oxygenSubscript > 0,
        coefficient: 1,
        balancingData: {
            currentCQty: carbonSubscript,
            currentHQty: hydrogenSubscript,
            currentOQty: oxygenSubscript,
        },
    }

    // If the oxygenSubscript is > 0, add that property to the Hydrocarbon object
    if (oxygenSubscript === 1) {
        hydrocarbon["oxygenSubscript"] = "";
    } else if (oxygenSubscript > 1) {
        hydrocarbon["oxygenSubscript"] = oxygenSubscript.toString()
    }

    return hydrocarbon
};
