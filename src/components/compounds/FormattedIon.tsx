import { FormattedIonProps } from "./configurations/interfaces"

// Uses the formulaParts from the Compound object to format the display of the ion
// Called from /compounds/CompoundFormula.tsx
const FormattedIon = ({formulaParts}: FormattedIonProps) => {
    const formattedIon = formulaParts.map((part, i) => {
        let symbols: string = "";

        if (typeof part === "string") {
            symbols += part;
        } else if (typeof part === "number") {
            symbols = "";
            return <sub key={`part-${i}`}>{part}</sub>
        }

        return <span key={`part=${i}`}>{symbols}</span>
    })

    return <>{formattedIon}</>
}

export default FormattedIon;