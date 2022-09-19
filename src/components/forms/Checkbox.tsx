import React, { useState, useEffect } from "react";
import { CheckboxAction } from "../../interfaces";
import handleCheckboxChange from "./helpers/handleCheckboxChange";

interface CheckboxProps {
    value: string;
    label: string;
    setCheckboxAction(stateValue: CheckboxAction): void;
}

const Checkbox = ({value, label, setCheckboxAction}: CheckboxProps) => {
    let [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement>>({} as React.ChangeEvent<HTMLInputElement>);

    useEffect(() => {
        if (event.hasOwnProperty("target")) {
            setCheckboxAction(handleCheckboxChange(event.target.value, event.target.checked));
        }
    }, [event, setCheckboxAction])

    return (
        <div>
            <input 
                type="checkbox" 
                name={value} 
                value={value} 
                onChange={setEvent}
                defaultChecked={value === "main"}
            />
            <label htmlFor={value}>{label}</label>
        </div>
    )
}

export default Checkbox;