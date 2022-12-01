import { isBalanced } from "../../newHelpers/isBalanced";
import { BalancingTable, EquationElement } from "../../newConfigurations/interfaces";
import { MolecularCompound } from "../../../compounds/newConfigurations/interfaces";

export const balanceCombustionEquation = (hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    let balancingTable: BalancingTable = makeCombustionBalancingTable(hydrocarbon);

    [balancingTable, hydrocarbon, co2] = balanceCarbon(balancingTable, hydrocarbon, co2);

    [balancingTable, hydrocarbon, h2o] = balanceHydrogen(balancingTable, hydrocarbon, h2o);
    
    [balancingTable, hydrocarbon, o2, h2o, co2] = balanceOxygen(balancingTable, hydrocarbon, o2, h2o, co2);

    return [hydrocarbon, o2, h2o, co2]
};


export const makeCombustionBalancingTable = (hydrocarbon: MolecularCompound): BalancingTable => {
    let balancingTable: BalancingTable = {
        "C": {
            qtyReactants: hydrocarbon.firstElement.subscript,
            qtyProducts: 1,
        },
        "H": {
            qtyReactants: hydrocarbon.secondElement.subscript,
            qtyProducts: 2,
        },
        "O": {
            qtyReactants: 2,
            qtyProducts: 3,
        }
    }

    if (hydrocarbon.thirdElement !== undefined) {
        balancingTable["O"].qtyReactants += hydrocarbon.thirdElement.subscript;
    }

    return balancingTable
};

const balanceCarbon = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["C"])) {
        if (balancingTable["C"].qtyReactants < balancingTable["C"].qtyProducts) {
            [balancingTable, hydrocarbon] = updateHydrocarbonCoefficient(balancingTable, hydrocarbon);

        } else if (balancingTable["C"].qtyProducts < balancingTable["C"].qtyReactants) {
            co2.coefficient += 1;

            balancingTable["C"].qtyProducts += 1;
            balancingTable["O"].qtyProducts += 2;
        }
    }

    return [balancingTable, hydrocarbon, co2]
};

const balanceHydrogen = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, h2o: MolecularCompound): [BalancingTable, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["H"])) {
        if (balancingTable["H"].qtyReactants < balancingTable["H"].qtyProducts) {
            [balancingTable, hydrocarbon] = updateHydrocarbonCoefficient(balancingTable, hydrocarbon);

        } else if (balancingTable["H"].qtyProducts < balancingTable["H"].qtyReactants) {
            h2o.coefficient += 1;

            balancingTable["H"].qtyProducts += 2;
            balancingTable["O"].qtyProducts += 1;
        }
    }

    return [balancingTable, hydrocarbon, h2o]
};

const balanceOxygen = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    while(!isBalanced(balancingTable, ["O"])) {
        let oAsReactant: number = balancingTable["O"].qtyReactants;
        let oAsProduct: number = balancingTable["O"].qtyProducts;

        let areReactantsEven: boolean = oAsReactant % 2 === 0;
        let areProductsEven: boolean = oAsProduct % 2 === 0;

        if ((areReactantsEven && !areProductsEven) || (!areReactantsEven && areProductsEven)) {
            [balancingTable, hydrocarbon, o2, h2o, co2] = doubleCoefficients(balancingTable, hydrocarbon, o2, h2o, co2);

        } else if (oAsReactant < oAsProduct) {
            o2.coefficient += 1;

            balancingTable["O"].qtyReactants += 2;

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


const updateHydrocarbonCoefficient = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound): [BalancingTable, MolecularCompound] => {
    hydrocarbon.coefficient += 1;

    balancingTable["C"].qtyReactants += hydrocarbon.firstElement.subscript;
    balancingTable["H"].qtyReactants += hydrocarbon.secondElement.subscript;

    if (hydrocarbon.thirdElement !== undefined) {
        balancingTable["O"].qtyReactants += hydrocarbon.thirdElement.subscript;
    }

    return [balancingTable, hydrocarbon]
}

const doubleCoefficients = (balancingTable: BalancingTable, hydrocarbon: MolecularCompound, o2: EquationElement, h2o: MolecularCompound, co2: MolecularCompound): [BalancingTable, MolecularCompound, EquationElement, MolecularCompound, MolecularCompound] => {
    [balancingTable, hydrocarbon] = doubleHydrocarbonCoefficients(balancingTable, hydrocarbon);

    [balancingTable, o2] = doubleO2Coefficient(balancingTable, o2);

    [balancingTable, h2o] = doubleH2OCoefficient(balancingTable, h2o);

    [balancingTable, co2] = doubleCO2Coefficient(balancingTable, co2);

    return [balancingTable, hydrocarbon, o2, h2o, co2]
}

const doubleCO2Coefficient = (balancingTable: BalancingTable, co2: MolecularCompound): [BalancingTable, MolecularCompound] => {
    const coefficient: number = co2.coefficient;
    co2.coefficient *= 2;

    balancingTable["C"].qtyProducts += coefficient;
    balancingTable["O"].qtyProducts += 2 * coefficient;

    return [balancingTable, co2]
}

const doubleH2OCoefficient = (balancingTable: BalancingTable, h2o: MolecularCompound): [BalancingTable, MolecularCompound] => {
    const coefficient: number = h2o.coefficient;
    h2o.coefficient *= 2;

    balancingTable["H"].qtyProducts += 2 * coefficient;
    balancingTable["O"].qtyProducts += coefficient;

    return [balancingTable, h2o]
}

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

const doubleO2Coefficient = (balancingTable: BalancingTable, o2: EquationElement): [BalancingTable, EquationElement] => {
    const coefficient: number = o2.coefficient;
    o2.coefficient *= 2;

    balancingTable["O"].qtyReactants += 2 * coefficient;

    return [balancingTable, o2]
}