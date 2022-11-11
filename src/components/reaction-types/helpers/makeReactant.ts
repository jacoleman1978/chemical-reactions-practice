import { makeIonicCompound } from "../../compounds/helpers/makeIonicCompound";
import { EquationCompound } from "../configurations/interfaces";
import { Compound } from "../../compounds/configurations/interfaces";
import { ReactionType } from "../../common/configurations/types";

export const makeReactant = (reactionType: ReactionType): EquationCompound => {
    const randomChoice: boolean = Boolean(Math.round(Math.random()));
    const compound: Compound = (randomChoice ? makeIonicCompound("ionic-main"): makeIonicCompound("ionic-transition"));

    let firstSubscript: string = compound.formulaParts.firstSubscript;
    if (firstSubscript.length === 0) {
        firstSubscript = "1";
    }

    let secondSubscript: string = compound.formulaParts.secondSubscript;
    if (secondSubscript.length === 0) {
        secondSubscript = "1";
    }

    const cationQty: number = Number(firstSubscript);
    const anionQty: number = Number(secondSubscript);

    let reactant: EquationCompound = {
        compound: compound,
        coefficient: 1,
        state: "s",
        balancingData: {
            initialCationQty: cationQty,
            initialAnionQty: anionQty,
            totalCationQty: cationQty,
            totalAnionQty: anionQty,
        }
    }

    return reactant
};
