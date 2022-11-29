import { makeRandomIonicCompound } from "./makeIonicCompound";
import { makeRandomMolecularCompound } from "./makeMolecularCompound";
import { IonicCompound, MolecularCompound } from "../newConfigurations/interfaces";
import { CompoundType, GenerateQuantity } from "../../common/configurations/types";

/**
 * Generate and return an array of "IonicCompound" objects of a given "CompoundType"
 * @param compoundType A compound type of type literal "CompoundType"
 * @returns An array of "IonicCompound" objects
 */
export const makeCompoundList = (compoundType: CompoundType, numberOfQuestions: GenerateQuantity): (IonicCompound | MolecularCompound)[] => {
    let compoundsList: (IonicCompound | MolecularCompound)[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let newCompound: (IonicCompound | MolecularCompound);
        let currentCompoundType: CompoundType = compoundType;

        if (compoundType === "mixed") {
            currentCompoundType = getRandomCompoundType();
        }

        if (currentCompoundType === "molecular") {
            newCompound = makeRandomMolecularCompound();

        } else {
            newCompound = makeRandomIonicCompound(currentCompoundType);
        }
        
        // Only add unique newCompound to compoundsList
        if (!formulasList.includes(newCompound.compoundFormula)) {
            compoundsList = [...compoundsList, newCompound];
            formulasList = [...formulasList, newCompound.compoundFormula];
        }
    }

    return compoundsList
}

/**
 * Randomly generates a CompoundType
 * @returns a CompoundType
 */
 export const getRandomCompoundType = (): CompoundType => {
    const randomValue: number = Math.random();
    let compoundType: CompoundType = "ionic-mixed";

    if (randomValue > 0.75) {
        compoundType = "molecular";
    } else if (randomValue > 0.55) {
        compoundType = "acids";
    }

    return compoundType
}