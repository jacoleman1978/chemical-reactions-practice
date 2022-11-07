import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import CompoundsQuestionsGroup from "./CompoundsQuestionsGroup";
import AdditionalFormulasInstruction from "./AdditionalFormulasInstruction";
import { getCompoundInstructions } from "./helpers/getCompoundInstructions";
import { getCompoundPracticeTitle } from "./helpers/getCompoundPracticeTitle";
import { CompoundsPracticeProps } from "./configurations/interfaces";

// Displays the different types of "naming" and "formula" practiceType title, instructions and question group
// Called from App.tsx
const CompoundsPractice = ({type, practiceType}: CompoundsPracticeProps) => {
    const title: string = getCompoundPracticeTitle(type, practiceType);
    const instructionsList: string[] = getCompoundInstructions(type, practiceType);

    return (
        <div>
            <Title title={title} />
            <AdditionalFormulasInstruction practiceType={practiceType} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <CompoundsQuestionsGroup type={type} practiceType={practiceType} />
        </div>
    )
}

export default CompoundsPractice;