import { getRandomListMember } from "../../common/helpers/getRandomListMember";
import { makeNewIon } from "./makeNewIon";
import { mainGroupCations, transitionMetalsByCharge, elementData } from "../configurations/elementData";
import { integerToRomanNumeral } from "../configurations/integerToRomanNumeral";
import { polyatomicCations, polyatomicIonData } from "../configurations/polyatomicIonData";
import { Element, Ion } from "../configurations/interfaces";
import { PossiblePositiveCharges } from "../configurations/types";
import { CompoundType } from "../../common/configurations/types";

/**
 * Generates a random cation as an "Ion" object according to the "CompoundType" type literal
 * @param compoundType "CompoundType" type literal
 * @returns A random cation as an "Ion" object
 */
export const getRandomCation = (compoundType: CompoundType): Ion => {
    // Since there is only one polyatomic cation, there is an 80% chance of changing the "compoundType" for the cation to "ionic-main"
    if (compoundType === "ionic-polyatomic") {
        const randomNumber = Math.random();

        if (randomNumber < 0.8) {
            compoundType = "ionic-main";
        }
    }

    // Use main group cations for "ionic-main"
    if (compoundType === "ionic-main") {
        const elementSymbol: string = getRandomListMember([...mainGroupCations]);

        return makeNewIon(elementSymbol)

    // Get a random charge and transition metal for "ionic-transition"
    } else if (compoundType === "ionic-transition") {
        return getRandomTMCation()

    // Use ammonium for "ionic-polyatomic"
    } else if (compoundType === "ionic-polyatomic") {
        return {...polyatomicIonData[polyatomicCations[0]]}

    // Use hydrogen for "acids"
    } else if (compoundType === "acids") {
        return makeNewIon("H")
    } 

    return {} as Ion
};

/**
 * Use a weighted probability to select a charge from 1 to 8, selecting a transition metal with that charge
 * @returns A transition metal cation as an "Ion" object
 */
const getRandomTMCation = (): Ion => {
    // Randomly determine the charge and transition metal
    const randomNumber: number = Math.random();
    let metal: string;
    let charge: PossiblePositiveCharges;

    if (randomNumber < 0.02) {
        charge = 1;
        metal = getRandomListMember(transitionMetalsByCharge.plusOne)

    } else if (randomNumber < 0.27) {
        charge = 2;
        metal =  getRandomListMember(transitionMetalsByCharge.plusTwo)

    } else if (randomNumber < 0.47) {
        charge = 3;
        metal =  getRandomListMember(transitionMetalsByCharge.plusThree)

    } else if (randomNumber < 0.67) {
        charge = 4;
        metal = getRandomListMember(transitionMetalsByCharge.plusFour)

    } else if (randomNumber < 0.77) {
        charge = 5;
        metal = getRandomListMember(transitionMetalsByCharge.plusFive)

    } else if (randomNumber < 0.87) {
        charge = 6;
        metal = getRandomListMember(transitionMetalsByCharge.plusSix)

    } else if (randomNumber < 0.92) {
        charge = 7;
        metal = getRandomListMember(transitionMetalsByCharge.plusSeven)

    } else {
        charge = 8;
        metal = getRandomListMember(transitionMetalsByCharge.plusEight)
    }

    // Get the "Element" object for the transition metal from the "elementData" dictionary
    let element: Element = {...elementData[metal]};

    // Create the Ion object for the transition metal cation
    let cation: Ion = {
        ionName: `${element.ionName}${integerToRomanNumeral[`${charge}`]}`,
        ionFormula: element.elementSymbol,
        ionParts: [element.elementSymbol],
        charge: charge,
        isPolyatomic: false,
        molarMass: element.molarMass,
        subscript: 1,
    };
    
    // If the "Element" object has data in the "activitySeriesPriority" property, add it to the "Ion" object
    if (element.hasOwnProperty("activitySeriesPriority")) {
        cation["activitySeriesPriority"] = element.activitySeriesPriority;
    }

    // If the "Element" object has data in the "solubilityTable" property, add it to the "Ion" object
    if (element.hasOwnProperty("solubilityTable")) {
        cation["solubilityTable"] = element.solubilityTable;
    }

    return cation
};