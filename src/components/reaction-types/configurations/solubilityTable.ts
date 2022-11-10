import { SolubilityCations } from "./interfaces"

export const solubilityCationNames: string[] = [
    "ammonium", "lithium", "sodium", "potassium", "magnesium", "calcium", "barium", "iron", "copper", "silver", "zinc", "lead", "aluminum", "mercury",
];

export const solubilityAnionNames: string[] = [
    "fluoride", "chloride", "bromide", "iodide", "chlorate", "hydroxide", "sulfite", "sulfate", "carbonate", "nitrite", "nitrate", "phosphate", "acetate", "chromate",
]

export const solubilityTable: SolubilityCations = {
    ammonium: {
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
    lithium: {
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
    sodium: {
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
    potassium: {
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
    magnesium: {
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
    calcium: {
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
    barium: {
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
    iron: {
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
    copper: {
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
    silver: {
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
    zinc: {
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
    lead: {
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
    aluminum: {
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
    mercury: {
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
}