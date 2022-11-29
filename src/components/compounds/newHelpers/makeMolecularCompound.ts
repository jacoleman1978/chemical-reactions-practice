import { getRandomListMember } from "../../common/helpers/getRandomListMember";
import { findCompoundSubscripts } from "./findCompoundSubscripts";
import { diatomicElements, molecularByOxState, molecularByElectronegativity, elementData } from "../../ions/configurations/elementData";
import { MolecularPart, MolecularCompound } from "../newConfigurations/interfaces";
import { Element, MolecularElement } from "../../ions/configurations/interfaces";
import { PossiblePositiveCharges, PossibleNegativeCharges, MolecularOxStates, GreekPrefixes } from "../../ions/configurations/types";
import { FormulaParts } from "../../common/configurations/types";

/**
 * Makes a random "MolecularCompound" object
 * @returns a randomly generated "MolecularCompound" object
 */
export const makeRandomMolecularCompound = (): MolecularCompound => {
    // Randomly select two "MolecularElement" objects
    const {firstMolecularElement, secondMolecularElement} = makeMolecularElements();

    // Generate a "MolecularCompound" object from two "MolecularElement" objects
    const molecularCompound = makeMolecularCompound(firstMolecularElement, secondMolecularElement);

    return molecularCompound
}

/**
 * Makes a "MolecularCompound" object using the two passed in "MolecularElement" objects
 * @param firstMolecularElement "MolecularElement" object used as the first element in the compound formula
 * @param secondMolecularElement "MolecularElement" object used as the second element in the compound formula
 * @param thirdMolecularElement (optional) "MolecularElement" object used as the third element in the compound formula
 * @returns a "MolecularCompound" object with the two designated elements
 */
export const makeMolecularCompound = (firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement, thirdMolecularElement?: MolecularElement): MolecularCompound => {
    let molecularCompound: MolecularCompound;

    if (thirdMolecularElement === undefined) {
        molecularCompound = {
            compoundName: makeMolecularName(firstMolecularElement, secondMolecularElement),
            compoundFormula: makeFormulaString(firstMolecularElement, secondMolecularElement),
            formulaParts: makeMolecularFormulaParts(firstMolecularElement, secondMolecularElement),
            firstElement: firstMolecularElement,
            secondElement: secondMolecularElement,
            molarMass: firstMolecularElement.molarMass + secondMolecularElement.molarMass,
        }
    } else {
        molecularCompound = {
            compoundName: makeMolecularName(firstMolecularElement, secondMolecularElement, thirdMolecularElement),
            compoundFormula: makeFormulaString(firstMolecularElement, secondMolecularElement, thirdMolecularElement),
            formulaParts: makeMolecularFormulaParts(firstMolecularElement, secondMolecularElement, thirdMolecularElement),
            firstElement: firstMolecularElement,
            secondElement: secondMolecularElement,
            thirdElement: thirdMolecularElement,
            molarMass: firstMolecularElement.molarMass + secondMolecularElement.molarMass + thirdMolecularElement.molarMass,
        }
    }

    return molecularCompound
};

/**
 * Randomly select the first element of the molecular compound, using a weighted list of elements sorted by positive oxidation states of nonmetals
 * @returns "MolecularPart" object for the first element of the molecular compound
 */
const getRandomFirstMolecularPart = (): MolecularPart => {
    const randomNumber: number = Math.random();

    if (randomNumber < 0.1) {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusOne), oxState: 1}

    } else if (randomNumber < 0.2) {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusTwo), oxState: 2}

    } else if (randomNumber < 0.4) {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusThree), oxState: 3}

    } else if (randomNumber < 0.7) {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusFour), oxState: 4}

    } else if (randomNumber < 0.9) {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusFive), oxState: 5}

    } else {
        return {elementSymbol: getRandomListMember(molecularByOxState.plusSix), oxState: 6}
    }
}

/**
 * Randomly select the second element of the molecular compound, using the "molecularByElectronegativity" dictionary.
 * @param firstPart The "MolecularPart" object of the "firstMoleclarPart"
 * @returns "MolecularPart" object for the second element of the molecular compound, which must be different than the firstPart
 */
const getRandomSecondMolecularPart = (firstPart: MolecularPart): MolecularPart => {
    let elementSymbol: string = getRandomListMember(molecularByElectronegativity[firstPart.elementSymbol]);
    let firstPartOxState = firstPart.oxState;
    let oxState: number = -1;
    let element: Element = elementData[elementSymbol];

    if (element.possibleNegativeCharges !== undefined) {
        let possibleOxStates: PossibleNegativeCharges[] = element.possibleNegativeCharges;

        if (possibleOxStates.length === 1) {
            oxState = possibleOxStates[0];

        } else {
            oxState = getRandomListMember(possibleOxStates);

            while (-oxState > firstPartOxState) {
                oxState = getRandomListMember(possibleOxStates);
            }
        }
    }

    return {elementSymbol, oxState}
}

// Object used to convert from string versions of subscripts to their Greek prefixes
const numberToPrefix: {[member: string]: GreekPrefixes} = {
    "1": "mono",
    "2": "di",
    "3": "tri",
    "4": "tetra",
    "5": "penta",
    "6": "hexa",
    "7": "hepta",
    "8": "octa",
    "9": "nona",
    "10": "deca"
}

/**
 * Makes the "MolecularElement" object for the passed in "MolecularPart" object
 * @param elementPart "MolecularPart" object
 * @param subscript number
 * @param displayMonoPrefix boolean: set to false for the first "MolecularPart" object, and set to true for the second "MolecularPart" object
 * @returns "MolecularElement" object
 */
const makeNewMolecularElement = (elementPart: MolecularPart, subscript: number, displayMonoPrefix: boolean): MolecularElement => {
    // Retrieve the "Element" object for the passed in "elementPart" from the "elementData" dictionary
    let element: Element = {...elementData[elementPart.elementSymbol]};
    let greekPrefix: GreekPrefixes;

    // Use Greek prefixes for all subscripts, except when the first element has a 1 subscript
    if (displayMonoPrefix || subscript > 1) {
        greekPrefix = numberToPrefix[subscript.toString()];

    } else {
        greekPrefix = "";
    }

    let molecularElement: MolecularElement = {
        elementSymbol: element.elementSymbol,
        elementName: element.elementName,
        anionName: element.ionName,
        isDiatomic: (diatomicElements.includes(element.elementSymbol) ? true : false),
        oxState: elementPart.oxState as MolecularOxStates,
        molarMass: element.molarMass,
        subscript: subscript,
        greekPrefix: greekPrefix,
    }

    return molecularElement
}

/**
 * Make "MolecularElement" objects for both randomly generated elements for the molecular compound
 * @returns "{firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement}"
 */
const makeMolecularElements = (): {firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement} => {
        // Get two random nonmetal elements 
        const firstElementPart: MolecularPart = getRandomFirstMolecularPart();
        const secondElementPart: MolecularPart = getRandomSecondMolecularPart(firstElementPart);
    
        // Determine the subscripts for the compound
        let { first, second } = findCompoundSubscripts(firstElementPart.oxState as PossiblePositiveCharges, secondElementPart.oxState as PossibleNegativeCharges);
    
        // If the first subscript is greater than 1 and the second subscript is less than 6, there is a 40 % chance of the subscripts doubling
        if (first > 1 && second < 6) {
            const randomNumber: number = Math.random();
    
            if (randomNumber < 0.4) {
                first *= 2;
                second *= 2;
            }
        }
    
        let firstMolecularElement: MolecularElement = makeNewMolecularElement(firstElementPart, first, false);
        let secondMolecularElement: MolecularElement = makeNewMolecularElement(secondElementPart, second, true);

        return {firstMolecularElement, secondMolecularElement}
}

/**
 * Makes the name of the molecular compound
 * @param firstMolecularElement "MolecularElement" object
 * @param secondMolecularElement "MolecularElement" object
 * @param thirdMolecularElement (optional) "MolecularElement" object
 * @returns the name of the molecular compound as a string
 */
const makeMolecularName = (firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement, thirdMolecularElement?: MolecularElement): string => {
    let compoundName: string = ""; 
    
    let firstGreek: string = firstMolecularElement.greekPrefix;
    const firstGreekLength: number = firstGreek.length;

    // For all Greek prefixes, except ""
    if (firstGreekLength > 0) {
        const lastCharFirstGreek = firstGreek.charAt(firstGreekLength - 1);
        const firstCharFirstName = firstMolecularElement.elementName.charAt(0);

        // Check for the first prefix ending in "a" or "o" with the "elementName" starting with "o", removing the last letter of the prefix if true
        if (["a", "o"].includes(lastCharFirstGreek) && ["o"].includes(firstCharFirstName)) {
            compoundName += `${firstGreek.slice(0, -1)}`;

        } else {
            compoundName += firstGreek;
        }
    }

    compoundName += firstMolecularElement.elementName;

    let secondGreek: string = secondMolecularElement.greekPrefix;
    const secondGreekLength: number = secondGreek.length;

    const lastCharSecondGreek = secondGreek.charAt(secondGreekLength - 1);
    const firstCharSecondName = secondMolecularElement.anionName.charAt(0);

    // Check for the prefix ending in "a" or "o" with the "anionName" starting with "o", removing the last letter of the prefix if true
    if (["a", "o"].includes(lastCharSecondGreek) && ["o"].includes(firstCharSecondName)) {
        compoundName += ` ${secondGreek.slice(0, -1)}`;

    } else {
        compoundName += ` ${secondGreek}`;
    }

    compoundName += secondMolecularElement.anionName;

    // If the "thirdMolecularElement" is not undefined
    if (thirdMolecularElement !== undefined) {
        compoundName = "Organic naming rules are beyond the scope of this app";
    }

    return compoundName
}

/**
 * Make the formatted formula for a molecular compound surrounding subscripts that are greater than 1 with "/", and omitting subscripts of 1
 * @param firstMolecularElement "MolecularElement" object
 * @param secondMolecularElement "MolecularElement" object
 * @param thirdMolecularElement (optional) "MolecularElement" object
 * @returns the formatted formula for the molecular compound as a string
 */
const makeFormulaString = (firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement, thirdMolecularElement?: MolecularElement): string => {
    let formulaString: string = firstMolecularElement.elementSymbol;

    if (firstMolecularElement.subscript > 1) {
        formulaString += `/${firstMolecularElement.subscript}/`;
    }

    formulaString += secondMolecularElement.elementSymbol;

    if (secondMolecularElement.subscript > 1) {
        formulaString += `/${secondMolecularElement.subscript}/`
    }

    if (thirdMolecularElement !== undefined) {
        formulaString += thirdMolecularElement.elementSymbol;

        if (thirdMolecularElement.subscript > 1) {
            formulaString += `/${thirdMolecularElement.subscript}/`
        }
    }

    return formulaString
}

/**
 * Makes the "FormulaParts" object for the molecular compound
 * @param firstMolecularElement "MolecularElement" object
 * @param secondMolecularElement "MolecularElement" object
 * @param thirdMolecularElement (optional) "MolecularElement" object
 * @returns "FormulaParts" object for the molecular compound
 */
const makeMolecularFormulaParts = (firstMolecularElement: MolecularElement, secondMolecularElement: MolecularElement, thirdMolecularElement?: MolecularElement): FormulaParts => {
    let formulaParts: FormulaParts = [
        firstMolecularElement.elementSymbol,
        firstMolecularElement.subscript,
        secondMolecularElement.elementSymbol,
        secondMolecularElement.subscript,
    ];

    if (thirdMolecularElement !== undefined) {
        formulaParts = [
            ...formulaParts, 
            thirdMolecularElement.elementSymbol,
            thirdMolecularElement.subscript,
        ];
    }

    return formulaParts
}