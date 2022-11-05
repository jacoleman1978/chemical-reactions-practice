import { Ion, Compound, FormulaParts } from "../../../interfaces";
import { makeCationList } from "./makeCationList";
import { makeAnionList } from "./makeAnionList";
import { getRandomIon } from "./getRandomIon";
import { makeFormulaParts } from "./makeFormulaParts";
import { makeFormulaString } from "./makeFormulaString";
import { convertToAcid } from "./convertToAcid";

export const makeIonicCompound = (type: string): Compound => {
    // Get the list of ions appropriate to the compound type
    const availableCations: Ion[] = makeCationList(type);
    const availableAnions: Ion[] = makeAnionList(type);

    // Randomly get an individual ion
    const cation: Ion = getRandomIon(availableCations);
    const anion: Ion = getRandomIon(availableAnions);

    const compoundName: string = `${cation.ionName} ${anion.ionName}`;

    const formulaParts: FormulaParts = makeFormulaParts(cation, anion);

    const compoundFormula: string = makeFormulaString(formulaParts);

    let compound: Compound = {cation, anion, compoundName, compoundFormula, formulaParts};

    if (type === "acids") {
        compound = convertToAcid(compound);
    }

    return compound
}