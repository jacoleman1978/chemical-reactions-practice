import FormattedIon from "../../compounds/FormattedIon";
import { StateOfMatter } from "../configurations/types";
import { FormulaParts } from "../../compounds/configurations/interfaces";

// Displays the formatted compound using formulaParts from the Compound object
// Called from /compounds/NamingQuestion.tsx
const CompoundFormulaWithStates = ({formulaParts, state}: {formulaParts: FormulaParts, state: StateOfMatter}) => {
    return (
        <div className="flex-right-center">
            <FormattedIon formulaParts={formulaParts.firstPart}/>
            <sub>{formulaParts.firstSubscript}</sub>
            <FormattedIon formulaParts={formulaParts.secondPart}/>
            <sub>{`${formulaParts.secondSubscript}(${state})`}</sub>
        </div>
    )
}

export default CompoundFormulaWithStates;