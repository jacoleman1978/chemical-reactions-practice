import { getRandomReactionType } from "./getRandomReactionType";
import { makeRandomEquation } from "./makeRandomEquation";
import { RxnTypeList } from "../../common/configurations/types";

export const makeEquationsList = (): RxnTypeList[] => {
    let numberOfEquations = 10;

    let equationsList: RxnTypeList[] = [];

    while (equationsList.length < numberOfEquations) {
        let reactionType = getRandomReactionType();

        if (reactionType === "decomposition" || reactionType === "combination") {
            equationsList = [...equationsList, makeRandomEquation(reactionType)];
            
        } else if ( reactionType === "combustion") {
            equationsList = [...equationsList, makeRandomEquation(reactionType)];
        }
    }

    return equationsList
};
