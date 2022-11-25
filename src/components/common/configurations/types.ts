import { DecompositionReaction, CombustionReaction, SRReaction, DRReaction, CombinationReaction } from "../../reaction-types/configurations/interfaces";

export type PracticeType = "" | "main" | "naming" | "formulas" | "balancing" | "reaction-types" | "predicting-products";

export type CompoundType = "ionic-main" | "ionic-transition" | "ionic-polyatomic" | "ionic-mixed" | "acids" | "molecular" | "mixed";

export type ReactionType = "decomposition" | "combustion" | "single-replacement" | "double-replacement" | "combination" | "sr-no-reaction" | "dr-no-reaction";

export type RxnTypeList = DecompositionReaction | CombustionReaction | SRReaction | DRReaction | CombinationReaction;

export type PTGroup = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

export type PTPeriod = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type PossiblePositiveCharges = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type PossibleNegativeCharges = -4 | -3 | -2 | -1;

export type StateOfMatter = "s" | "l" | "g" | "aq";