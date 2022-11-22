import { getRandomListMember } from "../../../common/helpers/getRandomListMember";
import { activitySeriesMetalsList, activitySeriesMetal, activitySeriesNonmetalsList, activitySeriesNonmetal } from "../../configurations/activitySeries";
import { ActivitySeries, ActivitySeriesElement } from "../../configurations/interfaces";

/**
 * Gets a random entry from one of the Activity Series lists, splitting the entry into the "elementName" and its "index"
 * @param elementList string[] part or all of one of the Activity Series lists in the format of "elementName@index"
 * @returns [elementName: string, index: number]
 */
const getElementFromASList = (elementList: string[]): [string, number] => {
    let listMember: string = getRandomListMember(elementList);
    let [elementName, index] = listMember.split("@");

    return [elementName, Number(index)]
}

/**
 * Picks elements from the Activity Series depending on whether the elements to pay attention to are metals or nonmetals and whether the reaction should be successful or not
 * @param isMetal boolean: true if the Activity Series for metals should be used, otherwise the Activity Series for nonmetals should be used
 * @param isSuccessful boolean: true if the reaction should occur ("element" is more reactive (higher priority) than compoundElement), otherwise no reaction
 * @returns "{element: ActivitySeriesElement, compoundElement: ActivitySeriesElement} for the appropriate type of single replacement reaction"
 */
export const getSRElements = (isMetal: boolean, isSuccessful: boolean): {element: ActivitySeriesElement, compoundElement: ActivitySeriesElement} => {
    let activitySeriesList: string[];
    let activitySeries: ActivitySeries;

    if (isMetal) {
        activitySeriesList = [...activitySeriesMetalsList];
        activitySeries = {...activitySeriesMetal}
    } else {
        activitySeriesList = [...activitySeriesNonmetalsList];
        activitySeries = {...activitySeriesNonmetal}
    }
     
    const listLength: number = activitySeriesList.length;
    let element: ActivitySeriesElement;
    let compoundElement: ActivitySeriesElement;
    let listElementName: string;
    let index: number;

    while (true) {
        [listElementName, index] = getElementFromASList(activitySeriesList);

        if (isSuccessful && index < listLength - 1) {
            element = activitySeries[listElementName];
            activitySeriesList.splice(0, index + 1);
            break

        } else if (!isSuccessful && index > 0) {
            element = activitySeries[listElementName];
            activitySeriesList.splice(index, listLength - 1);
            break
        }
    }

    [listElementName, index] = getElementFromASList(activitySeriesList);
    compoundElement = activitySeries[listElementName];

    return {element, compoundElement}
};