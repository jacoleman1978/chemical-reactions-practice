import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { makeIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { makeNewIon } from "../../../ions/helpers/makeNewIon";
import { balanceDREquation } from "./balanceDREquation";
import { drCations } from "../../../ions/configurations/elementData";
import { drPolyatomicCations, drPolyatomicAnions, polyatomicIonData } from "../../../ions/configurations/polyatomicIonData";
import { SolubilityLists, SortedCationSolubilityTable, DRAnionsWithCation, DRIons, DRReaction } from "../../configurations/interfaces";
import { Ion } from "../../../ions/configurations/interfaces";
import { IonicCompound } from "../../../compounds/configurations/interfaces";
import { ReactionType } from "../../../common/configurations/types";

/**
 * Makes a balanced double replacement reaction with a general pattern: AB + CD --> AD + CB
 * @param isSoluble boolean: If true all products are soluble ("aq")...no reaction. Otherwise, one product is a precipitate (ppt, "s").
 * @returns "DRReaction" object that is balanced
 */
export const makeDREquation = (isSoluble: boolean): DRReaction=> {
    // Make all the "Ion" objects of the ions
    let {firstCation, secondCation, firstAnion, secondAnion} = makeIonPairs(isSoluble);

    // Make the four "IonicCompound" objects for the double replacement reaction
    let reactantOne: IonicCompound = makeIonicCompound("ionic-mixed", firstCation, secondAnion);
    let reactantTwo: IonicCompound = makeIonicCompound("ionic-mixed", secondCation, firstAnion);
    let productOne: IonicCompound = makeIonicCompound("ionic-mixed", firstCation, firstAnion);
    let productTwo: IonicCompound = makeIonicCompound("ionic-mixed", secondCation, secondAnion);

    // Set the reaction type based on whether all products will be soluble
    const type: ReactionType = (isSoluble ? "dr-no-reaction" : "double-replacement")

    let drEquation: DRReaction = {type, reactantOne, reactantTwo, productOne, productTwo}

    return balanceDREquation(drEquation)
};

/**
 * Make all of the "Ion" objects for the double replacement reaction
 * @param isSoluble boolean: If true all products are soluble ("aq")...no reaction. Otherwise, one product is a precipitate (ppt, "s").
 * @returns "{firstCation, secondCation, firstAnion, secondAnion}" as "DRIons"
 */
const makeIonPairs = (isSoluble: boolean): DRIons => {
    const {firstCation, firstAnion, secondAnion} = getDRAnionsForCation(isSoluble);

    // Make a list of cations that both anions have in common as soluble from their "solubilityTable" property, excluding "firstCation" from the list
    const firstAnionSolubilityLists: SolubilityLists = getSolubilityLists(firstAnion);
    const secondAnionSolubilityLists: SolubilityLists = getSolubilityLists(secondAnion);

    let matchingCationSymbols: string[] = [];

    for (let symbol of firstAnionSolubilityLists.solubleIons) {
        if (secondAnionSolubilityLists.solubleIons.includes(symbol) && symbol !== firstCation.ionFormula) {
            matchingCationSymbols = [...matchingCationSymbols, symbol];
        }
    }

    // If there are no common cations in the list, generate new ions and try again
    if (matchingCationSymbols.length === 0) {
        return makeIonPairs(isSoluble);
    }

    // Randomly select the "secondCation" from the list of cations in common
    const secondCationSymbol: string = getRandomListMember(matchingCationSymbols);

    return {firstCation, secondCation: getIon(secondCationSymbol), firstAnion, secondAnion}
};

/**
 * Select the first product ion pair for a double replacement reaction that has a state matching "isSoluble". Select a second anion that forms a soluble ("aq") pair with the selected cation
 * @param isSoluble boolean: If true all products are soluble ("aq")...no reaction. Otherwise, one product is a precipitate (ppt, "s").
 * @returns "{firstCation, firstAnion, secondAnion}" as "DRAnionsWithCation"
 */
const getDRAnionsForCation = (isSoluble: boolean): DRAnionsWithCation => {
    // Select a random cation and generate two lists: soluble and insoluble anions
    let cationData: SortedCationSolubilityTable = getSortedCationSolubilityTable();

    // If there aren't at least two ions in the soluble list when "isSoluble" is true OR at least 1 ion in the insoluble list when "isSoluble" is false, pick a new cation
    while ((isSoluble && cationData.solubleIons.length < 2) || (!isSoluble && cationData.insolubleIons.length === 0)) {
        cationData = getSortedCationSolubilityTable();
    }

    const {cation, solubleIons, insolubleIons} = cationData;

    // Pick two anions from the solublility list on depending on the value of "isSoluble"
    let secondAnionSymbol: string = getRandomListMember((isSoluble ? solubleIons : insolubleIons));

    let firstAnionSymbol: string = secondAnionSymbol;

    while (firstAnionSymbol === secondAnionSymbol) {
        secondAnionSymbol = getRandomListMember(solubleIons);
    }

    return {firstCation: cation, firstAnion: getIon(firstAnionSymbol), secondAnion: getIon(secondAnionSymbol)}
}

/**
 * Select a random cation and generate a list of anions that form soluble ("aq") and insoluble ("s") compounds using the cation's "solubilityTable" property
 * @returns "{solubleIons, insolubleIons}" as "SortedCationSolubilityTable" object
 */
const getSortedCationSolubilityTable = (): SortedCationSolubilityTable => {
    const cation: Ion = getRandomCation();

    const {solubleIons, insolubleIons} = getSolubilityLists(cation);

    return {cation, solubleIons, insolubleIons}
}

/**
 * Generates a list of ions that form soluble ("aq") and insoluble ("s") compounds using the ion's "solubilityTable" property
 * @param ion "Ion" object
 * @returns "{solubleIons, insolubleIons}" as "SolubilityLists" object
 */
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

/**
 * Selects a random cation from the double replacement monoatomic and polyatomic lists
 * @returns "Ion" object
 */
const getRandomCation = (): Ion => {
    const cationSymbol: string = getRandomListMember([...drCations, ...drPolyatomicCations]);

    return getIon(cationSymbol)
}

/**
 * Create an "Ion" object for a specific ion symbol
 * @param ionSymbol string: symbol of the ion (can be monoatomic or polyatomic)
 * @returns "Ion" object
 */
const getIon = (ionSymbol: string): Ion => {
    if ([...drPolyatomicCations, ...drPolyatomicAnions].includes(ionSymbol)) {
        return {...polyatomicIonData[ionSymbol]}

    } else {
        return {...makeNewIon(ionSymbol)}
    }
}
