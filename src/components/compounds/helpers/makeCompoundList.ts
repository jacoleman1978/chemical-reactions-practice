import { makeRandomIonicCompound } from "./makeIonicCompound";
import { makeRandomMolecularCompound } from "./makeMolecularCompound";
import { getRandomListMember } from "../../common/helpers/getRandomListMember";
import { IonicCompound, MolecularCompound } from "../configurations/interfaces";
import { CompoundType, GenerateQuantity } from "../../common/configurations/types";

/**
 * Generate and return an array of "IonicCompound" objects of a given "CompoundType"
 * @param compoundType A compound type of type literal "CompoundType"
 * @param numberOfQuestions "GenerateQuantity" type literal
 * @returns An array of "IonicCompound" and/or "MolecularCompound" objects
 */
export const makeCompoundList = (compoundType: CompoundType, numberOfQuestions: GenerateQuantity): (IonicCompound | MolecularCompound)[] => {
    let compoundsList: (IonicCompound | MolecularCompound)[] = [];
    let formulasList: string[] = [];

    // Keep making new compounds until the number of items in the list equals "numberOfQuestions"
    while (compoundsList.length < numberOfQuestions) {
        let newCompound: (IonicCompound | MolecularCompound);
        let currentCompoundType: CompoundType = compoundType;

        // If the type is mixed, randomly select one of the specific compound types
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
 * Randomly generates a CompoundType: 25% molecular, 20% acids, 55% mixed-ionic
 * @returns a CompoundType
 */
 export const getRandomCompoundType = (): CompoundType => {
    const randomValue: number = Math.random();
    if (randomValue > 0.75) {
        return "molecular";
    } else if (randomValue > 0.55) {
        return "acids";
    }

    return getRandomListMember(["ionic-transition", "ionic-polyatomic"]);
}