import { isBalanced } from "./isBalanced";
import { BalancingTable, EquationElement } from "../configurations/interfaces";
import { MolecularCompound } from "../../compounds/configurations/interfaces";

/**
 * Uses the "MolecularCompound" and "EquationElement" objects of the reactants and products of a "CombustionReaction" object to balance the equation
 * @param hydrocarbon "MolecularCompound" object composed of carbons and hydrogens. It may have one or more oxygens
 * @param o2 "EquationElement" object for oxygen gas
 * @param h2o "MolecularCompound" object for water vapor
 * @param co2 "MolecularCompound" object for carbon dioxide
 * @returns [hydrocarbon, o2, h2o, co2]: [MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] with updated coefficients
 */
export const balanceCombustionEquation = (hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    let balancingTable: BalancingTable = makeCombustionBalancingTable(hydrocarbon);

    [balancingTable, hydrocarbon, co2] = balanceCarbon({...balancingTable}, {...hydrocarbon}, {...co2});

    [balancingTable, hydrocarbon, h2o] = balanceHydrogen({...balancingTable}, {...hydrocarbon}, {...h2o});
    
    [balancingTable, hydrocarbon, o2, h2o, co2] = balanceOxygen({...balancingTable}, {...hydrocarbon}, {...o2}, {...h2o}, {...co2});

    return [hydrocarbon, o2, h2o, co2]
};

/**
 * Makes the "BalancingTable" object to keep track of data to use while balancing combustion reactions
 * @param hydrocarbon "MolecularCompound" composed of carbons, hydrogens. It may have one or more oxygens.
 * @returns "BalancingTable" object
 */
export const makeCombustionBalancingTable = (hydrocarbon: MolecularCompound): BalancingTable => {
    let balancingTable: BalancingTable = {
        "C": {
            // Carbons from the hydrocarbon
            qtyReactants: hydrocarbon.firstElement.subscript,
            // Carbons in carbon dioxide
            qtyProducts: 1,
        },
        "H": {
            // Hydrogens in the hydrocarbon
            qtyReactants: hydrocarbon.secondElement.subscript,
            // Hydrogens in water vapor
            qtyProducts: 2,
        },
        "O": {
            // Oxygens in oxygen gas
            qtyReactants: 2,
            // Oxygens in water vapor and carbon dioxide
            qtyProducts: 3,
        }
    }

    // If the hydrocabon contains oxygens, add them to the reactants side
    if (hydrocarbon.thirdElement !== undefined) {
        balancingTable["O"].qtyReactants += hydrocarbon.thirdElement.subscript;
    }

    return balancingTable
};

/**
 * Balance the carbon in a combustion reaction
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularCompound" object of hydrocarbon for a combustion reaction
 * @param co2 "MolecularCompound" object of carbon dioxide for a combustion reaction
 * @returns [balancingTable, hydrocarbon, co2]: [BalancingTable, MolecularCompound, MolecularCompound] updating the balancingTable quantities and the coefficients for the hydrocarbon and carbon dioxide
 */
const balanceCarbon = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["C"])) {
        // If there are fewer carbons in reactants than products, increment the hydrocarbon coefficient by 1
        if (balancingTable["C"].qtyReactants < balancingTable["C"].qtyProducts) {
            [balancingTable, hydrocarbon] = updateHydrocarbonCoefficient({...balancingTable}, {...hydrocarbon});

        // If there are fewer carbons in the products than reactants, increment the carbon dioxide coefficient by 1
        } else if (balancingTable["C"].qtyProducts < balancingTable["C"].qtyReactants) {
            co2.coefficient += 1;

            balancingTable["C"].qtyProducts += 1;
            balancingTable["O"].qtyProducts += 2;
        }
    }

    return [balancingTable, hydrocarbon, co2]
};

/**
 * Balance the hydrogen in a combustion reaction
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularComound" object of hydrocarbon for a combustion reaction
 * @param h2o "MolecularCompound" object of water vapor for a combustion reaction
 * @returns [balancingTable, hydrocarbon, h2o]: [BalancingTable, MolecularCompound, MolecularCompound] updating the balancingTable quantities and the coefficients for the hydrocarbon and water vapor
 */
const balanceHydrogen = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, h2o: MolecularCompound): [BalancingTable, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["H"])) {
        // If there are fewer hydrogens in reactants than products, increment the hydrocarbon coefficient by 1
        if (balancingTable["H"].qtyReactants < balancingTable["H"].qtyProducts) {
            [balancingTable, hydrocarbon] = updateHydrocarbonCoefficient({...balancingTable}, {...hydrocarbon});

        // If there are fewer hydrogens in products than reactants, increment the water vapor coefficient by 1
        } else if (balancingTable["H"].qtyProducts < balancingTable["H"].qtyReactants) {
            h2o.coefficient += 1;

            balancingTable["H"].qtyProducts += 2;
            balancingTable["O"].qtyProducts += 1;
        }
    }

    return [balancingTable, hydrocarbon, h2o]
};

/**
 * Balance the oxygen in a combustion reaction
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularComound" object of hydrocarbon for a combustion reaction
 * @param o2 "EquationElement" object of oxygen gas for a combustion reaction
 * @param h2o "MolecularCompound" object of water vapor for a combustion reaction
 * @param co2 "MolecularCompound" object of carbon dioxide for a combustion reaction
 * @returns [balancingTable, hydrocarbon, o2, h2o, co2]: [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] updating the balancingTable quantities and the coefficients for the hydrocarbon, oxygen gas, water vapor and carbon dioxide
 */
const balanceOxygen = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["O"])) {
        let oAsReactant: number = balancingTable["O"].qtyReactants;
        let oAsProduct: number = balancingTable["O"].qtyProducts;

        let areReactantsEven: boolean = oAsReactant % 2 === 0;
        let areProductsEven: boolean = oAsProduct % 2 === 0;

        // If the number of oxygens on one side of the equation is odd and the other even, double all coefficients
        if ((areReactantsEven && !areProductsEven) || (!areReactantsEven && areProductsEven)) {
            [balancingTable, hydrocarbon, o2, h2o, co2] = doubleCoefficients(balancingTable, hydrocarbon, o2, h2o, co2);

        // If there are fewer oxygens in reactants than products, increment the oxygen gas coefficient by 1
        } else if (oAsReactant < oAsProduct) {
            o2.coefficient += 1;

            balancingTable["O"].qtyReactants += 2;

        // If there are fewer oxygens in products than reactants, increment the water vapor and carbon dioxide coefficients by 1
        } else if (oAsProduct < oAsReactant) {
            h2o.coefficient += 1;
            co2.coefficient += 1;

            balancingTable["C"].qtyProducts += 1;
            balancingTable["H"].qtyProducts += 2;
            balancingTable["O"].qtyProducts += 3;
        }
    }

    return [balancingTable, hydrocarbon, o2, h2o, co2]
};

/**
 * Increments the hydrocarbon coefficient by 1, updating the balancingTable quantities for all elements in the hydrocarbon
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularComound" object of hydrocarbon for a combustion reaction
 * @returns [balancingTable, hydrocarbon]: [BalancingTable, MolecularCompound], updating the balancingTable and incrementing the hydrocarbon coefficient by 1
 */
const updateHydrocarbonCoefficient = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound): [BalancingTable, MolecularCompound] => {
    hydrocarbon.coefficient += 1;

    balancingTable["C"].qtyReactants += hydrocarbon.firstElement.subscript;
    balancingTable["H"].qtyReactants += hydrocarbon.secondElement.subscript;

    // If the hydrocarbon contains oxygens, update them in the balancingTable as well
    if (hydrocarbon.thirdElement !== undefined) {
        balancingTable["O"].qtyReactants += hydrocarbon.thirdElement.subscript;
    }

    return [balancingTable, hydrocarbon]
}

/**
 * Double all of the coefficients in a combustion reaction, updating the quantities in the balancingTable
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularComound" object of hydrocarbon for a combustion reaction
 * @param o2 "EquationElement" object of oxygen gas for a combustion reaction
 * @param h2o "MolecularCompound" object of water vapor for a combustion reaction
 * @param co2 "MolecularCompound" object of carbon dioxide for a combustion reaction
 * @returns [balancingTable, hydrocarbon, o2, h2o, co2]: [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] updating the balancingTable quantities and the coefficients for the hydrocarbon, oxygen gas, water vapor and carbon dioxide
 */
const doubleCoefficients = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    [balancingTable, hydrocarbon] = doubleHydrocarbonCoefficients({...balancingTable}, {...hydrocarbon});

    [balancingTable, o2] = doubleO2Coefficient({...balancingTable}, {...o2});

    [balancingTable, h2o] = doubleH2OCoefficient({...balancingTable}, {...h2o});

    [balancingTable, co2] = doubleCO2Coefficient({...balancingTable}, {...co2});

    return [balancingTable, hydrocarbon, o2, h2o, co2]
}

/**
 * Double the coefficient for carbon dioxide in a combustion reaction, updating quantities in the balancing table
 * @param balancingTable "BalancingTable" object
 * @param co2 "MolecularCompound" object of carbon dioxide for a combustion reaction
 * @returns [balancingTable, co2]: [BalancingTable, MolecularCompound] updating the balancingTable quantities and the coefficient for carbon dioxide
 */
const doubleCO2Coefficient = (balancingTable: BalancingTable, co2: MolecularCompound): [BalancingTable, MolecularCompound] => {
    const coefficient: number = co2.coefficient;
    co2.coefficient *= 2;

    balancingTable["C"].qtyProducts += coefficient;
    balancingTable["O"].qtyProducts += 2 * coefficient;

    return [balancingTable, co2]
}

/**
 * Double the coefficient for water vapor in a combustion reaction, updating quantities in the balancing table
 * @param balancingTable "BalancingTable" object
 * @param h2o "MolecularCompound" object of water vapor for a combustion reaction
 * @returns [balancingTable, h2o]: [BalancingTable, MolecularCompound] updating the balancingTable quantities and the coefficient for water vapor
 */
const doubleH2OCoefficient = (balancingTable: BalancingTable, h2o: MolecularCompound): [BalancingTable, MolecularCompound] => {
    const coefficient: number = h2o.coefficient;
    h2o.coefficient *= 2;

    balancingTable["H"].qtyProducts += 2 * coefficient;
    balancingTable["O"].qtyProducts += coefficient;

    return [balancingTable, h2o]
}

/**
 * Double the coefficient for hydrocarbon in a combustion reaction, updating quantities in the balancing table
 * @param balancingTable "BalancingTable" object
 * @param hydrocarbon "MolecularComound" object of hydrocarbon for a combustion reaction
 * @returns [balancingTable, hydrocarbon]: [BalancingTable, MolecularCompound] updating the balancingTable quantities and the coefficient for hydrocarbon
 */
const doubleHydrocarbonCoefficients = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound): [BalancingTable, MolecularCompound] => {
    const coefficient: number = hydrocarbon.coefficient;
    hydrocarbon.coefficient *= 2;

    balancingTable["C"].qtyReactants += hydrocarbon.firstElement.subscript * coefficient;
    balancingTable["H"].qtyReactants += hydrocarbon.secondElement.subscript * coefficient;

    if (hydrocarbon.thirdElement !== undefined) {
        balancingTable["O"].qtyReactants += hydrocarbon.thirdElement.subscript * coefficient;
    }

    return [balancingTable, hydrocarbon]
}

/**
 * Double the coefficient for oxygen gas in a combustion reaction, updating quantities in the balancing table
 * @param balancingTable "BalancingTable" object
 * @param o2 "MolecularComound" object of oxygen gas for a combustion reaction
 * @returns [balancingTable, o2]: [BalancingTable, EquationElement] updating the balancingTable quantities and the coefficinet for oxygen gas
 */
const doubleO2Coefficient = (balancingTable: BalancingTable, o2: EquationElement): [BalancingTable, EquationElement] => {
    const coefficient: number = o2.coefficient;
    o2.coefficient *= 2;

    balancingTable["O"].qtyReactants += 2 * coefficient;

    return [balancingTable, o2]
}