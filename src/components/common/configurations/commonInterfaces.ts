export interface Description {
    title: string;
    path: string;
    description: string;
}

export interface InstructionsListProps {
    label: string;
    instructionsList: string[];
}

export interface SubtitleProps {
    displayToggle: boolean;
    handleToggle: () => void;
    label: string;
}

