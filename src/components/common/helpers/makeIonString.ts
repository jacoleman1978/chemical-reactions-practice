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