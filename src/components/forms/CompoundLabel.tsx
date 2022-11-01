import { Form } from "react-bootstrap";
import FormattedIon from "../common/FormattedIon";
import { CompoundLabelProps } from "../../interfaces"

const CompoundLabel = ({formulaParts}: CompoundLabelProps) => {


    return (
        <Form.Label>
            <FormattedIon formulaParts={formulaParts.firstPart}/>
            <sub>{formulaParts.firstSubscript}</sub>
            <FormattedIon formulaParts={formulaParts.secondPart}/>
            <sub>{formulaParts.secondSubscript}</sub>
        </Form.Label>
    )
}

export default CompoundLabel;