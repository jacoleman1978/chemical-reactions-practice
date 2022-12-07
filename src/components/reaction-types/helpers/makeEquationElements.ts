import { diatomicElements, elementData } from "../../ions/configurations/elementData";
import { EquationElement } from "../configurations/interfaces";
import { IonicCompound } from "../../compounds/configurations/interfaces";
import { Element} from "../../ions/configurations/interfaces";

interface EquationElements {
    elementOne: EquationElement,
    elementTwo: EquationElement,
}

/**
 * Make "EquationElement" objects for each ion in an ionic compound
 * @param compound "IonicCompound" object
 * @returns "{elementOne, elementTwo}" both of which are "EquationElement" objects
 */
export const makeEquationElements = (compound: IonicCompound): EquationElements => {
    const cation: Element = elementData[compound.cation.ionFormula];
    const elementOne: EquationElement = makeEquationElement(cation);

    const anion: Element = elementData[compound.anion.ionFormula];
    const elementTwo: EquationElement = makeEquationElement(anion);

    return {elementOne, elementTwo}
};

/**
 * Make an "EquationElement" object from an "Element" object
 * @param element "Element" object
 * @returns "EquationElement" object
 */
export const makeEquationElement = (element: Element): EquationElement => {
    const elementOne: EquationElement = {
        compoundName: element.elementName,
        compoundFormula: element.elementSymbol,
        formulaParts: (diatomicElements.includes(element.elementSymbol) ? [element.elementSymbol, 2]: [element.elementSymbol]),
        molarMass: element.molarMass,
        state: element.stateOfMatter,
        coefficient: 1,
        subscript: (diatomicElements.includes(element.elementSymbol) ? 2 : 1 ),
    }

    return elementOne
}
