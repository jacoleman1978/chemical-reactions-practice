import { getRandomCompoundType } from "./getRandomCompoundType";
import { makeIonicCompound } from "./makeIonicCompound";
import { makeMolecularCompound } from "./makeMolecularCompound";
import { Compound, MolecularCompound } from "../configurations/interfaces";
import { GenerateQuantity } from "../configurations/types";
import { CompoundType } from "../../common/configurations/types";

/**
 * Makes a randomly generated list of different CompoundTypes
 * @returns A list of Compounds and MolecularCompound objects
 */
export const makeRandomCompoundList = () => {
    let numberOfQuestions: GenerateQuantity = 20;

    let compoundsList: (Compound | MolecularCompound)[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let compoundType: CompoundType = getRandomCompoundType();
        let newCompound: (Compound | MolecularCompound);

        if (compoundType === "molecular") {
            newCompound = makeMolecularCompound();
        } else {
            newCompound = makeIonicCompound(compoundType);
        }

        // Only add unique newCompound to compoundsList
        if (!formulasList.includes(newCompound.compoundFormula)) {
            compoundsList = [...compoundsList, newCompound];
            formulasList = [...formulasList, newCompound.compoundFormula];
        }
    }

    return compoundsList
}