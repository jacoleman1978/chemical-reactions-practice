import { makeRandomIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { makeEquationElements } from "../../helpers/makeEquationElements";
import { balanceDecompCombEquation } from "./balanceDecompCombEquation";
import { IonicCompound } from "../../../compounds/configurations/interfaces";
import { ReactionTypeList } from "../../../common/configurations/types";

/**
 * Generates a "DecompositionReaction" or "CombinationReaction" object
 * @param reactionType "ReactionType" type literal. Use 'decomposition' or 'combination'
 * @returns "DecompositionReaction" or "CombinationReaction" object
 */
export const makeDecompCombEquation = (reactionType: ("decomposition" | "combination")): ReactionTypeList => {
    // Make a random ionic compound "EquationCompound" object and the corresponsing "EquationElements"
    const randomChoice: boolean = Boolean(Math.round(Math.random()));
    let compound: IonicCompound = (randomChoice ? makeRandomIonicCompound("ionic-main"): makeRandomIonicCompound("ionic-transition"));
    
    let {elementOne, elementTwo} = makeEquationElements(compound);

    return balanceDecompCombEquation({reactionType, compound, elementOne, elementTwo})
};
