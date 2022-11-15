import { getRandomCationName } from "./getRandomCationName";
import { makeAnionSolubilityLists } from "./makeAnionSolubilityLists";
import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { DRReactantPair } from "../../configurations/interfaces";

export const makeRandomReactants = (isSuccessful: boolean): DRReactantPair[] => {
    // Pick random cation for the first compound with corresponding solubility lists
    let firstCationName: string = getRandomCationName();

    let firstSolubleAnionList: string[] = [];
    let firstInsolubleAnionList: string[] = [];

    [firstSolubleAnionList, firstInsolubleAnionList] = makeAnionSolubilityLists(firstCationName);

    // Pick different random cation for the second compound with corresponding solubility lists
    let secondCationName: string = firstCationName;

    while (firstCationName === secondCationName) {
        secondCationName = getRandomCationName();
    }

    let secondSolubleAnionList: string[] = [];
    let secondInsolubleAnionList: string[] = [];

    [secondSolubleAnionList, secondInsolubleAnionList] = makeAnionSolubilityLists(secondCationName);

    // Make compound combinations for both successful and unsuccessful double replacement reactions
    let firstSuccessfulPairs: DRReactantPair[] = [];
    let firstUnsuccessfulPairs: DRReactantPair[] = [];

    for (let anion of secondSolubleAnionList) {
        let reactantPair: DRReactantPair = {
            cationName: firstCationName,
            anionName: anion,
        }

        if (firstInsolubleAnionList.includes(anion)) {
            firstSuccessfulPairs = [...firstSuccessfulPairs, reactantPair];

        } else {
            firstUnsuccessfulPairs = [...firstUnsuccessfulPairs, reactantPair];
        }
    }

    let secondSuccessfulPairs: DRReactantPair[] = [];
    let secondUnsuccessfulPairs: DRReactantPair[] = [];

    for (let anion of firstSolubleAnionList) {
        let reactantPair: DRReactantPair = {
            cationName: secondCationName,
            anionName: anion,
        }

        if (secondInsolubleAnionList.includes(anion)) {
            secondSuccessfulPairs = [...secondSuccessfulPairs, reactantPair];

        } else {
            secondUnsuccessfulPairs = [...secondUnsuccessfulPairs, reactantPair];

        }
    }

    let selectedIonPair: DRReactantPair = {
        cationName: "",
        anionName: "",
    };

    if (isSuccessful) {
        let firstLength: number = firstSuccessfulPairs.length;
        let secondLength: number = secondSuccessfulPairs.length;

        if ( firstLength === 0 && secondLength === 0) {
            return makeRandomReactants(true);

        } else {
            let allSuccessfulPairs = [...firstSuccessfulPairs, ...secondSuccessfulPairs];

            selectedIonPair = getRandomListMember(allSuccessfulPairs);
        }
    } else {
        let firstLength: number = firstUnsuccessfulPairs.length;
        let secondLength: number = secondUnsuccessfulPairs.length;

        if (firstLength === 0 && secondLength === 0) {
            return makeRandomReactants(false);

        } else {
            let allUnsuccessfulPairs = [...firstUnsuccessfulPairs, ...secondUnsuccessfulPairs];

            selectedIonPair = getRandomListMember(allUnsuccessfulPairs);
        }
    }

    let firstReactant: DRReactantPair = {
        cationName: firstCationName,
        anionName: "",
    };
    let secondReactant: DRReactantPair = {
        cationName: secondCationName,
        anionName: ""
    };
    
    if (selectedIonPair.cationName === firstCationName) {
        secondReactant.anionName = selectedIonPair.anionName;
        
        if (isSuccessful) {
            firstReactant.anionName = getRandomListMember(firstSolubleAnionList);
        } else {
            firstReactant.anionName = getRandomListMember(firstInsolubleAnionList);
        }

    } else if (selectedIonPair.cationName === secondCationName) {
        firstReactant.anionName = selectedIonPair.anionName;

        if (isSuccessful) {
            secondReactant.anionName = getRandomListMember(secondSolubleAnionList);
        } else {
            secondReactant.anionName = getRandomListMember(secondInsolubleAnionList)
        }
    }

    return [firstReactant, secondReactant]
};
