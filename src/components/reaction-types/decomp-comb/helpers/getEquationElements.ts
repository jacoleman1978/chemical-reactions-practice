import { ionNameToElement } from "../../configurations/elements";
import { EquationElement, Element } from "../../configurations/interfaces";
import { Compound } from "../../../compounds/configurations/interfaces";

/**
 * gets EquationElement objects from a Compound object
 * @param compound Compound object
 * @returns [elementOne, elementTwo] as EquationElement[]
 */
export const getEquationElements = (compound: Compound): EquationElement[] => {
    const [cationName, anionName] = compound.compoundName.split(" ");

    const cationElement: Element = ionNameToElement[cationName];

    const elementOne: EquationElement = {
        element: cationElement,
        coefficient: 1,
        balancingData: {
            initialCationQty: 1,
            initialAnionQty: 0,
            totalCationQty: 1,
            totalAnionQty: 0,
        },
        formulaParts: {
            elementSymbol: cationElement.elementSymbol,
            subscript: (cationElement.isDiatomic ? "2" : ""),
        }
    }

    const anionElement: Element = ionNameToElement[anionName];

    const elementTwo: EquationElement = {
        element: anionElement,
        coefficient: 1,
        balancingData: {
            initialCationQty: 0,
            initialAnionQty: (anionElement.isDiatomic ? 2 : 1),
            totalCationQty: 0,
            totalAnionQty: (anionElement.isDiatomic ? 2 : 1),
        },
        formulaParts: {
            elementSymbol: anionElement.elementSymbol,
            subscript: (anionElement.isDiatomic ? "2" : ""),
        }
    }

    return [elementOne, elementTwo]
};