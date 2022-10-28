import { useState } from "react";
import { InstructionsListProps } from "../../interfaces";

const InstructionsList = ({label, instructionsList}: InstructionsListProps) => {
    const [displayToggle, setDisplayToggle] = useState(true);

    const handleToggle = () => {
        setDisplayToggle(displayToggle => !displayToggle);
    }

    return (
        <>
            <h2 className="subheading" onClick={handleToggle}>{label}</h2>
            <ul>
                {displayToggle && instructionsList.map((bullet: string, i: number) => <li key={"instruction" + i}>{bullet}</li>)}
            </ul>
        </>
    )
}

export default InstructionsList;