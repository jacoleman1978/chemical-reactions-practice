export const getMolecularFormulaHints = (correctFormulaParts: string[], userFormulaParts: string[]): string => {
    let hint: string = "";

    correctFormulaParts.forEach((part, i) => {
        if (i % 2 === 0) {
            if (part !== userFormulaParts[i]) {
                if (part.length === userFormulaParts[i].length) {
                    let elementSymbol: string = "";

                    for (let j = 0; j < part.length; j++) {
                        if (part[j] !== userFormulaParts[i][j]) {
                            if (userFormulaParts[i][j] === userFormulaParts[i][j].toUpperCase()) {
                                // TODO: Need to check if j+1 or j+2 is out of bounds
                                if (userFormulaParts[i][j+1] !== userFormulaParts[i][j+1].toUpperCase()) {
                                    elementSymbol = userFormulaParts[i][j];
                                } else {
                                    elementSymbol = userFormulaParts[i].slice(j, j+2);
                                }
                                
                            } else {
                                elementSymbol = userFormulaParts[i].slice(j-1, j+1);
                            }

                            break;
                        }
                    }

                    hint = `There is something incorrect with '${elementSymbol}'.`;
                }

                
            }
        } else {
            if (part !== userFormulaParts[i]) {
                hint = `The subscript ${userFormulaParts[i]} after '${userFormulaParts[i-1]}' is incorrect. What number does '${convertToGreekPrefix(part)}' represent?`;
            }
        }
    })

    return hint;
};

const convertToGreekPrefix = (number: string): string => {
    switch (number) {
        case "2":
            return "di";
        case "3":
            return "tri";
        case "4":
            return "tetra";
        case "5":
            return "penta";
        case "6":
            return "hexa";
        case "7":
            return "hepta";
        case "8":
            return "octa";
        case "9":
            return "nona";
        case "10":
            return "deca";
        default:
            return "";
    }
}