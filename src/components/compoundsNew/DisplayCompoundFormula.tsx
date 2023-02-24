/**
 * Formats and displays formulas of a compound formatted with subscripts surrounded by '/'.
 * @param formattedFormula A string containing the formula of a compound with subscripts surrounded by '/' 
 * @returns ReactElement
 */
const DisplayCompoundFormula = ({formattedFormula}: {formattedFormula: string}) => {
    // Check if the last character is a '/' and remove it if it is
    const length = formattedFormula.length;
    if (formattedFormula[length - 1] === "/") {
        formattedFormula = formattedFormula.slice(0, -1);
    }

    // Split the formula into an array of strings, including the subscripts
    const formulaParts: string[] = formattedFormula.split("/");

    // Map over the array and display the formula with odd numbered indexes as subscripts
    let formulaDisplay = formulaParts.map((part, i) => {
        if (i % 2 === 0) {
            return (
                <span key={`part-${i}`}>{part}</span>
            )
        } else {
            return <sub key={`part-${i}`}>{part}</sub>
        }
    })

    return (
        <div className="flex-formula-display-answer">
            {formulaDisplay}
        </div>
    )
}

export default DisplayCompoundFormula;