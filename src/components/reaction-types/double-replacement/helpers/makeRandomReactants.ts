import { getRandomCationName } from "./getRandomCationName";
import { makeAnionSolubilityLists } from "./makeAnionSolubilityLists";
import { makeDREquationCompound } from "./makeDREquationCompound";
import { makeDRBalancingTable } from "./makeDRBalancingTable";
import { makeCompoundObjects } from "../../helpers/makeCompoundObjects";
import { isBalanced } from "../../helpers/isBalanced";
import { balanceIon } from "./balanceIon";
import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { drCations, drAnions } from "../../configurations/doubleReplacementIons";
import { DRReactantPair, EquationCompound } from "../../configurations/interfaces";
import { Ion, Compound } from "../../../compounds/configurations/interfaces";
import { RxnTypeList } from "../../../common/configurations/types";

export const makeRandomReactants = (isSuccessful: boolean): RxnTypeList => {
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

    const firstCation: Ion = {...drCations[firstReactant.cationName]};
    const firstAnion: Ion = {...drAnions[firstReactant.anionName]};
    const secondCation: Ion = {...drCations[secondReactant.cationName]};
    const secondAnion: Ion = {...drAnions[secondReactant.anionName]};

    const reactantOne: Compound = makeCompoundObjects(firstCation, firstAnion);
    const reactantTwo: Compound = makeCompoundObjects(secondCation, secondAnion);
    const productOne: Compound = makeCompoundObjects(firstCation, secondAnion);
    const productTwo: Compound = makeCompoundObjects(secondCation, firstAnion);

    let reactantOneEC: EquationCompound = makeDREquationCompound(reactantOne);
    let reactantTwoEC: EquationCompound = makeDREquationCompound(reactantTwo);
    let productOneEC: EquationCompound = makeDREquationCompound(productOne);
    let productTwoEC: EquationCompound = makeDREquationCompound(productTwo);

    let [balancingTable, balancingTableKeys] = makeDRBalancingTable(reactantOneEC, reactantTwoEC, productOneEC, productTwoEC);

    while (!isBalanced(balancingTable, balancingTableKeys)) {
        [balancingTable, reactantOneEC, productOneEC] = balanceIon(balancingTable, firstCation.ionName, reactantOneEC, productOneEC);

        [balancingTable, reactantOneEC, productTwoEC] = balanceIon(balancingTable, firstAnion.ionName, reactantOneEC, productTwoEC);
    
        [balancingTable, reactantTwoEC, productTwoEC] = balanceIon(balancingTable, secondCation.ionName, reactantTwoEC, productTwoEC);
    
        [balancingTable, reactantTwoEC, productOneEC] = balanceIon(balancingTable, secondAnion.ionName, reactantTwoEC, productOneEC);
    }

    console.table(balancingTable)

    return {type: "double-replacement", reactantOne: reactantOneEC, reactantTwo: reactantTwoEC, productOne: productOneEC, productTwo: productTwoEC}
};
