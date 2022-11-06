import { makeCationList } from "./makeCationList";
import { makeAnionList } from "./makeAnionList";
import { getRandomIon } from "./getRandomIon";
import { makeFormulaParts } from "./makeFormulaParts";
import { makeFormulaString } from "./makeFormulaString";
import { convertToAcid } from "./convertToAcid";
import { FormulaParts, Compound, Ion } from "../configurations/interfaces";
import { Type } from "../../common/configurations/types";

/**
 * Generate a random ionic compound object of type Compound.
 * @param type The compound type of type Type
 * @returns a randomly generated ionic compound object of type Compound.
 */

export const makeIonicCompound = (type: Type): Compound => {
    // Get the list of ions appropriate to the compound type
    const availableCations: Ion[] = makeCationList(type);
    const availableAnions: Ion[] = makeAnionList(type);

    // Randomly get an individual ion
    const cation: Ion = getRandomIon(availableCations);
    const anion: Ion = getRandomIon(availableAnions);

    const compoundName: string = `${cation.ionName} ${anion.ionName}`;

    const formulaParts: FormulaParts = makeFormulaParts(cation, anion);

    const compoundFormula: string = makeFormulaString(formulaParts);

    // Populate the properties of the Compound object
    let compound: Compound = {cation, anion, compoundName, compoundFormula, formulaParts};

    // If the compound is of type "acids", change the compoundName property to conform to acid naming rules.
    if (type === "acids") {
        compound = convertToAcid(compound);
    }

    return compound
}