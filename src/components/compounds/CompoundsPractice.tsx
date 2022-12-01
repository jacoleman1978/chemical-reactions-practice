import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import CompoundsQuestionsGroup from "./CompoundsQuestionsGroup";
import AdditionalFormulasInstruction from "./AdditionalFormulasInstruction";
import { getCompoundInstructions } from "./helpers/getCompoundInstructions";
import { getCompoundPracticeTitle } from "./helpers/getCompoundPracticeTitle";
import { CompoundType, PracticeType } from "../common/configurations/types";

interface CompoundsPracticeProps {
    compoundType: CompoundType,
    practiceType: PracticeType
}

// Displays the different types of "naming" and "formula" practiceType title, instructions and question group
// Called from App.tsx
const CompoundsPractice = ({compoundType, practiceType}: CompoundsPracticeProps) => {
    const title: string = getCompoundPracticeTitle(compoundType, practiceType);
    const instructionsList: string[] = getCompoundInstructions(compoundType, practiceType);

    return (
        <div>
            <Title title={title} />
            <AdditionalFormulasInstruction practiceType={practiceType} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <CompoundsQuestionsGroup compoundType={compoundType} practiceType={practiceType} />
        </div>
    )
}

export default CompoundsPractice;