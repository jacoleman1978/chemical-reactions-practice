import { makeDecompEquation } from "./makeDecompEquation";
import { DecompositionReaction } from "../../configurations/interfaces";

export const makeDecompEqnList = () => {
    let equationsList: DecompositionReaction[] = [];

    while (equationsList.length < 10) {
        equationsList = [...equationsList, makeDecompEquation()];
    }

    return equationsList
};
