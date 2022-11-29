import { makeRandomMolecularCompound } from "./makeMolecularCompound";
import { MolecularCompound } from "../newConfigurations/interfaces";
import { GenerateQuantity } from "../../common/configurations/types";

/**
 * Generate and return an array of "MolecularCompound" objects
 * @returns An array of "MolecularCompound" objects
 */

export const makeMolecularCompoundList = (): MolecularCompound[] => {
    let numberOfQuestions: GenerateQuantity = 10;

    let compoundsList: MolecularCompound[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let newCompound: MolecularCompound = makeRandomMolecularCompound();

        // Only add unique newCompound to compoundsList
        if (!formulasList.includes(newCompound.compoundFormula)) {
            compoundsList = [...compoundsList, newCompound];
            formulasList = [...formulasList, newCompound.compoundFormula];
        }
    }

    return compoundsList
}