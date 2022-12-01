import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { makeNewIon } from "../../../ions/helpers/makeNewIon";
import { drCations, drAnions } from "../../../ions/configurations/elementData";
import { drPolyatomicCations, drPolyatomicAnions, polyatomicIonData } from "../../../ions/configurations/polyatomicIonData";
import { Ion } from "../../../ions/configurations/interfaces";

export const makeIonPairs = () => {
    
};

const getRandomCation = (): Ion => {
    const cationSymbol: string = getRandomListMember([...drCations, ...drPolyatomicCations]);

    return getIon(cationSymbol)
}

const getIon = (ionSymbol: string): Ion => {
    if (ionSymbol.length > 2) {
        return polyatomicIonData[ionSymbol]

    } else {
        return makeNewIon(ionSymbol)
    }
}
