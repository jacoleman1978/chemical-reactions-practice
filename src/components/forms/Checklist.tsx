import { useState, useEffect } from "react";
import updateIncludedTypes from "./helpers/updateIncludedTypes";
import generateChecklist from "./helpers/generateChecklist";
import { CheckboxAction, ChecklistProps } from "../../interfaces";

// Called from /naming/Naming.tsx
const Checklist = ({title, listItems, checkedList, setCheckedList}: ChecklistProps) => {
    let [checkboxAction, setCheckboxAction] = useState<CheckboxAction>({} as CheckboxAction);

    // Keep includedTypes up to date with checked checkboxes
    useEffect(() => {
        if (checkboxAction.hasOwnProperty("addId")) {
            updateIncludedTypes(checkboxAction, checkedList, setCheckedList);
            setCheckboxAction({} as CheckboxAction)
        }
    }, [checkboxAction, checkedList, setCheckedList])

    return (
        <fieldset className="flex-center-left flex-column med-gap sm-radius">
            <legend>{title}</legend>
            {generateChecklist(listItems, setCheckboxAction)}
        </fieldset>
    )
}

export default Checklist;