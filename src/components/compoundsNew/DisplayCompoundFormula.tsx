// Formats and displays formulas of a compound formatted with subscripts surrounded by '/'.
const DisplayCompoundFormula = ({formattedFormula}: {formattedFormula: string}) => {
    // Check if the last character is a '/' and remove it if it is
    const length = formattedFormula.length;
    if (formattedFormula[length - 1] === "/") {
        formattedFormula = formattedFormula.slice(0, -1);
    }

    const formulaParts: string[] = formattedFormula.split("/");

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