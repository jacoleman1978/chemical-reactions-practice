import { getRandomCompoundType } from "./getRandomCompoundType";
import { makeIonicCompound } from "./makeIonicCompound";
import { makeRandomMolecularCompound } from "./makeMolecularCompound";
import { IonicCompound, MolecularCompound } from "../newConfigurations/interfaces";
import { CompoundType, GenerateQuantity } from "../../common/configurations/types";

/**
 * Makes a randomly generated list of different "CompoundTypes"
 * @returns A list of "IonicCompounds" and "MolecularCompound" objects
 */
export const makeRandomCompoundList = () => {
    let numberOfQuestions: GenerateQuantity = 20;

    let compoundsList: (IonicCompound | MolecularCompound)[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let compoundType: CompoundType = getRandomCompoundType();
        let newCompound: (IonicCompound | MolecularCompound);

        if (compoundType === "molecular") {
            newCompound = makeRandomMolecularCompound();
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