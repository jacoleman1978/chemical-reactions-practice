import { FormulaParts, StateOfMatter } from "../common/configurations/types";

interface DisplayCompound {
    formulaParts: FormulaParts,
    coefficient?: number,
    state?: StateOfMatter,
}

// Displays the chemical formula for FormulaParts type formula parts. 
const DisplayFormula = ({formulaParts, coefficient, state}: DisplayCompound) => {
    let isCoefficient: boolean = false;
    let isState: boolean = false;

    // If a coefficient is passed in and greater than one, display it.
    if (coefficient !== undefined) {
        if (coefficient > 1) {
            isCoefficient = true;
        }
    }
    
    // If a state is passed, display it.
    if (state !== undefined) {
        isState = true;
    }
  return (
    <div className="flex-right-center sm-gap">
        {(isCoefficient ? coefficient : <></>)}
        <div className="flex-right-center">
            {formulaParts.map((part: (string | number), i: number) => {
                if (typeof part === "string") {
                    return <div key={`part-${i}`}>{part}</div>
                } else if (typeof part === "number") {
                    return (part > 1 ? <sub key={`part-${i}`}>{part}</sub> : <div key={`part-${i}`}></div>)
                } else {
                    return <></>
                }
            })}
            {(isState ? <sub>({state})</sub> : <></>)}
        </div>
    </div>

  )
}

export default DisplayFormula;