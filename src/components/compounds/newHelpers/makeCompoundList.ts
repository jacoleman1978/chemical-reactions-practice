import { makeIonicCompound } from "./makeIonicCompound";
import { IonicCompound } from "../newConfigurations/interfaces";
import { GenerateQuantity } from "../../common/configurations/types";
import { CompoundType } from "../../common/configurations/types";

/**
 * Generate and return an array of "IonicCompound" objects of a given "CompoundType"
 * @param compoundType A compound type of type literal "CompoundType"
 * @returns An array of "IonicCompound" objects
 */

export const makeCompoundList = (compoundType: CompoundType): IonicCompound[] => {
    let numberOfQuestions: GenerateQuantity = 10;

    if (compoundType === "ionic-mixed") {
        numberOfQuestions = 15;
    } else if (compoundType === "mixed") {
        numberOfQuestions = 20;
    }

    let compoundsList: IonicCompound[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let newCompound: IonicCompound = makeIonicCompound(compoundType);

        // Only add unique newCompound to compoundsList
        if (!formulasList.includes(newCompound.compoundFormula)) {
            compoundsList = [...compoundsList, newCompound];
            formulasList = [...formulasList, newCompound.compoundFormula];
        }
    }

    return compoundsList
}