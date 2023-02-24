import { PracticeType } from "../common/configurations/commonTypes";
/** 
 * Always on display for "formulas" practiceType questions, indicating the format needed to write a compound formula
 * @param practiceType A string indicating the PracticeType type literal
 * @returns ReactElement
 */
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