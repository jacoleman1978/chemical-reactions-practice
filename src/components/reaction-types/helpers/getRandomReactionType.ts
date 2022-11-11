import { ReactionType } from "../../common/configurations/types";
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
