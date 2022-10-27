// Not used
const getCompoundDefaultTitle = (path: string): string => {
    if (path[2] === "ionic") {
        return "Ionic"
    } else if (path[2] === "acids") {
        return "Acids"
    } else if (path[2] === "molecular") {
        return "Molecular"
    } else if (path[2] === "mixed") {
        return "Mixed"
    }

    return "Compound Types"
}

export default getCompoundDefaultTitle;