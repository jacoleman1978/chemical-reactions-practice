import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import NamingQuestionGroup from "./NamingQuestionGroup";
import { PracticeProps } from "../../interfaces";
import { getNamingData } from "./helpers/getNamingData";
import { compoundTitles } from "../../configurations/compoundTitles";
import { namingInstructions } from "../../configurations/namingInstructions";

const NamingPractice = ({type}: PracticeProps) => {
    const title: string = "Naming Compounds: " + (type.includes("ionic") ? "Ionic - ": "") + getNamingData(type, compoundTitles);

    const instructionsList: string[] = getNamingData(type, namingInstructions).split(".");

    return (
        <div>
            <Title title={title} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <NamingQuestionGroup type={type}/>
        </div>
    )
}

export default NamingPractice;