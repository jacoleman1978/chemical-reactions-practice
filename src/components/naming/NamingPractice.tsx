import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import NamingForm from "./NamingForm";
import { NamingPracticeProps } from "../../interfaces";
import { getNamingData } from "./helpers/getNamingData";
import { compoundTitles } from "../../configurations/compoundTitles";
import { namingInstructions } from "../../configurations/namingInstructions";

const NamingPractice = ({type}: NamingPracticeProps) => {
    const title: string = "Naming Compounds: " + (type.includes("ionic") ? "Ionic - ": "") + getNamingData(type, compoundTitles);

    const instructionsList: string[] = getNamingData(type, namingInstructions).split(".");

    return (
        <div>
            <Title title={title} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <NamingForm type={type}/>
        </div>
    )
}

export default NamingPractice;