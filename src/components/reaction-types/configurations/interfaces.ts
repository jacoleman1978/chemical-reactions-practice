import { ReactElement } from "react";
import { ReactionType } from "../../common/configurations/types";

export interface InformationDisplay {
    reactionType: ReactionType,
    label: string,
    information: string,
    example: () => ReactElement,
}

export interface ActivitySeries {
    elementSymbol: string,
    elementName: string,
    possibleCharges: number[],
    priority: number,
    isTransitionMetal: boolean,
}

export interface SolubilityAnions {
    fluoride: boolean,
    chloride: boolean,
    bromide: boolean,
    iodide: boolean,
    chlorate: boolean,
    hydroxide: boolean,
    sulfite: boolean,
    sulfate: boolean,
    carbonate: boolean,
    nitrite: boolean,
    nitrate: boolean,
    phosphate: boolean,
    acetate: boolean,
    chromate: boolean,
}

export interface SolubilityCations {
    ammonium: SolubilityAnions,
    lithium: SolubilityAnions,
    sodium: SolubilityAnions,
    potassium: SolubilityAnions,
    magnesium: SolubilityAnions,
    calcium: SolubilityAnions,
    barium: SolubilityAnions,
    iron: SolubilityAnions,
    copper: SolubilityAnions,
    silver: SolubilityAnions,
    zinc: SolubilityAnions,
    lead: SolubilityAnions,
    aluminum: SolubilityAnions,
    mercury: SolubilityAnions,
}

export interface ReactionTypeMenuOption {
    reactionType: ReactionType,
    optionTitle: string,
}