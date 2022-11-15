import { solubilityTable } from "../../configurations/solubilityTable";
import { StateOfMatter } from "../../configurations/types";

export const getIonicStateOfMatter = (cationName: string, anionName: string): StateOfMatter => {
    const cation = cationName.split("(");
    if (solubilityTable[cation[0]][anionName]) {
        return "aq"
    } else {
        return "s"
    }
};
