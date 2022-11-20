import { solubilityTable } from "../../configurations/solubilityTable";
import { StateOfMatter } from "../../configurations/types";

/**
 * Look up the entry on the solubilityTable for the cation and anion names to determine whether the ion pair will form a soluble (aq) or insoluble (s) compound.
 * @param cationName The name of the cation as a string from the Compound object 
 * @param anionName The name of the anion as a string from the Compound object
 * @returns The solubility of an ion pair as a string: "aq" for aqueous/soluble, "s" for solid or insoluble.
 */
export const getIonicStateOfMatter = (cationName: string, anionName: string): StateOfMatter => {
    // The solubility table does not have the Roman numeral part of the name for transion metal cations. The cationName to use is all of the name before the "("
    const cation = cationName.split("(");

    // True values from the table indicate a soluble compound is formed in water with that ion pair, returning "aq".
    // False values from the table indicate an insoluble compound is formed in water with that ion pair, returning "s".
    if (solubilityTable[cation[0]][anionName]) {
        return "aq"
    } else {
        return "s"
    }
};
