import { ElementData, TMMetalsByCharge, MolecularByOxState } from "./interfaces";

// Halogens
const halogens: readonly string[] = ["F", "Cl", "Br", "I"];

// Diatomic elements
export const diatomicElements: readonly string[] = ["H", "N", "O", ...halogens];

// Main group ions
export const mainGroupCations: readonly string[] = ["Li", "Na", "Mg", "Al", "K", "Ca", "Zn", "Rb", "Sr", "Ag", "Cd", "Cs", "Ba"];
export const mainGroupAnions: readonly string[] = ["C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"];

// Transition metal ions
export const transitionMetalCations: readonly string[] = ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Mo", "Ru", "Pd", "Sn", "W", "Re", "Os", "Pt", "Au", "Hg", "Pb"];

// Acid ions
export const acidMainGroupCations: readonly string[] = ["H"];
export const acidMainGroupAnions: readonly string[] = [...halogens];

// Mixed cations
export const mixedCations: readonly string[] = [...mainGroupCations, ...transitionMetalCations];

// On solubility table - double replacement ions
export const drCations: readonly string[] = ["Li", "Na", "Mg", "Al", "K", "Ca", "Fe", "Cu", "Zn", "Rb", "Ag", "Cs", "Ba", "Hg", "Pb"];
export const drAnions: readonly string[] = [...halogens];

// On activity series - single replacement ions
export const activitySeriesCations: readonly string[] = ["Mg", "Al", "Ti", "Mn", "Zn", "Cr", "Fe", "Co", "Ni", "Sn", "Pb", "H", "Cu", "Ag", "Hg", "Pt", "Au"];
export const activitySeriesAnions: readonly string[] = [...halogens];

// Transition metal cations by charge
export const transitionMetalsByCharge: TMMetalsByCharge = {
    plusOne: ["Cu", "Au"],
    plusTwo: ["Ti", "Fe", "Co", "Ni", "Cu", "Pd", "Sn", "Pt", "Hg", "Pb"],
    plusThree: ["Sc", "V", "Cr", "Mn", "Fe", "Co", "Ru", "Re", "Au"],
    plusFour: ["Ti", "Mo", "Ru", "Pd", "Sn", "W", "Re", "Os", "Pt", "Pb"],
    plusFive: ["V", "Cr", "Mn", "W", "Re"],
    plusSix: ["Cr", "Mo", "Ru", "W", "Os"],
    plusSeven: ["Mn", "Re"],
    plusEight: ["Ru", "Os"],
}

// Elements for molecular compounds by oxidation state
export const molecularByOxState: MolecularByOxState = {
    allPositive: ["Cl", "Br", "Xe", "P", "As", "C", "Si", "Ge", "Se", "Te", "N", "I", "S"],
    plusOne: ["Cl", "Br"],
    plusTwo: ["Kr", "Xe"],
    plusThree: ["P", "Cl", "As", "Br"],
    plusFour: ["C", "Si", "Ge", "Se", "Te", "Xe"],
    plusFive: ["N", "P", "As", "Br", "I"],
    plusSix: ["S", "Xe"],
    allNegative: ["H", "O", "S", "Se", "N", "P", "As", ...halogens],
    negOne: ["H", ...halogens],
    negTwo: ["O", "S", "Se"],
    negThree: ["N", "P", "As"],
}

// Elements for molecular compounds by electronegativity
export const molecularByElectronegativity: {[member: string]: string[]} = {
    "Kr": ["Cl", "O", "F"],
    "Xe": ["Cl", "O", "F"],
    "Si": ["C", "H", "S", "I", "Br", "Cl", "O", "F"],
    "C": ["H", "Se", "S", "N", "I", "Br", "Cl", "O", "F"],
    "As": ["H", "I", "Br", "Cl", "O", "F"],
    "P": ["H", "Se", "S", "I", "Br", "Cl", "O", "F"],
    "H": ["S", "O"],
    "Ge": ["H", "Se", "S", "N", "I", "Br", "Cl", "O", "F"],
    "Te": ["I", "Br", "Cl", "O", "F"],
    "Se": ["I", "Br", "Cl", "O", "F"],
    "S": ["I", "Br", "Cl", "O", "F"],
    "N": ["I", "Br", "Cl", "O", "F"],
    "I": ["Br", "Cl", "O", "F"],
    "Br": ["Cl", "O", "F"],
    "Cl": ["O", "F"],
    "O": ["F"],
}

export const elementData: ElementData = {
    H: {
        elementSymbol: "H",
        elementName: "hydrogen",
        ionName: "hydride",
        possiblePositiveCharges: [1],
        possibleNegativeCharges: [-1],
        charge: 1,
        electronegativity: 2.1,
        needsRomanNumerals: false,
        activitySeriesPriority: 800,
        stateOfMatter: "g",
        molarMass: 1.01,
    },
    Li: {
        elementSymbol: "Li",
        elementName: "lithium",
        ionName: "lithium",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 6.94,
    },
    C: {
        elementSymbol: "C",
        elementName: "carbon",
        ionName: "carbide",
        possiblePositiveCharges: [4],
        possibleNegativeCharges: [-4],
        charge: -4,
        electronegativity: 2.5,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 12.01,
    },
    N: {
        elementSymbol: "N",
        elementName: "nitrogen",
        ionName: "nitride",
        possiblePositiveCharges: [5],
        possibleNegativeCharges: [-3],
        charge: -3,
        electronegativity: 3.0,
        needsRomanNumerals: false,
        stateOfMatter: "g",
        molarMass: 14.01,
    },
    O: {
        elementSymbol: "O",
        elementName: "oxygen",
        ionName: "oxide",
        possibleNegativeCharges: [-2],
        charge: -2,
        electronegativity: 3.5,
        needsRomanNumerals: false,
        stateOfMatter: "g",
        molarMass: 16.00,
    },
    F: {
        elementSymbol: "F",
        elementName: "fluorine",
        ionName: "fluoride",
        possibleNegativeCharges: [-1],
        charge: -1,
        electronegativity: 4.0,
        needsRomanNumerals: false,
        activitySeriesPriority: 4,
        solubilityTable: {
            rubidium: true, 
            ammonium: true,
            lithium: false,
            sodium: true,
            potassium: true,
            magnesium: false,
            calcium: false,
            barium: false,
            iron: false,
            copper: true,
            silver: true,
            zinc: true,
            lead: false,
            aluminum: false,
            mercury: false,
        },
        stateOfMatter: "g",
        molarMass: 19.00,
    },
    Na: {
        elementSymbol: "Na",
        elementName: "sodium",
        ionName: "sodium",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: true,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 22.99,
    },
    Mg: {
        elementSymbol: "Mg",
        elementName: "magnesium",
        ionName: "magnesium",
        possiblePositiveCharges: [2],
        charge: 2,
        needsRomanNumerals: false,
        activitySeriesPriority: 910,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: true,
            sulfate: true,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 24.31,
    },
    Al: {
        elementSymbol: "Al",
        elementName: "aluminum",
        ionName: "aluminum",
        possiblePositiveCharges: [3],
        charge: 3,
        needsRomanNumerals: false,
        activitySeriesPriority: 900,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: false,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 26.98,
    },
    Si: {
        elementSymbol: "Si",
        elementName: "silicon",
        ionName: "silicon",
        possiblePositiveCharges: [4],
        charge: 4,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 28.09,
    },
    P: {
        elementSymbol: "P",
        elementName: "phosphorus",
        ionName: "phosphide",
        possiblePositiveCharges: [3, 5],
        possibleNegativeCharges: [-3],
        charge: -3,
        electronegativity: 2.1,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 30.97,
    },
    S: {
        elementSymbol: "S",
        elementName: "sulfur",
        ionName: "sulfide",
        possiblePositiveCharges: [6],
        possibleNegativeCharges: [-2],
        charge: -2,
        electronegativity: 2.5,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 32.07,
    },
    Cl: {
        elementSymbol: "Cl",
        elementName: "chlorine",
        ionName: "chloride",
        possiblePositiveCharges: [1, 3],
        possibleNegativeCharges: [-1],
        charge: -1,
        electronegativity: 3.0,
        needsRomanNumerals: false,
        activitySeriesPriority: 3,
        solubilityTable: {
            rubidium: true,
            ammonium: true,
            lithium: true,
            sodium: true,
            potassium: true,
            magnesium: true,
            calcium: true,
            barium: true,
            iron: true,
            copper: true,
            silver: false,
            zinc: true,
            lead: false,
            aluminum: true,
            mercury: false,
        },
        stateOfMatter: "g",
        molarMass: 35.45,
    },
    K: {
        elementSymbol: "K",
        elementName: "potassium",
        ionName: "potassium",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: true,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 39.10,
    },
    Ca: {
        elementSymbol: "Ca",
        elementName: "calcium",
        ionName: "calcium",
        possiblePositiveCharges: [2],
        charge: 2,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: false,
            sulfate: false,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 40.08,
    },
    Sc: {
        elementSymbol: "Sc",
        elementName: "scandium",
        ionName: "scandium",
        possiblePositiveCharges: [3],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 44.96,
    },
    Ti: {
        elementSymbol: "Ti",
        elementName: "titanium",
        ionName: "titanium",
        possiblePositiveCharges: [2, 4],
        needsRomanNumerals: true,
        activitySeriesPriority: 890,
        stateOfMatter: "s",
        molarMass: 47.88,
    },
    V: {
        elementSymbol: "V",
        elementName: "vanadium",
        ionName: "vanadium",
        possiblePositiveCharges: [3, 5],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 50.94,
    },
    Cr: {
        elementSymbol: "Cr",
        elementName: "chromium",
        ionName: "chromium",
        possiblePositiveCharges: [3, 5, 6],
        needsRomanNumerals: true,
        activitySeriesPriority: 860,
        stateOfMatter: "s",
        molarMass: 52.00,
    },
    Mn: {
        elementSymbol: "Mn",
        elementName: "manganese",
        ionName: "manganese",
        possiblePositiveCharges: [3, 5, 7],
        needsRomanNumerals: true,
        activitySeriesPriority: 880,
        stateOfMatter: "s",
        molarMass: 54.94,
    },
    Fe: {
        elementSymbol: "Fe",
        elementName: "iron",
        ionName: "iron",
        possiblePositiveCharges: [2, 3],
        needsRomanNumerals: true,
        activitySeriesPriority: 850,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: true,
            sulfate: true,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 55.85,
    },
    Co: {
        elementSymbol: "Co",
        elementName: "cobalt",
        ionName: "cobalt",
        possiblePositiveCharges: [2, 3],
        needsRomanNumerals: true,
        activitySeriesPriority: 840,
        stateOfMatter: "s",
        molarMass: 58.93,
    },
    Ni: {
        elementSymbol: "Ni",
        elementName: "nickel",
        ionName: "nickel",
        possiblePositiveCharges: [2],
        needsRomanNumerals: true,
        activitySeriesPriority: 830,
        stateOfMatter: "s",
        molarMass: 58.69,
    },
    Cu: {
        elementSymbol: "Cu",
        elementName: "copper",
        ionName: "copper",
        possiblePositiveCharges: [1, 2],
        needsRomanNumerals: true,
        activitySeriesPriority: 790,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: true,
            sulfate: true,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 63.55,
    },
    Zn: {
        elementSymbol: "Zn",
        elementName: "zinc",
        ionName: "zinc",
        possiblePositiveCharges: [2],
        charge: 2,
        needsRomanNumerals: false,
        activitySeriesPriority: 870,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: false,
            sulfite: false,
            sulfate: true,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 65.38,
    },
    Ge: {
        elementSymbol: "Ge",
        elementName: "germanium",
        ionName: "germanium",
        possiblePositiveCharges: [4],
        charge: 4,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 72.63,
    },
    As: {
        elementSymbol: "As",
        elementName: "arsenic",
        ionName: "arsenide",
        possiblePositiveCharges: [3, 5],
        possibleNegativeCharges: [-3],
        charge: -3,
        electronegativity: 2.0,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 74.92,
    },
    Se: {
        elementSymbol: "Se",
        elementName: "selenium",
        ionName: "selenide",
        possiblePositiveCharges: [4],
        possibleNegativeCharges: [-2],
        charge: -2,
        electronegativity: 2.4,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 78.97,
    },
    Br: {
        elementSymbol: "Br",
        elementName: "bromine",
        ionName: "bromide",
        possiblePositiveCharges: [1, 3, 5],
        possibleNegativeCharges: [-1],
        charge: -1,
        electronegativity: 2.8,
        needsRomanNumerals: false,
        activitySeriesPriority: 2,
        solubilityTable: {
            rubidium: true,
            ammonium: true,
            lithium: true,
            sodium: true,
            potassium: true,
            magnesium: true,
            calcium: true,
            barium: true,
            iron: true,
            copper: true,
            silver: false,
            zinc: true,
            lead: false,
            aluminum: true,
            mercury: false,
        },
        stateOfMatter: "l",
        molarMass: 79.90,
    },
    Kr: {
        elementSymbol: "Kr",
        elementName: "krypton",
        ionName: "krypton",
        possiblePositiveCharges: [2],
        needsRomanNumerals: false,
        stateOfMatter: "g",
        molarMass: 83.80,
    },
    Rb: {
        elementSymbol: "Rb",
        elementName: "rubidium",
        ionName: "rubidium",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: true,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 85.47,
    },
    Sr: {
        elementSymbol: "Sr",
        elementName: "strontium",
        ionName: "strontium",
        possiblePositiveCharges: [2],
        charge: 2,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 87.62,
    },
    Mo: {
        elementSymbol: "Mo",
        elementName: "molybdenum",
        ionName: "molybdenum",
        possiblePositiveCharges: [4, 6],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 95.95,
    },
    Ru: {
        elementSymbol: "Ru",
        elementName: "ruthenium",
        ionName: "ruthenium",
        possiblePositiveCharges: [3, 4, 6, 8],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 101.07,
    },
    Pd: {
        elementSymbol: "Pd",
        elementName: "palladium",
        ionName: "palladium",
        possiblePositiveCharges: [2, 4],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 106.42,
    },
    Ag: {
        elementSymbol: "Ag",
        elementName: "silver",
        ionName: "silver",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        activitySeriesPriority: 780,
        solubilityTable: {
            fluoride: true,
            chloride: false,
            bromide: false,
            iodide: false,
            chlorate: true,
            hydroxide: false,
            sulfite: false,
            sulfate: false,
            carbonate: false,
            nitrite: false,
            nitrate: true,
            phosphate: false,
            acetate: false,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 107.87,
    },
    Cd: {
        elementSymbol: "Cd",
        elementName: "cadmium",
        ionName: "cadmium",
        possiblePositiveCharges: [2],
        charge: 2, 
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 112.41,
    },
    Sn: {
        elementSymbol: "Sn",
        elementName: "tin",
        ionName: "tin",
        possiblePositiveCharges: [2, 4],
        needsRomanNumerals: true,
        activitySeriesPriority: 820,
        stateOfMatter: "s",
        molarMass: 118.71,
    },
    Te: {
        elementSymbol: "Te",
        elementName: "tellurium",
        ionName: "telluride",
        possiblePositiveCharges: [4],
        electronegativity: 2.1,
        needsRomanNumerals: false,
        stateOfMatter: "s",
        molarMass: 127.6,
    },
    I: {
        elementSymbol: "I",
        elementName: "iodine",
        ionName: "iodide",
        possiblePositiveCharges: [5],
        possibleNegativeCharges: [-1],
        charge: -1,
        electronegativity: 2.5,
        needsRomanNumerals: false,
        activitySeriesPriority: 1,
        solubilityTable: {
            rubidium: true,
            ammonium: true,
            lithium: true,
            sodium: true,
            potassium: true,
            magnesium: true,
            calcium: true,
            barium: true,
            iron: true,
            copper: true,
            silver: false,
            zinc: true,
            lead: false,
            aluminum: true,
            mercury: false,
        },
        stateOfMatter: "s",
        molarMass: 126.90,
    },
    Xe: {
        elementSymbol: "Xe",
        elementName: "xenon",
        ionName: "xenon",
        possiblePositiveCharges: [2, 4, 6],
        electronegativity: 0,
        needsRomanNumerals: false,
        stateOfMatter: "g",
        molarMass: 131.29,
    },
    Cs: {
        elementSymbol: "Cs",
        elementName: "cesium",
        ionName: "cesium",
        possiblePositiveCharges: [1],
        charge: 1,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: true,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: true,
            sulfate: true,
            carbonate: true,
            nitrite: true,
            nitrate: true,
            phosphate: true,
            acetate: true,
            chromate: true,
        },
        stateOfMatter: "s",
        molarMass: 132.91,
    },
    Ba: {
        elementSymbol: "Ba",
        elementName: "barium",
        ionName: "barium",
        possiblePositiveCharges: [2],
        charge: 2,
        needsRomanNumerals: false,
        solubilityTable: {
            fluoride: false,
            chloride: true,
            bromide: true,
            iodide: true,
            chlorate: true,
            hydroxide: true,
            sulfite: false,
            sulfate: false,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 137.33,
    },
    W: {
        elementSymbol: "W",
        elementName: "tungsten",
        ionName: "tungsten",
        possiblePositiveCharges: [4, 5, 6],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 183.85,
    },
    Re: {
        elementSymbol: "Re",
        elementName: "rhenium",
        ionName: "rhenium",
        possiblePositiveCharges: [3, 4, 5, 7],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 186.21,
    },
    Os: {
        elementSymbol: "Os",
        elementName: "osmium",
        ionName: "osmium",
        possiblePositiveCharges: [4, 6, 8],
        needsRomanNumerals: true,
        stateOfMatter: "s",
        molarMass: 190.23,
    },
    Pt: {
        elementSymbol: "Pt",
        elementName: "platinum",
        ionName: "platinum",
        possiblePositiveCharges: [2, 4],
        needsRomanNumerals: true,
        activitySeriesPriority: 760,
        stateOfMatter: "s",
        molarMass: 195.08,
    },
    Au: {
        elementSymbol: "Au",
        elementName: "gold",
        ionName: "gold",
        possiblePositiveCharges: [1, 3],
        needsRomanNumerals: true,
        activitySeriesPriority: 0,
        stateOfMatter: "s",
        molarMass: 196.97,
    },
    Hg: {
        elementSymbol: "Hg",
        elementName: "mercury",
        ionName: "mercury",
        possiblePositiveCharges: [2],
        needsRomanNumerals: true,
        activitySeriesPriority: 770,
        solubilityTable: {
            fluoride: false,
            chloride: false,
            bromide: false,
            iodide: false,
            chlorate: false,
            hydroxide: false,
            sulfite: false,
            sulfate: false,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: false,
            chromate: false,
        },
        stateOfMatter: "l",
        molarMass: 200.59,
    },
    Pb: {
        elementSymbol: "Pb",
        elementName: "lead",
        ionName: "lead",
        possiblePositiveCharges: [2, 4],
        needsRomanNumerals: true,
        activitySeriesPriority: 810,
        solubilityTable: {
            fluoride: false,
            chloride: false,
            bromide: false,
            iodide: false,
            chlorate: true,
            hydroxide: false,
            sulfite: false,
            sulfate: false,
            carbonate: false,
            nitrite: true,
            nitrate: true,
            phosphate: false,
            acetate: true,
            chromate: false,
        },
        stateOfMatter: "s",
        molarMass: 207.2,
    },
}