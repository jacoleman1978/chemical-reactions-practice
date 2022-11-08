import { numberToPrefix } from "../configurations/greekPrefixConversions";
import { FirstMolecularElement, SecondMolecularElement } from "../configurations/interfaces";

export const makeMolecularName = (firstElementPart: FirstMolecularElement, firstSubscript:string, secondElementPart: SecondMolecularElement, secondSubscript: string): string => {
    let name: string = "";

    if (firstSubscript !== "") {
        name += numberToPrefix[firstSubscript]
    }

    name += firstElementPart.formulaName;

    if (secondSubscript === "") {
        secondSubscript = "1";
    }

    name = `${name} ${numberToPrefix[secondSubscript]}${secondElementPart.formulaName}`

    return name
}