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

export interface TitleProps {
    title: string;
}

export interface TypesContainerProps {
    types: Description[];
}

export interface NamingPracticeProps {
    type: string;
}

export interface IonicDescription {
    main: string,
    transition: string,
    polyatomic: string,
    mixed: string,
}

export interface CompoundDescription {
    ionic: IonicDescription,
    acids: string,
    molecular: string,
    mixed: string,
}

export interface InstructionsListProps {
    label: string;
    instructionsList: string[];
}

export interface Ion {
    name: string,
    symbol: string,
    charge: number,
    isPolyatomic: boolean,
}