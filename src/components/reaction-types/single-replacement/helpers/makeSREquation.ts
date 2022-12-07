import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { makeEquationElement } from "../../helpers/makeEquationElements";
import { makeNewIon } from "../../../ions/helpers/makeNewIon";
import { makeIonicCompound } from "../../../compounds/helpers/makeIonicCompound";
import { getSolubilityLists } from "../../double-replacement/helpers/makeDREquation";
import { activitySeriesCations, activitySeriesAnions, activitySeriesMetals, activitySeriesNonmetals, elementData } from "../../../ions/configurations/elementData";
import { polyatomicIonData } from "../../../ions/configurations/polyatomicIonData";
import { EquationElement } from "../../configurations/interfaces";
import { ActivitySeries, Element, Ion } from "../../../ions/configurations/interfaces";
import { IonicCompound } from "../../../compounds/configurations/interfaces";
import { SRReaction } from "../../configurations/interfaces";
import { ReactionType } from "../../../common/configurations/types";

/**
 * Make and return the balanced single replacement equation as a "SRReaction" object
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @param isSuccessful boolean: If true, the reaction occurs and has a "ReactionType" of "single-replacement", otherwise the reaction does not occur and has a "ReactionType" of "sr-no-reaction"
 * @returns "{type, reactantCompound, reactantElement, productCompound, productElement}: SRReaction"
 */
export const makeSREquation = (isMetal: boolean, isSuccessful: boolean): SRReaction => {
    // Make the "EquationElement" objects for both the reactant and product
    const {reactantEquationElement, productEquationElement} = makeEquationElements(isMetal, isSuccessful);

    // Reactant "Ion" object is converted to the product element
    const reactantElementIon: Ion = makeNewIon(productEquationElement.compoundFormula);

    // Product "Ion" object comes from the reactant element
    const productElementIon: Ion = makeNewIon(reactantEquationElement.compoundFormula);

    // Make the "IonicCompound" objects for the reactants and products
    const {reactantCompound, productCompound} = makeIonicCompounds(reactantElementIon, productElementIon, isMetal);

    const type: ReactionType = (isSuccessful ? "single-replacement" : "sr-no-reaction");

    return {type, reactantCompound, reactantElement: reactantEquationElement, productCompound, productElement: productEquationElement}
}

/**
 * Makes the "EquationElement" objects for a single replacement reaction using the Activity Series
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @param isSuccessful boolean: If true, the reaction occurs and has a "ReactionType" of "single-replacement", otherwise the reaction does not occur and has a "ReactionType" of "sr-no-reaction"
 * @returns "{reactantEquationElement: EquationElement, productEquationElement: EquationElement}"
 */
const makeEquationElements = (isMetal: boolean, isSuccessful: boolean): {reactantEquationElement: EquationElement, productEquationElement: EquationElement} => {
    // Get the element symbols as strings
    const {reactantElementSymbol, productElementSymbol} = getElementSymbols(isMetal, isSuccessful);

    // Make the "EquationElement" object for the reactant
    const reactantElement: Element = elementData[reactantElementSymbol];
    const reactantEquationElement: EquationElement = makeEquationElement({...reactantElement});

    // Make the "EquationElement" object for the product
    const productElement: Element = elementData[productElementSymbol];
    const productEquationElement: EquationElement = makeEquationElement({...productElement});

    return {reactantEquationElement, productEquationElement}
}

/**
 * Get the element symbols as strings for a single replacement reaction
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @param isSuccessful boolean: If true, the reaction occurs and has a "ReactionType" of "single-replacement", otherwise the reaction does not occur and has a "ReactionType" of "sr-no-reaction"
 * @returns "{reactantElementSymbol: string, productElementSymbol: string}"
 */
const getElementSymbols = (isMetal: boolean, isSuccessful: boolean): {reactantElementSymbol: string, productElementSymbol: string} => {
    // Get the Activity Series to reference for element selection
    const activitySeriesDict: ActivitySeries = (isMetal ? activitySeriesMetals : activitySeriesNonmetals);
    let activitySeriesList: string[] = (isMetal ? [...activitySeriesCations] : [...activitySeriesAnions]);

    // Randomly select the first element after removing the least active list item for successful reactions or the most active list item for unsuccessful reactions.
    activitySeriesList = (isSuccessful ? activitySeriesList.slice(0, -1) : activitySeriesList.slice(1));

    const reactantElementSymbol: string = getRandomListMember(activitySeriesList);

    // Use the lessActivity list for successful reactions and greaterActivity for unsuccessful reactions
    const productElementSymbol: string = getRandomListMember((isSuccessful ? activitySeriesDict[reactantElementSymbol].lessActivity : activitySeriesDict[reactantElementSymbol].greaterActivity));

    return {reactantElementSymbol, productElementSymbol}
}

/**
 * Make the "IonicCompound" objects for the reactant and product compounds of a single replacement reaction
 * @param reactantElementIon "Ion" object for the element in the reactants
 * @param productElementIon "Ion" object for the element in the products
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @returns "{reactantCompound: IonicCompound, productCompound: IonicCompound}"
 */
const makeIonicCompounds = (reactantElementIon: Ion, productElementIon: Ion, isMetal: boolean): {reactantCompound: IonicCompound, productCompound: IonicCompound} => {
    // Make "Ion" object for the common ion for both compounds
    const commonIon: Ion = makeCommonIon(reactantElementIon, productElementIon, isMetal);

    // Make the "IonicCompound" objects for both compounds
    const reactantCompound: IonicCompound = makeIonicCompound("ionic-mixed", (isMetal ? productElementIon : commonIon), (isMetal ? commonIon : productElementIon));

    const productCompound: IonicCompound = makeIonicCompound("ionic-mixed", (isMetal ? reactantElementIon : commonIon), (isMetal ? commonIon : reactantElementIon));

    return {reactantCompound, productCompound}
}

/**
 * Make the "Ion" object for the ion common to both compounds in a single replacement reaction
 * @param reactantElementIon "Ion" object for the element in the reactants
 * @param productElementIon "Ion" object for the element in the products
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @returns "Ion" object for the ion common to both compounds in a single replacement reaction
 */
const makeCommonIon = (reactantElementIon: Ion, productElementIon: Ion, isMetal: boolean): Ion => {
    // Make a list of the soluble ions for both elementIons
    const {reactantSolubleIons, productSolubleIons} = makeSolubilityLists(reactantElementIon, productElementIon);

    // Make a list of soluble ions that are common to both elementIons
    const matchingSolubilityList: string[] = makeMatchingSolubilityList(reactantSolubleIons, productSolubleIons, isMetal);

    // Randomly select a soluble ion that are common to both elementIons
    let commonSymbol: string = getRandomListMember(matchingSolubilityList);

    // Make the "Ion" object for monatomic elements or retrieve the "Ion" object for polyatomic ions
    const commonIon: Ion = (commonSymbol.length > 2 ? polyatomicIonData[commonSymbol] : makeNewIon(commonSymbol));

    return commonIon
}

/**
 * Make a list of soluble ions for both of the passed in elementIons, using the "Ion" object's "solubilityTable" property if it exists
 * @param reactantElementIon "Ion" object for the element in the reactants
 * @param productElementIon "Ion" object for the element in the products
 * @returns "{reactantSolubleIons: string[], productSolubleIons: string[]}"
 */
const makeSolubilityLists = (reactantElementIon: Ion, productElementIon: Ion): {reactantSolubleIons: string[], productSolubleIons: string[]} => {
    let reactantSolubleIons: string[] = [];

    if (reactantSolubleIons.hasOwnProperty("solubilityTable")) {
        reactantSolubleIons = getSolubilityLists(reactantElementIon).solubleIons;
    }
    
    let productSolubleIons: string[] = [];

    if (productSolubleIons.hasOwnProperty("solubilityTable")) {
        productSolubleIons = getSolubilityLists(productElementIon).solubleIons;
    }

    return {reactantSolubleIons, productSolubleIons}
}

/**
 * Makes a list of the soluble ions common to the two passed in lists. If no matches are found, defaults will be returned.
 * @param reactantSolubleIons string[]: ions soluble with the "EquationElement" object for the reactant
 * @param productSolubleIons string[]: ions soluble with the "EquationElement" object for the product
 * @param isMetal boolean: If true, the elements doing the replacing are metals, otherwise they are nonmentals
 * @returns string[] of soluble ions common to the two passed in lists, otherwise a default ion list
 */
const makeMatchingSolubilityList = (reactantSolubleIons: string[], productSolubleIons: string[], isMetal: boolean): string[] => {
    let matchingSolubilityList: string[] = [];

    // If both lists have items in them, search for common items
    if (reactantSolubleIons.length > 0  && productSolubleIons.length > 0) {
        for (let symbol of productSolubleIons) {
            if (reactantSolubleIons.includes(symbol)) {
                matchingSolubilityList = [...matchingSolubilityList, symbol];
            }
        }

        return matchingSolubilityList

    // If only the product list has items in it, return the product list of soluble ions
    } else if (productSolubleIons.length > 0) {
        return [...productSolubleIons];

    // If only the reactant list has items in it, return the reactant list of soluble ions
    } else if (reactantSolubleIons.length > 0) {
        return [...reactantSolubleIons];

    // If there are not items in either list, return a default list
    } else {
        matchingSolubilityList = (isMetal ? ["nitrate"] : ["Na", "K", "Cs", "Rb", "Cu", "Zn"]);
    }

    return matchingSolubilityList
}