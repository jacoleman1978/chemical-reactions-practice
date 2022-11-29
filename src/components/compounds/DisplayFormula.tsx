import { FormulaParts, StateOfMatter } from "../common/configurations/types";

interface DisplayCompound {
    formulaParts: FormulaParts,
    coefficient?: number,
    state?: StateOfMatter,
}

const DisplayFormula = ({formulaParts, coefficient, state}: DisplayCompound) => {
    let isCoefficient: boolean = false;
    let isState: boolean = false;

    if (coefficient !== undefined) {
        isCoefficient = true;
    }

    if (state !== undefined) {
        isState = true;
    }
  return (
    <div className="flex-right-center med-gap">
        {(isCoefficient ? coefficient : <></>)}
        <div className="flex-right-center">
            {formulaParts.map((part: (string | number), i: number) => {
                if (typeof part === "string") {
                    return <div key={`part-${i}`}>{part}</div>
                } else if (typeof part === "number") {
                    return (part > 1 ? <sub key={`part-${i}`}>{part}</sub> : <div key={`part-${i}`}></div>)
                }
            })}
            {(isState ? <sub>({state})</sub> : <></>)}
        </div>
    </div>

  )
}

export default DisplayFormula;