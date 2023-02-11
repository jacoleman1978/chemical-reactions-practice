import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import CompoundsQuestionGroup from "./CompoundsQuestionGroup";
import AdditionalFormulasInstruction from "./AdditionalFormulasInstruction";
import { getCompoundInstructions, getCompoundPracticeTitle } from "./helpers/getCompoundInformation";
import { CompoundType } from "./configurations/compoundTypes";
import { PracticeType } from "../common/configurations/commonTypes";

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
        <div className="flex-center-center full-width">
            <section className="flex-center-center flex-column full-width">
                <Title title={title} />
                <AdditionalFormulasInstruction practiceType={practiceType} />
                <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
                <CompoundsQuestionGroup compoundType={compoundType} practiceType={practiceType} />
            </section>
        </div>
        
    )
}

export default CompoundsPractice;