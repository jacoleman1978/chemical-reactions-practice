import React, { useState, useEffect } from "react";
import Checkbox from "../forms/Checkbox";
import updateIncludedTypes from "../forms/helpers/updateIncludedTypes";
import { CheckboxAction } from "../../interfaces";

const CompoundTypes = () => {
    let [checkboxAction, setCheckboxAction] = useState<CheckboxAction>({} as CheckboxAction);
    let [includedTypes, setIncludedTypes] = useState<string[]>(["main"]);

    useEffect(() => {
        if (checkboxAction.hasOwnProperty("addId")) {
            updateIncludedTypes(checkboxAction, includedTypes, setIncludedTypes);
            setCheckboxAction({} as CheckboxAction)
        }
    }, [checkboxAction, includedTypes])

    interface CheckboxInfo {
        value: string;
        label: string;
    }

    let compoundTypes: CheckboxInfo[] = [
        {value: "main", label: "Main Group"}, 
        {value: "transition", label: "Transition Metals"},
        {value: "polyatomic", label: "Polyatomic"},
        {value: "acids", label: "Acids"}
    ];

    const display = compoundTypes.map((type:CheckboxInfo) => {
        return <Checkbox key={type.value} value={type.value} label={type.label} setCheckboxAction={setCheckboxAction} />
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default CompoundTypes;