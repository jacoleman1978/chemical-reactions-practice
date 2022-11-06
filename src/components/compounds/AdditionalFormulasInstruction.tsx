import { PracticeType } from "../common/configurations/types";

const AdditionalFormulasInstruction = ({practiceType}: {practiceType: PracticeType}) => {
    if (practiceType !== "formulas") {
        return <></>
    }
    
    return (
        <p>
            <em>Use a '/' immediately before and after anything that should be a subscript. For example H<sub>2</sub>O would be written as 'H/2/O'.</em>
        </p>
    )
}

export default AdditionalFormulasInstruction;