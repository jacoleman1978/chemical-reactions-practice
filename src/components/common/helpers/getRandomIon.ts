import { Ion } from "../../../interfaces";

export const getRandomIon = (ionList: Ion[]): Ion => {
    const length = ionList.length;
    const randomIndex = Math.floor(length * Math.random());

    return ionList[randomIndex]
}