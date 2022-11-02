import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import NamingQuestionGroup from "./NamingQuestionGroup";
import { PracticeProps } from "../../interfaces";
import { getCompoundDescriptions } from "../common/helpers/getCompoundDescriptions";
import { getCompoundInstructions } from "../common/helpers/getCompoundInstructions";
import { compoundTitles } from "../../configurations/compoundTitles";
import { namingInstructions } from "../../configurations/namingInstructions";

const NamingPractice = ({type}: PracticeProps) => {
    const title: string = "Naming Compounds: " + (type.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(type, compoundTitles);

    const instructionsList: string[] = getCompoundInstructions(type, namingInstructions);

    return (
        <div className="full-width">
            <Title title={title} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <NamingQuestionGroup type={type}/>
        </div>
    )
}

export default NamingPractice;