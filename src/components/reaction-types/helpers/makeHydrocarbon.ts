import { makeNewMolecularElement } from "../../compounds/helpers/makeMolecularCompound";
import { MolecularCompound } from "../../compounds/configurations/interfaces";

/**
 * Generates a random hydrocarbon "MolecularCompound" object
 * @returns A randomly generated hydrocarbon "MolecularCompound" object
 */
export const makeRandomHydrocarbon = (): MolecularCompound => {
    // Determine the subscripts for the hydrocarbon
    const carbonSubscript: number = getRandomCSubscript();
    const hydrogenSubscript: number = calculateHSubscript(carbonSubscript);
    const oxygenSubscript: number = getRandomOSubscript();

    // Create the Hydrocarbon object
    const hydrocarbon: MolecularCompound = {
        compoundName: "Naming hydrocarbons is beyond the scope of this app",
        compoundFormula: makeHydrocarbonFormula(carbonSubscript, hydrogenSubscript, oxygenSubscript),
        formulaParts: [],
        firstElement: makeNewMolecularElement({elementSymbol: "C", oxState: 4}, carbonSubscript, false),
        secondElement: makeNewMolecularElement({elementSymbol: "H", oxState: 1}, hydrogenSubscript, false),
        molarMass: 0,
        state: "g",
        coefficient: 1,

    }

    hydrocarbon.molarMass = hydrocarbon.firstElement.molarMass + hydrocarbon.secondElement.molarMass;

    hydrocarbon.formulaParts = [
        hydrocarbon.firstElement.elementSymbol,
        hydrocarbon.firstElement.subscript,
        hydrocarbon.secondElement.elementSymbol,
        hydrocarbon.secondElement.subscript,
    ];

    // If the oxygenSubscript is > 0, add that property to the Hydrocarbon object
    if (oxygenSubscript > 0) {
        hydrocarbon["thirdElement"] = makeNewMolecularElement({elementSymbol: "O", oxState: -2}, oxygenSubscript, false);
    }

    if (hydrocarbon.thirdElement !== undefined) {
        hydrocarbon.molarMass += hydrocarbon.thirdElement.molarMass;
        hydrocarbon.formulaParts = [
            ...hydrocarbon.formulaParts,
            hydrocarbon.thirdElement.elementSymbol,
            hydrocarbon.thirdElement.subscript,
        ]
    }

    return hydrocarbon
};

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

/**
 * Uses a weighted table to return the carbon subscript in the hydrocarbon MolecularCompound used for combustion reactions
 * 5% chance of 10 C's, 10% chance of 9 C's, 10% chance of 8 C's, 10% chance of 7 C's, 20% chance of 6 C's, 20% chance of 5 C's, 10% chance of 4 C's, 7% chance of 3 C's, 6% chance of 2 C's 2% chance of 1 C
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
 * 3% chance of 3 O's, 4% chance of 2 O's, 13% chance of 1 O, 80% chance of no O's
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

