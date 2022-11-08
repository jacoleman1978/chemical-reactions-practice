import { firstMolecularPart } from "../configurations/molecularElements";
import { FirstMolecularElement } from "../configurations/interfaces";

/**
 * Returns a random FirstMolecularElement object from the firstMolecularPart object list.
 * @returns A random FirstMolecularPart object
 */

export const getRandomFirstMolecularPart = (): FirstMolecularElement => {
    const length = firstMolecularPart.length;
    const randomIndex = Math.floor(length * Math.random());

    return firstMolecularPart[randomIndex]
}