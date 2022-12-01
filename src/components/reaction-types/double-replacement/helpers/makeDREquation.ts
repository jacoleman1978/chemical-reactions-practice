import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { makeIonicCompound } from "../../../compounds/newHelpers/makeIonicCompound";
import { makeNewIon } from "../../../ions/helpers/makeNewIon";
import { balanceDREquation } from "./balanceDREquation";
import { drCations } from "../../../ions/configurations/elementData";
import { drPolyatomicCations, drPolyatomicAnions, polyatomicIonData } from "../../../ions/configurations/polyatomicIonData";
import { SolubilityLists, SortedCationSolubilityTable, DRAnionsWithCation, DRIons, DRReaction } from "../../newConfigurations/interfaces";
import { Ion } from "../../../ions/configurations/interfaces";
import { IonicCompound } from "../../../compounds/newConfigurations/interfaces";
import { ReactionType } from "../../../common/configurations/types";

export const makeDREquation = (isSoluble: boolean): DRReaction=> {
    let {firstCation, secondCation, firstAnion, secondAnion} = makeIonPairs(isSoluble);

    let reactantOne: IonicCompound = makeIonicCompound("ionic-mixed", firstCation, secondAnion);
    let reactantTwo: IonicCompound = makeIonicCompound("ionic-mixed", secondCation, firstAnion);
    let productOne: IonicCompound = makeIonicCompound("ionic-mixed", firstCation, firstAnion);
    let productTwo: IonicCompound = makeIonicCompound("ionic-mixed", secondCation, secondAnion);

    const type: ReactionType = (isSoluble ? "dr-no-reaction" : "double-replacement")

    let drEquation: DRReaction = {type, reactantOne, reactantTwo, productOne, productTwo}

    return balanceDREquation(drEquation)
};


const makeIonPairs = (isSoluble: boolean): DRIons => {
    const {firstCation, firstAnion, secondAnion} = getDRAnionsForCation(isSoluble);

    const firstAnionSolubilityLists: SolubilityLists = getSolubilityLists(firstAnion);
    const secondAnionSolubilityLists: SolubilityLists = getSolubilityLists(secondAnion);

    let matchingCationSymbols: string[] = [];

    for (let symbol of firstAnionSolubilityLists.solubleIons) {
        if (secondAnionSolubilityLists.solubleIons.includes(symbol) && symbol !== firstCation.ionFormula) {
            matchingCationSymbols = [...matchingCationSymbols, symbol];
        }
    }

    if (matchingCationSymbols.length === 0) {
        return makeIonPairs(isSoluble);
    }

    const secondCationSymbol: string = getRandomListMember(matchingCationSymbols);

    return {firstCation, secondCation: getIon(secondCationSymbol), firstAnion, secondAnion}
};

const getDRAnionsForCation = (isSoluble: boolean): DRAnionsWithCation => {
    let cationData: SortedCationSolubilityTable = getSortedCationSolubilityTable();

    while ((isSoluble && cationData.solubleIons.length < 2) || (!isSoluble && cationData.insolubleIons.length === 0)) {
        cationData = getSortedCationSolubilityTable();
    }

    const {cation, solubleIons, insolubleIons} = cationData;

    let secondAnionSymbol: string = getRandomListMember((isSoluble ? solubleIons : insolubleIons));

    let firstAnionSymbol: string = secondAnionSymbol;

    while (firstAnionSymbol === secondAnionSymbol) {
        secondAnionSymbol = getRandomListMember(solubleIons);
    }

    return {firstCation: cation, firstAnion: getIon(firstAnionSymbol), secondAnion: getIon(secondAnionSymbol)}
}

const getSortedCationSolubilityTable = (): SortedCationSolubilityTable => {
    const cation: Ion = getRandomCation();

    const {solubleIons, insolubleIons} = getSolubilityLists(cation);

    return {cation, solubleIons, insolubleIons}
}

const getSolubilityLists = (ion: Ion): SolubilityLists => {
    let solubleIons: string[] = [];
    let insolubleIons: string[] = [];

    for (let symbol in ion.solubilityTable) {
        if (ion.solubilityTable[symbol]) {
            solubleIons = [...solubleIons, symbol];

        } else {
            insolubleIons = [...insolubleIons, symbol];
        }
    }

    return {solubleIons, insolubleIons}
}

const getRandomCation = (): Ion => {
    const cationSymbol: string = getRandomListMember([...drCations, ...drPolyatomicCations]);

    return getIon(cationSymbol)
}

const getIon = (ionSymbol: string): Ion => {
    if ([...drPolyatomicCations, ...drPolyatomicAnions].includes(ionSymbol)) {
        return {...polyatomicIonData[ionSymbol]}

    } else {
        return {...makeNewIon(ionSymbol)}
    }
}
