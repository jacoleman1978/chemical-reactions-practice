import { makeDecompCombEquation } from "../decomp-combination/helpers/makeDecompCombEquation";
import { makeCombustionEquation } from "../combustion/helpers/makeCombustionEquation";
import { makeDREquation } from "../double-replacement/helpers/makeDREquation";
import { makeSREquation } from "../single-replacement/helpers/makeSREquation";
import { ReactionType, ReactionTypeList } from "../../common/configurations/types";

/**
 * Make an array of random reaction types from the "ReactionTypeList" type literal
 * @returns "ReactionTypeList[]"
 */
export const makeEquationsList = (): ReactionTypeList[] => {
    let numberOfEquations = 15;

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
 * 15% chance of "combination", 5% chance of "dr-no-reaction", 20% chance of "double-replacement", 5% chance of "sr-no-reaction", 20% chance of "single-replacement", 20% chance of combustion, and 15% chance of decomposition
 * @returns ReactionType type literal
 */
 export const getRandomReactionType = (): ReactionType => {
    const randomNumber: number = Math.random();

    if (randomNumber > 0.85) {
        return "combination"
    } else if (randomNumber > 0.8) {
        return "dr-no-reaction"
    } else if (randomNumber > 0.6) {
        return "double-replacement"
    } else if (randomNumber > 0.55) {
        return "sr-no-reaction"
    } else if (randomNumber > 0.35) {
        return "single-replacement"
    } else if (randomNumber > 0.15) {
        return "combustion"
    } else {
        return "decomposition"
    }
};
