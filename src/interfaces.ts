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

export interface MenuLink {
    path: string;
    label: string;
}

export interface NavDropdownMenuProps {
    title: string;
    options: MenuLink[];
}

export interface NavMenuProps {
    path: string;
}

export interface Description {
    title: string;
    path: string;
    description: string;
}

export interface PracticeTypeProps {
    type: string;
}

export interface TitleProps {
    title: string;
}

export interface TypesContainerProps {
    types: Description[];
}