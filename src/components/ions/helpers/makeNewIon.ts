import { getRandomListMember } from "../../common/helpers/getRandomListMember";
import { transitionMetalCations, elementData } from "../configurations/elementData";
import { integerToRomanNumeral } from "../configurations/integerToRomanNumeral";
import { Element, Ion } from "../configurations/interfaces";
import { PossiblePositiveCharges, PossibleNegativeCharges } from "../configurations/types";

/**
 * Makes an "Ion" object for the passed in element symbol
 * @param elementKey Element symbol as a string
 * @returns An "Ion" object
 */
export const makeNewIon = (elementKey: string): Ion => {
    // Retrieve the "Element" object for the elementKey
    const element: Element = {...elementData[elementKey]};
    let charge: (PossiblePositiveCharges | PossibleNegativeCharges);
    let ionName: string = element.ionName;

    // Set charge to charge property if it is populated
    if (element.charge !== undefined) {
        charge = element.charge;

    // Or if it is a transitionmetal, chose a random positive charge from its possiblePositiveCharges property
    } else if (transitionMetalCations.includes(elementKey) && element.possiblePositiveCharges !== undefined) {
        charge = getRandomListMember(element.possiblePositiveCharges);
        ionName += integerToRomanNumeral[charge.toString()];

    // Otherwise set charge to 1
    } else {
        charge = 1;
    }

    // Generates the "Ion" object for the element
    let ion: Ion = {
        ionName: ionName,
        ionFormula: element.elementSymbol,
        ionParts: [element.elementSymbol],
        charge: charge,
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
