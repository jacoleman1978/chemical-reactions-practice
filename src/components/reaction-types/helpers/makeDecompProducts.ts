import { ionNameToElement } from "../configurations/elements";
import { EquationElement, Element, MakeDecompProductsReturn } from "../configurations/interfaces";
import { Compound } from "../../compounds/configurations/interfaces";

export const makeDecompProducts = (compound: Compound): MakeDecompProductsReturn => {
    const [cationName, anionName] = compound.compoundName.split(" ");

    const cationElement: Element = ionNameToElement[cationName];
    
    const productOne: EquationElement = {
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

    const productTwo: EquationElement = {
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

    return {productOne, productTwo}
};
