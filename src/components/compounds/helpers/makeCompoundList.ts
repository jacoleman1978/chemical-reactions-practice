import { makeIonicCompound } from "./makeIonicCompound";
import { Compound } from "../configurations/interfaces";
import { GenerateQuantity } from "../configurations/types";
import { CompoundType } from "../../common/configurations/types";

/**
 * Generate and return an array of Compound objects of a given compound type
 * @param compoundType A compound type of type literal Type
 * @returns An array of Compound objects
 */

export const makeCompoundList = (compoundType: CompoundType): Compound[] => {
    let numberOfQuestions: GenerateQuantity = 10;

    if (compoundType === "ionic-mixed") {
        numberOfQuestions = 15;
    } else if (compoundType === "mixed") {
        numberOfQuestions = 20;
    }

    let compoundsList: Compound[] = [];
    let formulasList: string[] = [];

    while (compoundsList.length < numberOfQuestions) {
        let newCompound: Compound = makeIonicCompound(compoundType);

        // Only add unique newCompound to compoundsList
        if (!formulasList.includes(newCompound.compoundFormula)) {
            compoundsList = [...compoundsList, newCompound];
            formulasList = [...formulasList, newCompound.compoundFormula];
        }
    }

    return compoundsList
}