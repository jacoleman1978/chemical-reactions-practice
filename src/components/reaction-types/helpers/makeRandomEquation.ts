import { makeDecompCombEquation } from "../decomp-comb/helpers/makeDecompCombEquation";
import { makeCombustionEquation } from "../combustion/helpers/makeCombustionEquation";

import { ReactionType, RxnTypeList } from "../../common/configurations/types";

export const makeRandomEquation = (reactionType: ReactionType): RxnTypeList => {
    if (reactionType === "decomposition") {
        return makeDecompCombEquation("decomposition");
    } else if (reactionType === "combustion") {
        return makeCombustionEquation();
    } else {
        return makeDecompCombEquation("combination");
    }
};