import { CheckboxAction } from "../../../interfaces";

// Called from CompoundOptions.tsx
const updateIncludedTypes = (checkboxAction: CheckboxAction, includedTypes: string[], setIncludedTypes: (arg0: string[]) => void): void => {
    if (checkboxAction.addId.length > 0) {
        let updatedTypes: string[] = [...includedTypes, checkboxAction.addId];
        setIncludedTypes(updatedTypes);

    } else if (checkboxAction.removeId.length > 0) {
        let updatedTypes: string[] = [...includedTypes];
        let typeIndex: number = updatedTypes.indexOf(checkboxAction.removeId);

        if (typeIndex > -1) {
            updatedTypes.splice(typeIndex, 1);
            setIncludedTypes(updatedTypes);
        }
    }
}

export default updateIncludedTypes;