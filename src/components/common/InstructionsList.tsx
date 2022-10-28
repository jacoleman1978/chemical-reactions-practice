import { InstructionsListProps } from "../../interfaces";

const InstructionsList = ({label, instructionsList}: InstructionsListProps) => {
    return (
        <>
            <h2 className="subheading">Background and Instructions:</h2>
            <ul>
                {instructionsList.map((bullet: string, i: number) => <li key={"instruction" + i}>{bullet}</li>)}
            </ul>
        </>
    )
}

export default InstructionsList;