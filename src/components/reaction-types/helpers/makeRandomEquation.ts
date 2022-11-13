import { makeDecompCombEquation } from "../decomp-comb/helpers/makeDecompCombEquation";
import { ReactionType, RxnTypeList } from "../../common/configurations/types";

export const makeRandomEquation = (reactionType: ReactionType): RxnTypeList => {
    if (reactionType === "decomposition") {
        return makeDecompCombEquation("decomposition");
    } else {
        return makeDecompCombEquation("combination");
    }
};