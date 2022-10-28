// Not used
const getCompoundDefaultTitle = (path: string[]): string => {
    if (path[1] === "ionic") {
        if (path[2] === "main") {
            return "Ionic - Main Group"
        } else if (path[2] === "transition") {
            return "Ionic - Transition Metals"
        } else if (path[2] === "polyatomic") {
            return "Ionic - Polyatomic Ions"
        } else if (path[2] === "mixed") {
            return "Ionic - Mixed"
        }
    } else if (path[1] === "acids") {
        return "Acids"
    } else if (path[1] === "molecular") {
        return "Molecular"
    } else if (path[1] === "mixed") {
        return "Mixed"
    }

    return "Compound Types"
}

export default getCompoundDefaultTitle;