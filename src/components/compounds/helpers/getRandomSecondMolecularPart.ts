import { secondMolecularPart } from "../configurations/molecularElements";
import { SecondMolecularElement } from "../configurations/interfaces";

/**
 * Returns a random SecondMolecularElement object from the secondMolecularPart object list.
 * @returns A random SecondMolecularPart object
 */

export const getRandomSecondMolecularPart = (): SecondMolecularElement => {
    const length = secondMolecularPart.length;
    const randomIndex = Math.floor(length * Math.random());

    return secondMolecularPart[randomIndex]
}