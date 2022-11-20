import { getDRCations } from "./getDRCations";
import { makeAnionSolubilityLists } from "./makeAnionSolubilityLists";
import { makeSolubilityPairsLists } from "./makeSolubilityPairsLists";
import { makeSelectedIonPair } from "./makeSelectedIonPair";
import { hasSolubilityPairs } from "./hasSolubilityPairs";
import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { DRReactantPair, SolubilityPairs } from "../../configurations/interfaces";

/**
 * Generates two random cations from the drCations table and uses them to select anions depending on whether "isSuccessful" or "!isSuccessful"
 * @param isSuccessful boolean. If true, at least one produce is insoluble, otherwise both products are soluble
 * @returns "{firstReactant: DRReactantPair, secondReactant: DRReactantPair}"
 */
export const getDRReactants = (isSuccessful: boolean): {firstReactant: DRReactantPair, secondReactant: DRReactantPair} => {
    let firstCationName: string;
    let secondCationName: string;
    let firstSolubleAnionList: string[];
    let firstInsolubleAnionList: string[];
    let secondSolubleAnionList: string[];
    let secondInsolubleAnionList: string[];
    let firstSolubilityPairs: SolubilityPairs;
    let secondSolubilityPairs: SolubilityPairs;

    // Keep picking cations until there is a viable SolubilityPair available
    do {
        // Select two different cations from the drCations table
        [firstCationName, secondCationName] = getDRCations();

        // Sort the anions from the solubilityTable, depending on whether the formed compound would be soluble ("aq") or insoluble ("s")
        [firstSolubleAnionList, firstInsolubleAnionList] = makeAnionSolubilityLists(firstCationName);
    
        [secondSolubleAnionList, secondInsolubleAnionList] = makeAnionSolubilityLists(secondCationName);

        // Make arrays of ion combinations for both soluble and insoluble products formed between the firstCationName and the secondSolubleAnionList
        // This pairing ensures that the reactant pair is soluble ("aq") or insoluble("s").
        firstSolubilityPairs = makeSolubilityPairsLists(firstCationName, firstInsolubleAnionList, secondSolubleAnionList);

        secondSolubilityPairs = makeSolubilityPairsLists(secondCationName, secondInsolubleAnionList, firstSolubleAnionList);

        // Check if the two cations selected generate viable SolubilityPairs
        if (hasSolubilityPairs(isSuccessful, firstSolubilityPairs, secondSolubilityPairs)) {
            break
        }

    } while (true)

    // Select an anion for a reactant ion pair, depending on "isSuccessful". Return an insoluble pair if "isSuccessful" and a soluble pair if "!isSuccessful".
    let selectedIonPair = makeSelectedIonPair(isSuccessful, firstSolubilityPairs, secondSolubilityPairs);

    let firstReactant: DRReactantPair = {
        cationName: firstCationName,
        anionName: "",
    };
    let secondReactant: DRReactantPair = {
        cationName: secondCationName,
        anionName: ""
    };
    
    // Assign the selected anion to the appropriate DRReactantPair object and randomly select an anion for the other reactant that will result in a soluble pair ("aq").
    if (selectedIonPair.cationName === firstCationName) {
        secondReactant.anionName = selectedIonPair.anionName;
        
        firstReactant.anionName = getRandomListMember(firstSolubleAnionList);

    } else if (selectedIonPair.cationName === secondCationName) {
        firstReactant.anionName = selectedIonPair.anionName;

        secondReactant.anionName = getRandomListMember(secondSolubleAnionList);

    }

    return {firstReactant, secondReactant}
};
