import { CheckboxAction } from "../../../interfaces";

// Called from Checkbox.tsx
/*
-onChange handler of checkboxes
-Adds the userId to addId if a user's remove box is checked.
-Adds the userId to removeId if a user's box is unchecked.
-Returns the checkboxAction object.
*/
const handleCheckboxChange = (boxName: string, isChecked: boolean): CheckboxAction => {
    let checkboxAction: CheckboxAction = {
        addId: "",
        removeId: ""
    }

    if (isChecked === true) {
        checkboxAction.addId = boxName;

    } else if (isChecked === false) {
        checkboxAction.removeId = boxName;
    }

    return checkboxAction
}

export default handleCheckboxChange;