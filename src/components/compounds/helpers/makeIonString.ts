/**
 * Generates a formatted string for an ion using '/'s around subscripts
 * @param ion FormulaParts property of 'firstPart' or 'secondPart'
 * @returns A formatted string for an ion using '/'s around subscripts
 */

export const makeIonString = (ion: (string | number)[]): string => {
    let ionString: string = "";

    for (let part of ion) {
        if (/\d/.test(part.toString())) {
            ionString += `/${part}/`;
        } else {
            ionString += part
        }
    }

    return ionString
}