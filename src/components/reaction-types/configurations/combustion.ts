import { CombustionEquationProduct, CombustionEquationOxygen } from "./interfaces";

export const combustionCompounds: {[member: string]: CombustionEquationProduct}  = {
    "dihydrogen monoxide": {
        compoundName: "dihydrogen monoxide",
        compoundFormula: "H/2/O",
        coefficient: 1,
        balancingData: {
            currentCQty: 0,
            currentHQty: 2,
            currentOQty: 1,
        },
    },
    "carbon dioxide": {
        compoundName: "carbon dioxide",
        compoundFormula: "CO/2/",
        coefficient: 1,
        balancingData: {
            currentCQty: 1,
            currentHQty: 0,
            currentOQty: 2,
        },
    },
}

export const oxygenGas: CombustionEquationOxygen = {
    elementName: "oxygen",
    elementSymbol: "O",
    isDiatomic: true,
    state: "g",
    coefficient: 1,
    balancingData: {
        currentCQty: 0,
        currentHQty: 0,
        currentOQty: 2,
    },
}