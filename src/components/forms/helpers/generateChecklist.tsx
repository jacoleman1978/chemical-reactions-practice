import Checkbox from "../Checkbox";
import { CheckboxAction, CheckboxInfo } from "../../../interfaces";

const generateChecklist = (entries: CheckboxInfo[], setCheckboxAction: (arg0: CheckboxAction) => void) => {
    let checklist = entries.map((entry: CheckboxInfo) => {
        return <Checkbox key={entry.value} value={entry.value} label={entry.label} setCheckboxAction={setCheckboxAction} />
    })

    return checklist
}

export default generateChecklist;