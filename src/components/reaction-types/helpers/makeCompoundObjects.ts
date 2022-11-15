import { makeFormulaParts } from "../../compounds/helpers/makeFormulaParts";
import { makeFormulaString } from "../../compounds/helpers/makeFormulaString";
import { Compound, Ion, FormulaParts } from "../../compounds/configurations/interfaces";

export const makeCompoundObjects = (cation: Ion, anion: Ion): Compound => {
    const compoundName: string = `${cation.ionName} ${anion.ionName}`;
    const formulaParts: FormulaParts = makeFormulaParts(cation, anion);
    const compoundFormula: string = makeFormulaString(formulaParts);
    const compound: Compound = {
        cation, anion, compoundName, compoundFormula, formulaParts
    }

    return compound
};
