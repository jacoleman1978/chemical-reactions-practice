import SubTitle from "./SubTitle";
import { useToggle } from "../../customHooks/useToggle";
import { InstructionsListProps } from "./configurations/interfaces"

// Displays the label as a subtitle with a clickable '+' or '-' to toggle the passed in instructionsList
// Called from /compounds/CompoundsPractice.tsx
const InstructionsList = ({label, instructionsList}: InstructionsListProps) => {
    const [toggleFlag, handleToggle] = useToggle();

    return (
        <>
            <SubTitle displayToggle={toggleFlag} handleToggle={handleToggle} label={label} />
            
            <ul>
                {toggleFlag && instructionsList.map((bullet: string, i: number) => <li key={"instruction" + i}>{bullet}</li>)}
            </ul>
        </>
    )
}

export default InstructionsList;