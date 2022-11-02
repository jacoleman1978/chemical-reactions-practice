import FormattedIon from "../common/FormattedIon";
import { CompoundLabelProps } from "../../interfaces"

const CompoundLabel = ({formulaParts}: CompoundLabelProps) => {
    return (
        <div className="flex-right-center">
            <FormattedIon formulaParts={formulaParts.firstPart}/>
            <sub>{formulaParts.firstSubscript}</sub>
            <FormattedIon formulaParts={formulaParts.secondPart}/>
            <sub>{formulaParts.secondSubscript}</sub>
        </div>
    )
}

export default CompoundLabel;