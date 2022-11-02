import FormattedIon from "../common/FormattedIon";
import { CompoundFormulaProps } from "../../interfaces"

const CompoundFormula = ({formulaParts}: CompoundFormulaProps) => {
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