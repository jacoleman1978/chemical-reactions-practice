import FormattedIon from "./FormattedIon";
import { FormulaParts } from "./configurations/interfaces";

const CompoundFormula = ({formulaParts}: {formulaParts: FormulaParts}) => {
    return (
        <div className="flex-right-center">
            <FormattedIon formulaParts={formulaParts.firstPart}/>
            <sub>{formulaParts.firstSubscript}</sub>
            <FormattedIon formulaParts={formulaParts.secondPart}/>
            <sub>{formulaParts.secondSubscript}</sub>
        </div>
    )
}

export default CompoundFormula;