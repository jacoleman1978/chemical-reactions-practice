import { getRandomCation } from "../../ions/helpers/getRandomCation";
import { getRandomAnion } from "../../ions/helpers/getRandomAnion";
import { findCompoundSubscripts } from "./findCompoundSubscripts";
import { IonicCompound } from "../newConfigurations/interfaces";
import { Ion } from "../../ions/configurations/interfaces";
import { PossibleNegativeCharges, PossiblePositiveCharges } from "../../ions/configurations/types";
import { CompoundType, FormulaParts } from "../../common/configurations/types";

/**
 * Generates a random "IonicCompound" object of the passed in "CompoundType"
 * @param compoundType "CompoundType" type literal
 * @returns "IonicCompound" object
 */
export const makeRandomIonicCompound = (compoundType: CompoundType): IonicCompound => {
    // Get random ions appropriate for the "compoundType"
    const cation: Ion = getRandomCation(compoundType);
    const anion: Ion = getRandomAnion(compoundType);

    return makeIonicCompound(compoundType, cation, anion)
};

/**
 * Generates an "IonicCompound" object using the passed in cation and anion "Ion" objects
 * @param compoundType "CompoundType" type literal
 * @param cation "Ion" object of a cation
 * @param anion "Ion" object of a anion
 * @returns "IonicCompound" object
 */
export const makeIonicCompound = (compoundType: CompoundType, cation: Ion, anion: Ion): IonicCompound => {
    // Determine the subscripts for the compound
    const { first, second } = findCompoundSubscripts(cation.charge as PossiblePositiveCharges, anion.charge as PossibleNegativeCharges);
    cation.subscript = first;
    anion.subscript = second;

    // Generate the "FormulaParts", adding in "(" or ")" as appropriate
    let formulaParts: FormulaParts = [...makeFormulaParts(cation), ...makeFormulaParts(anion)];

    // Make the "IonicCompound" object, formatting the name and formula as needed
    let compound: IonicCompound = {
        compoundName: makeIonicCompoundName(compoundType, cation.ionName, anion.ionName),
        compoundFormula: makeFormulaString(formulaParts),
        formulaParts: formulaParts,
        cation: cation,
        anion: anion,
        molarMass: cation.molarMass + anion.molarMass,
    }

    // If both "Ion" objects have data in the "solubilityTable" property, use the "solubilityTable" "BooleanDict" to determine the state of the compound in water
    if (cation.solubilityTable !== undefined && anion.solubilityTable !== undefined) {
        compound["state"] = (cation.solubilityTable[anion.ionName] ? "aq" : "s");
    }

    return compound
};

/**
 * Generate the compound name, using a different format for "compoundType" of "acids"
 * @param compoundType "CompoundType" type literal
 * @param cationName the name of the cation as a string
 * @param anionName the name of the anion as a string
 * @returns the name of the ionic compound as a string
 */
const makeIonicCompoundName = (compoundType: CompoundType, cationName: string, anionName: string): string => {
    // If the "compoundType" is "acids", use acid naming rules
    if (compoundType === "acids") {
        return convertToAcid(anionName)
    }

    return `${cationName} ${anionName}`
};

/**
 * Uses the suffix of the anion name to generate the name of the acid
 * @param anionName string
 * @returns Name of the acid as a string using acid naming rules
 */
 const convertToAcid = (anionName: string): string=> {
    // Split the anion name from the compound into the root and suffix, where the suffix is always the last three characters of the anion name.
    const length = anionName.length;
    const anionSuffix = anionName.substring(length-3, length);
    let anionRoot = anionName.substring(0, length-3);

    // Sulfide and phosphide do not follow the normal naming pattern rules for acids, so the root is modified to generate correct results.
    if (anionRoot.includes("sulf")) {
        anionRoot += "ur";
        
    } else if (anionRoot.includes("phosph")) {
        anionRoot += "or";
    }

    /*
        The suffix of the anion corresponds to a specific naming pattern for the acid name.
        '-ide' -> hydro_____ic acid
        '-ate' -> _____ic acid
        '-ite' -> _____ous acid
        The root of the anion name is placed on the blank lines above depending on the suffix of the anion name
    */
    if (anionSuffix === "ide") {
        return `hydro${anionRoot}ic acid`;

    } else if (anionSuffix === "ite") {
        return `${anionRoot}ous acid`;

    } else if (anionSuffix === "ate") {
        return `${anionRoot}ic acid`;
    }

    return ""
}

/**
 * Make the "FormulaParts" literal type array for the passed in "Ion" object
 * @param ion "Ion" object
 * @returns "FormulaParts" literal type array
 */
const makeFormulaParts = (ion: Ion): FormulaParts => {
    let formulaParts: FormulaParts = [];

    // Verify that the subscript property is populated
    if (ion.subscript !== undefined) {
        // If the ion is not polyatomic, return the symbol for ionParts and the subscript
        if (!ion.isPolyatomic) {
            return [ion.ionParts[0], ion.subscript];

        // Don't use parentheses, if the subcript is 1. Return the ionParts and the subscript
        } else if (ion.subscript === 1) {
            let formulaParts: FormulaParts = [];

            for (let part of ion.ionParts) {
                formulaParts = [...formulaParts, part];
            }

            return [...formulaParts, ion.subscript];

        // Use parentheses for polyatomic ions with subscripts greater than 1
        } else {
            const length: number = ion.ionParts.length;

            // The polyatomic ion does not contain its own subscripts
            if (length === 1) {
                return [`(${ion.ionParts[0]})`, ion.subscript]
            }

            // The polyatomic ion does contain at least one of its own subscripts
            formulaParts = [`(${ion.ionParts[0]}`];

            for (let i = 1; i < length -1; i++) {
                formulaParts = [...formulaParts, ion.ionParts[i]];
            }

            // If the last entry of ionParts is a string, concatenate ")" to the last part
            if (typeof ion.ionParts[length - 1] === "string") {
                formulaParts = [...formulaParts, `${ion.ionParts[length - 1]})`, ion.subscript];

            // If the last entry of ionParts is a number, add a ")" item to the array
            } else {
                formulaParts = [...formulaParts, ion.ionParts[length - 1], ")", ion.subscript];

            }

            return formulaParts
        }
    }

    return formulaParts
};

/**
 * Generate the formatted string for the formula, surrounding subscripts greater than 1 with "/"
 * @param formulaParts "FormulaParts" literal type array
 * @returns 
 */
const makeFormulaString = (formulaParts: FormulaParts): string => {
    let compoundFormula: string = "";

    for (let part of formulaParts) {
        // If the "part" is a string, concatenate it to the previous compoundFormula
        if (typeof part === "string") {
            compoundFormula += part;
        
        // If the "part" is a number and greater than one, surround the number with "/" and concatenate to the previous compoundFormula
        } else if (part > 1) {
            compoundFormula += `/${part.toString()}/`;
        }
    }

    return compoundFormula
};