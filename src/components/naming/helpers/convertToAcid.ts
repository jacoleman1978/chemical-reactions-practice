import { Compound } from "../../../interfaces"

export const convertToAcid = (compound: Compound): Compound => {
    const anionName = compound.anion.ionName;
    const length = anionName.length;
    const anionSuffix = anionName.substring(length-3, length);
    let anionRoot = anionName.substring(0, length-3);

    if (anionRoot.includes("sulf")) {
        anionRoot += "ur";
        
    } else if (anionRoot.includes("phosph")) {
        anionRoot += "or";
    }

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