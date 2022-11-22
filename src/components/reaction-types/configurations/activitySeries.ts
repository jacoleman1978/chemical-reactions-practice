import { ActivitySeries } from "./interfaces"

export const activitySeriesMetalsList: string[] = ["magnesium@0", "aluminum@1", "titanium@2", "manganese@3", "zinc@4", "chromium@5", "iron@6", "cobalt@7", "nickel@8", "tin@9", "lead@10", "hydrogen@11", "copper@12", "silver@13", "mercury@14", "platinum@15", "gold@16"];

export const activitySeriesNonmetalsList: string[] = ["fluoride@0", "chloride@1", "bromide@2", "iodide@3"];

// The greater the priority, the more reactive the metal or nonmetal
export const activitySeriesMetal: ActivitySeries = {
    magnesium: {
        elementSymbol: "Mg",
        ionName: "magnesium",
        possibleCharges: [2],
        priority: 910,
        isTransitionMetal: false,
    },
    aluminum: {
        elementSymbol: "Al",
        ionName: "aluminum",
        possibleCharges: [3],
        priority: 900,
        isTransitionMetal: false,
    },
    titanium: {
        elementSymbol: "Ti",
        ionName: "titanium",
        possibleCharges: [2, 3, 4],
        priority: 890,
        isTransitionMetal: true,
    },
    manganese: {
        elementSymbol: "Mn",
        ionName: "manganese",
        possibleCharges: [2, 7],
        priority: 880,
        isTransitionMetal: true,
    },
    zinc: {
        elementSymbol: "Zn",
        ionName: "zinc",
        possibleCharges: [2],
        priority: 870,
        isTransitionMetal: false,
    },
    chromium: {
        elementSymbol: "Cr",
        ionName: "chromium",
        possibleCharges: [3, 6],
        priority: 860,
        isTransitionMetal: true,
    },
    iron: {
        elementSymbol: "Fe",
        ionName: "iron",
        possibleCharges: [2, 3],
        priority: 850,
        isTransitionMetal: true,
    },
    cobalt: {
        elementSymbol: "Co",
        ionName: "cobalt",
        possibleCharges: [2, 3],
        priority: 840,
        isTransitionMetal: true,
    },
    nickel: {
        elementSymbol: "Ni",
        ionName: "nickel",
        possibleCharges: [2],
        priority: 830,
        isTransitionMetal: true,
    },
    tin: {
        elementSymbol: "Sn",
        ionName: "tin",
        possibleCharges: [2, 4],
        priority: 820,
        isTransitionMetal: true,
    },
    lead: {
        elementSymbol: "Pb",
        ionName: "lead",
        possibleCharges: [2, 4],
        priority: 810,
        isTransitionMetal: true,
    },
    hydrogen: {
        elementSymbol: "H",
        ionName: "hydrogen",
        possibleCharges: [1],
        priority: 800,
        isTransitionMetal: false,
    },
    copper: {
        elementSymbol: "Cu",
        ionName: "copper",
        possibleCharges: [1, 2],
        priority: 790,
        isTransitionMetal: true,
    },
    silver: {
        elementSymbol: "Ag",
        ionName: "silver",
        possibleCharges: [1],
        priority: 780,
        isTransitionMetal: false,
    },
    mercury: {
        elementSymbol: "Hg",
        ionName: "mercury",
        possibleCharges: [1, 2],
        priority: 770,
        isTransitionMetal: true,
    },
    platinum: {
        elementSymbol: "Pt",
        ionName: "platinum",
        possibleCharges: [2, 4],
        priority: 760,
        isTransitionMetal: true,
    },
    gold: {
        elementSymbol: "Au",
        ionName: "gold",
        possibleCharges: [1, 3],
        priority: 0,
        isTransitionMetal: true,
    },
}

export const activitySeriesNonmetal: ActivitySeries = {
    fluorine: {
        elementSymbol: "F",
        ionName: "fluoride",
        possibleCharges: [-1],
        priority: 40,
        isTransitionMetal: false,
    },
    chlorine: {
        elementSymbol: "Cl",
        ionName: "chloride",
        possibleCharges: [-1],
        priority: 30,
        isTransitionMetal: false,
    },
    bromine: {
        elementSymbol: "Br",
        ionName: "bromide",
        possibleCharges: [-1],
        priority: 20,
        isTransitionMetal: false,
    },
    iodine: {
        elementSymbol: "I",
        ionName: "iodide",
        possibleCharges: [-1],
        priority: 0,
        isTransitionMetal: false,
    },
}