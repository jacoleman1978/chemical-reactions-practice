export const makeIonString = (ion: string): string => {
    let ionString: string = "";

    if (/\d/.test(ion)) {
        while (ion.length > 0) {
            let char: string = ion.substring(1);
    
            if (char.match(/\d/)) {
                ionString += `/${char}/`;
            } else {
                ionString += char;
            }
        }
    } else {
        ionString = ion;
    }

    return ionString
}