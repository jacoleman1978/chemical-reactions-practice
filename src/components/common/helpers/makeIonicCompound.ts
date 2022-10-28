import { findCompoundSubscripts } from "./findCompoundSubscripts";
import { Ion } from "../../../interfaces";
import { Compound } from "../../../interfaces";
import { CompoundSubscripts } from "../../../interfaces";
import { makeCationList } from "./makeCationList";
import { makeAnionList } from "./makeAnionList";
import { getRandomIon } from "./getRandomIon";
import { makeCompoundFormula } from "./makeCompoundFormula";

export const makeIonicCompound = (type: string): Compound => {
    // Get the list of ions appropriate to the compound type
    const availableCations: Ion[] = makeCationList(type);
    const availableAnions: Ion[] = makeAnionList(type);

    // Randomly get an individual ion
    const cation: Ion = getRandomIon(availableCations);
    const anion: Ion = getRandomIon(availableAnions);

    const compoundName: string = `${cation.ionName} ${anion.ionName}`;

    const compoundFormula: string = makeCompoundFormula(cation, anion);

    return {cation, anion, compoundName, compoundFormula}
}