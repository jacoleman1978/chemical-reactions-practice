import { useState } from "react";
import SubTitle from "./SubTitle";
import { InstructionsListProps } from "../../interfaces";

const InstructionsList = ({label, instructionsList}: InstructionsListProps) => {
    const [displayToggle, setDisplayToggle] = useState(true);

    const handleToggle = () => {
        setDisplayToggle(displayToggle => !displayToggle);
    }

    return (
        <>
            <SubTitle displayToggle={displayToggle} handleToggle={handleToggle} label={label} />
            
            <ul>
                {displayToggle && instructionsList.map((bullet: string, i: number) => <li key={"instruction" + i}>{bullet}</li>)}
            </ul>
        </>
    )
}

export default InstructionsList;