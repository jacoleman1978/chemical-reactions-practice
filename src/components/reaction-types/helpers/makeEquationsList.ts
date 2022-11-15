import { getRandomReactionType } from "./getRandomReactionType";
import { makeDecompCombEquation } from "../decomp-comb/helpers/makeDecompCombEquation";
import { makeCombustionEquation } from "../combustion/helpers/makeCombustionEquation";
import { makeDREquation } from "../double-replacement/helpers/makeDREquation";
import { RxnTypeList } from "../../common/configurations/types";

export const makeEquationsList = (): RxnTypeList[] => {
    let numberOfEquations = 15;

    let equationsList: RxnTypeList[] = [];

    while (equationsList.length < numberOfEquations) {
        let reactionType = getRandomReactionType();

        if (reactionType === "decomposition") {
            equationsList = [...equationsList, makeDecompCombEquation("decomposition")];
            
        } else if (reactionType === "combustion") {
            equationsList = [...equationsList, makeCombustionEquation()];

        } else if (reactionType === "double-replacement") {
            equationsList = [...equationsList, makeDREquation(true)];

        } else if (reactionType === "dr-no-reaction") {
            equationsList = [...equationsList, makeDREquation(false)];

        } else if (reactionType === "combination") {
            equationsList = [...equationsList, makeDecompCombEquation("combination")];

        }
    }

    return equationsList
};
