import { Compound } from "../configurations/interfaces";

/**
 * Uses the name of the anion in the acid compound to generate the name of the acid and return the Compound object with the updated name.
 * @param compound Compound object, using H^+ as the cation and an anion from the acidAnions list
 * @returns a Compound object with an updated name using acid naming rules
 */

export const convertToAcid = (compound: Compound): Compound => {
    // Split the anion name from the compound into the root and suffix, where the suffix is always the last three characters of the anion name.
    const anionName = compound.anion.ionName;
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
        compound.compoundName = `hydro${anionRoot}ic acid`;
        return compound

    } else if (anionSuffix === "ite") {
        compound.compoundName = `${anionRoot}ous acid`;
        return compound

    } else if (anionSuffix === "ate") {
        compound.compoundName = `${anionRoot}ic acid`;
        return compound
    }

    return compound
}