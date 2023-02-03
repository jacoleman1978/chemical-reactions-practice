import { getRandomListMember } from "../../common/helpers/getRandomListMember";
import { makeNewIon } from "./makeNewIon";
import { mainGroupAnions, acidMainGroupAnions } from "../configurations/elementData";
import { polyatomicAnions, acidPolyatomicAnions, polyatomicIonData } from "../configurations/polyatomicIonData";
import { Ion } from "../configurations/interfaces";
import { CompoundType } from "../../common/configurations/types";

/**
 * Generates a random anion as an "Ion" object according to the "CompoundType" type literal
 * @param compoundType "CompoundType" type literal
 * @returns A random anion as an "Ion" object
 */
export const getRandomAnion = (compoundType: CompoundType): Ion => {
    // Use main group anions for "ionic-main" and "ionic-transition" 
    if (compoundType === "ionic-main" || compoundType === "ionic-transition") {
        const elementSymbol: string = getRandomListMember([...mainGroupAnions]);
    
        return makeNewIon(elementSymbol)

    // Use polyatomic ions for "ionic-polyatomic"
    } else if (compoundType === "ionic-polyatomic") {
        const polyatomic: string = getRandomListMember([...polyatomicAnions])

        return {...polyatomicIonData[polyatomic]}

    // "acids" have a 25% chance of using main group anions and 75% chance of using polyatomic anions
    } else if (compoundType === "acids") {
        const randomNumber: number = Math.random();

        if (randomNumber < 0.25) {
            const element: string = getRandomListMember([...acidMainGroupAnions]);
        
            return makeNewIon(element)

        } else {
            const polyatomic: string = getRandomListMember([...acidPolyatomicAnions])
            
            return {...polyatomicIonData[polyatomic]}

        }
    }

    return {} as Ion
};