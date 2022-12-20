import { isBalanced } from "./isBalanced";
import { updateCompoundCoefficient } from "./updateCompoundCoefficient";
import { updateElementCoefficient } from "./updateElementCoefficient";
import { SRReaction, BalancingTable, EquationElement } from "../configurations/interfaces";
import { IonicCompound } from "../../compounds/configurations/interfaces";

/**
 * Balance the single replacement reaction with one of two general patterns. Metal elements: AB + C --> CB + A. Nonmetal elements: AB + C --> AC + B.
 * @param srEquation "SRReaction" object
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @returns "{type, reactantCompound, reactantElement, productCompound, productElement}: SRReaction"
 */
export const balanceSREquations = (srEquation: SRReaction, isMetal: boolean): SRReaction => {
    let {type, reactantCompound, reactantElement, productCompound, productElement} = srEquation;
    let {balancingTable, tableKeys} = makeSRBalancingTable(srEquation, isMetal);

    while (!isBalanced(balancingTable, tableKeys)) {
        [balancingTable, reactantElement, productCompound] = balanceReactantElement(balancingTable, reactantElement, productCompound);

        [balancingTable, productElement, reactantCompound] = balanceProductElement(balancingTable, productElement, reactantCompound);

        [balancingTable, reactantCompound, productCompound] = balanceCommonIon(balancingTable, reactantCompound, productCompound, isMetal);
    }

    return {type, reactantCompound, reactantElement, productCompound, productElement}
};

/**
 * Makes the "BalancingTable" object to keep track of quantities of elements in a single replacement reaction with one of two general patterns. Metal elements: AB + C --> CB + A. Nonmetal elements: AB + C --> AC + B.
 * @param srEquation "SRReaction" object
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @returns "{balancingTable: BalancingTable, tableKeys: string[]}"
 */
const makeSRBalancingTable = (srEquation: SRReaction, isMetal: boolean): {balancingTable: BalancingTable, tableKeys: string[]} => {
    const {reactantCompound, reactantElement, productCompound, productElement} = srEquation;
    const elementOne: string = reactantElement.compoundFormula;
    const elementTwo: string = productElement.compoundFormula;
    const commonIon: string = (isMetal ? reactantCompound.anion.ionFormula : reactantCompound.cation.ionFormula);

    const tableKeys: string[] = [elementOne, elementTwo, commonIon];

    let balancingTable: BalancingTable = {} as BalancingTable;

    // If "isMetal" is true, "elementOne" is represented by 'C' in the general pattern for metal elements, otherwise 'C' in the general pattern for nonmetal elements
    balancingTable[elementOne] = {
        qtyReactants: reactantElement.subscript,
        qtyProducts: (isMetal ? productCompound.cation.subscript : productCompound.anion.subscript),
    }

    // If "isMetal" is true, "elementTwo" is represented by 'A' in the general pattern for metal elements, otherwise 'B' in the general pattern for nonmetal elements
    balancingTable[elementTwo] = {
        qtyReactants: (isMetal ? reactantCompound.cation.subscript : reactantCompound.anion.subscript),
        qtyProducts: productElement.subscript,
    }

    // If "isMetal" is true, "commonIon" is the anion 'B' in the general pattern for metal elements, otherwise the cation 'A' in the general pattern for nonmetal elements
    balancingTable[commonIon] = {
        qtyReactants: (isMetal ? reactantCompound.anion.subscript : reactantCompound.cation.subscript),
        qtyProducts: (isMetal ? productCompound.anion.subscript : productCompound.cation.subscript),
    }

    return {balancingTable, tableKeys}
}

/**
 * Balance the "reactantElement" in a single replacement reaction
 * @param balancingTable "BalancingTable" object
 * @param reactantElement "EquationElement" object that will be be used as the table key for balancing
 * @param productCompound "IonicCompound" object that contains the ion version of the "EquationElement"
 * @returns [balancingTable, reactantElement, productCompound]: [BalancingTable, EquationElement, IonicCompound] updating the "balancingTable" quantities and coefficients for the "reactantElement" and "productCompound"
 */
const balanceReactantElement = (balancingTable: BalancingTable, reactantElement: EquationElement, productCompound: IonicCompound): [BalancingTable, EquationElement, IonicCompound] => {
    const tableKey: string = reactantElement.compoundFormula;

    while (!isBalanced(balancingTable, [tableKey])) {
        if (balancingTable[tableKey].qtyReactants < balancingTable[tableKey].qtyProducts) {
            [balancingTable, reactantElement] = updateElementCoefficient({...balancingTable}, {...reactantElement}, true);

        } else if (balancingTable[tableKey].qtyProducts < balancingTable[tableKey].qtyReactants) {
            [balancingTable, productCompound] = updateCompoundCoefficient({...balancingTable}, {...productCompound}, false);
        }
    }

    return [balancingTable, reactantElement, productCompound]
}

/**
 * Balance the "productElement" in a single replacement reaction
 * @param balancingTable "BalancingTable" object
 * @param productElement "EquationElement" object that will be be used as the table key for balancing
 * @param reactantCompound "IonicCompound" object that contains the ion version of the "EquationElement"
 * @returns [balancingTable, productElement, reactantCompound]: [BalancingTable, EquationElement, IonicCompound] updating the "balancingTable" quantities and coefficients for the "productElement" and "reactantCompound"
 */
 const balanceProductElement = (balancingTable: BalancingTable, productElement: EquationElement, reactantCompound: IonicCompound): [BalancingTable, EquationElement, IonicCompound] => {
    const tableKey: string = productElement.compoundFormula;

    while (!isBalanced(balancingTable, [tableKey])) {
        if (balancingTable[tableKey].qtyReactants < balancingTable[tableKey].qtyProducts) {
            [balancingTable, reactantCompound] = updateCompoundCoefficient({...balancingTable}, {...reactantCompound}, true);
            

        } else if (balancingTable[tableKey].qtyProducts < balancingTable[tableKey].qtyReactants) {
            [balancingTable, productElement] = updateElementCoefficient({...balancingTable}, {...productElement}, false);
        }
    }

    return [balancingTable, productElement, reactantCompound]
}

/**
 * Balance the "commonIon" to both compounds in the single replacement reaction
 * @param balancingTable "BalancingTable" object
 * @param reactantCompound "IonicCompound" object that contains the common ion to balance
 * @param productCompound "IonicCompound" object that contains the common ion to balance
 * @param isMetal boolean: If true, the anion of both compounds will be balanced, otherwise the cation of both compounds will be balanced
 * @returns [balancingTable, reactantCompound, productCompound]: [BalancingTable, IonicCompound, IonicCompound] updating the "balancingTable" quantities and coefficients for the "reactantCompound" and "productCompound"
 */
const balanceCommonIon = (balancingTable: BalancingTable, reactantCompound: IonicCompound, productCompound: IonicCompound, isMetal: boolean): [BalancingTable, IonicCompound, IonicCompound] => {
    const tableKey: string = (isMetal ? reactantCompound.anion.ionFormula : reactantCompound.cation.ionFormula);

    while (!isBalanced(balancingTable, [tableKey])) {
        if (balancingTable[tableKey].qtyReactants < balancingTable[tableKey].qtyProducts) {
            [balancingTable, reactantCompound] = updateCompoundCoefficient({...balancingTable}, {...reactantCompound}, true);
            

        } else if (balancingTable[tableKey].qtyProducts < balancingTable[tableKey].qtyReactants) {
            [balancingTable, productCompound] = updateCompoundCoefficient({...balancingTable}, {...productCompound}, false);
        }
    }

    return [balancingTable, reactantCompound, productCompound]
}