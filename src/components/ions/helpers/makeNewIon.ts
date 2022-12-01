import { elementData } from "../configurations/elementData";
import { Element, Ion } from "../configurations/interfaces";

/**
 * Makes an "Ion" object for the passed in element symbol
 * @param elementKey Element symbol as a string
 * @returns An "Ion" object
 */
export const makeNewIon = (elementKey: string): Ion => {
    // Retrieve the "Element" object for the elementKey
    const element: Element = {...elementData[elementKey]};

    // Generates the "Ion" object for the element
    let ion: Ion = {
        ionName: element.ionName,
        ionFormula: element.elementSymbol,
        ionParts: [element.elementSymbol],
        charge: element.charge || 1,
        isPolyatomic: false,
        molarMass: element.molarMass,
        subscript: 1,
    };

    // If the "Element" object has data in the "activitySeriesPriority" property, add it to the "Ion" object
    if (element.hasOwnProperty("activitySeriesPriority")) {
        ion["activitySeriesPriority"] = element.activitySeriesPriority;
    }

    // If the "Element" object has data in the "solubilityTable" property, add it to the "Ion" object
    if (element.hasOwnProperty("solubilityTable")) {
        ion["solubilityTable"] = element.solubilityTable;
    }
    
    return ion
};
