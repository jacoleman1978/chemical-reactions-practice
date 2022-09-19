import React, { useState, useEffect } from "react";
import handleCheckboxChange from "./helpers/handleCheckboxChange";
import { CheckboxAction } from "../../interfaces";

interface CheckboxProps {
    value: string;
    label: string;
    setCheckboxAction(stateValue: CheckboxAction): void;
}

// Called from CompoundTypes.tsx
const Checkbox = ({value, label, setCheckboxAction}: CheckboxProps) => {
    let [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement>>({} as React.ChangeEvent<HTMLInputElement>);

    useEffect(() => {
        if (event.hasOwnProperty("target")) {
            setCheckboxAction(handleCheckboxChange(event.target.value, event.target.checked));
        }
    }, [event, setCheckboxAction])

    return (
        <div className="flex-left-center">
            <input 
                type="checkbox" 
                name={value} 
                value={value} 
                onChange={setEvent}
                defaultChecked={value === "main" || value === "ionic"}
            />
            <label className="sm-text" htmlFor={value}>{label}</label>
        </div>
    )
}

export default Checkbox;