import { makeRandomHydrocarbon } from "./makeHydrocarbon";
import { makeOxygenGas, makeWaterVapor, makeCarbonDioxide } from "./makeOtherCombustionMolecules";
import { balanceCombustionEquation } from "./balanceCombustionEquation";
import { CombustionReaction, EquationElement } from "../../configurations/interfaces";
import { MolecularCompound } from "../../../compounds/configurations/interfaces";

/**
 * Randomly generates a balanced CombustionReaction object
 * @returns A randomly generated and balanced CombusitonReaction object
 */
export const makeCombustionEquation = (): CombustionReaction => {
    // Create and populate the CombustionReaction object properties
    let hydrocarbon: MolecularCompound = makeRandomHydrocarbon();
    let o2: EquationElement = makeOxygenGas();
    let h2o: MolecularCompound = makeWaterVapor();
    let co2: MolecularCompound = makeCarbonDioxide();

    [hydrocarbon, o2, h2o, co2] = balanceCombustionEquation({...hydrocarbon}, {...o2}, {...h2o}, {...co2});

    return {type: "combustion", hydrocarbon, o2, h2o, co2}
};
