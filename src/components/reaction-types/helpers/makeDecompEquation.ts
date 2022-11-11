import { makeReactant } from "./makeReactant";
import { makeDecompProducts } from "./makeDecompProducts";
import { makeDecompBalancingTable } from "./makeDecompBalancingTable";
import { isBalanced } from "./isBalanced";
import { updateDecompReactant } from "./updateDecompReactant";
import { updateDecompProduct } from "./updateDecompProduct";
import { DecompositionReaction, EquationCompound, BalancingTable } from "../configurations/interfaces";

export const makeDecompEquation = (): DecompositionReaction => {
    let reactant: EquationCompound = makeReactant("decomposition");

    let {productOne, productTwo} = makeDecompProducts(reactant.compound);

    let balancingTable: BalancingTable = makeDecompBalancingTable(reactant, productOne, productTwo);

    const [cation, anion]: string[] = reactant.compound.compoundName.split(" ");

    const elementKeys: string[] = [cation, anion];

    while (!isBalanced(balancingTable, elementKeys)) {
        if (balancingTable[cation].qtyReactants < balancingTable[cation].qtyProducts) {
            [balancingTable, reactant] = updateDecompReactant(balancingTable, reactant);

        } else if (balancingTable[cation].qtyProducts < balancingTable[cation].qtyReactants) {
            [balancingTable, productOne] = updateDecompProduct(balancingTable, productOne, cation);
        }

        if (balancingTable[anion].qtyReactants < balancingTable[anion].qtyProducts) {
            [balancingTable, reactant] = updateDecompReactant(balancingTable, reactant);
            
        } else if (balancingTable[anion].qtyProducts < balancingTable[anion].qtyReactants) {
            [balancingTable, productTwo] = updateDecompProduct(balancingTable, productTwo, anion);
        }
    }

    return {type: "decomposition", reactantOne: reactant, productOne, productTwo}
};
