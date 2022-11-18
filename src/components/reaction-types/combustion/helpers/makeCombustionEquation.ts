import { makeRandomHydrocarbon } from "./makeRandomHydrocarbon";
import { makeCombustionBalancingTable } from "./makeCombustionBalancingTable";
import { balanceCarbon, balanceHydrogen, balanceOxygen } from "./balanceElements";
import { combustionCompounds, oxygenGas } from "../../configurations/combustion";
import { CombustionReaction, Hydrocarbon, CombustionEquationOxygen, CombustionEquationProduct, BalancingTable } from "../../configurations/interfaces";

/**
 * Randomly generates a balanced CombustionReaction object
 * @returns A randomly generated and balanced CombusitonReaction object
 */
export const makeCombustionEquation = (): CombustionReaction => {
    // Create and populate the CombustionReaction object properties
    let hydrocarbon: Hydrocarbon = makeRandomHydrocarbon();
    let o2: CombustionEquationOxygen = {...oxygenGas};
    let h2o: CombustionEquationProduct = {...combustionCompounds["dihydrogen monoxide"]};
    let co2: CombustionEquationProduct = {...combustionCompounds["carbon dioxide"]};

    // Create and populate the BalancingTable object used while balancing the combustion reaction
    let balancingTable: BalancingTable = makeCombustionBalancingTable(hydrocarbon);

    // Balances the combustion equation, updating the BalancingTable object, Hydrocarbon object and the other compound objects
    [balancingTable, hydrocarbon, co2] = balanceCarbon(balancingTable, hydrocarbon, co2);

    [balancingTable, hydrocarbon, h2o] = balanceHydrogen(balancingTable, hydrocarbon, h2o);
    
    [balancingTable, hydrocarbon, o2, h2o, co2] = balanceOxygen(balancingTable, hydrocarbon, o2, h2o, co2);

    return {type: "combustion", hydrocarbon, o2, h2o, co2}
};
