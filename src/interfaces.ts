export interface CheckboxAction {
    addId: string;
    removeId: string;
}

export interface CheckboxInfo {
    value: string;
    label: string;
}

export interface ChecklistProps {
    title: string;
    listItems: CheckboxInfo[];
    checkedList: string[];
    setCheckedList: (arg0: string[]) => void;
}

export interface CompoundOptionsProps {
    includedCompoundTypes: string[];
    setIncludedCompoundTypes: (arg0: string[]) => void;
    includedIonTypes: string[];
    setIncludedIonTypes: (arg0: string[]) => void;
}