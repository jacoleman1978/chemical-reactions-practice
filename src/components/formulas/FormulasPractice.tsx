import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import FormulasQuestionGroup from "./FormulasQuestionGroup";
import { PracticeProps } from "../../interfaces";
import { getNamingData } from "../naming/helpers/getNamingData";
import { compoundTitles } from "../../configurations/compoundTitles";
import { namingInstructions } from "../../configurations/namingInstructions";

const FormulasPractice = ({type}: PracticeProps) => {
    const title: string = "Naming Compounds: " + (type.includes("ionic") ? "Ionic - ": "") + getNamingData(type, compoundTitles);

    const instructionsList: string[] = getNamingData(type, namingInstructions).split(".");

    return (
        <div>
            <Title title={title} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <FormulasQuestionGroup type={type}/>
        </div>
    )
}

export default FormulasPractice;