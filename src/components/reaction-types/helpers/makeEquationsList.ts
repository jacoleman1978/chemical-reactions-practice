import { makeDecompCombEquation } from "./makeDecompCombEquation";
import { makeCombustionEquation } from "./makeCombustionEquation";
import { makeDREquation } from "./makeDREquation";
import { makeSREquation } from "./makeSREquation";
import { ReactionType, ReactionTypeList } from "../../common/configurations/types";

/**
 * Make an array of random reaction types from the "ReactionTypeList" type literal
 * @returns "ReactionTypeList[]"
 */
export const makeEquationsList = (): ReactionTypeList[] => {
    let numberOfEquations = 10;

    let equationsList: ReactionTypeList[] = [];

    while (equationsList.length < numberOfEquations) {
        let reactionType = getRandomReactionType();

        if (reactionType === "decomposition") {
            equationsList = [...equationsList, makeDecompCombEquation("decomposition")];
            
        } else if (reactionType === "combustion") {
            equationsList = [...equationsList, makeCombustionEquation()];

        } else if (reactionType === "double-replacement") {
            equationsList = [...equationsList, makeDREquation(false)];

        } else if (reactionType === "dr-no-reaction") {
            equationsList = [...equationsList, makeDREquation(true)];

        } else if (reactionType === "single-replacement") {
            equationsList = [...equationsList, makeSREquation(true)];

        } else if (reactionType === "sr-no-reaction") {
            equationsList = [...equationsList, makeSREquation(false)];

        } else if (reactionType === "combination") {
            equationsList = [...equationsList, makeDecompCombEquation("combination")];
        }
    }

    return equationsList
};

/**
 * Generates a reaction type using weighted values and a randomly generated number
 * 10% chance of "combination", 10% chance of "dr-no-reaction", 25% chance of "double-replacement", 10% chance of "sr-no-reaction", 25% chance of "single-replacement", 10% chance of combustion, and 10% chance of decomposition
 * @returns ReactionType type literal
 */
 export const getRandomReactionType = (): ReactionType => {
    const randomNumber: number = Math.random();

    if (randomNumber > 0.9) {
        return "combination"
    } else if (randomNumber > 0.8) {
        return "dr-no-reaction"
    } else if (randomNumber > 0.55) {
        return "double-replacement"
    } else if (randomNumber > 0.45) {
        return "sr-no-reaction"
    } else if (randomNumber > 0.20) {
        return "single-replacement"
    } else if (randomNumber > 0.10) {
        return "combustion"
    } else {
        return "decomposition"
    }
};
