import Title from "../common/Title";
import InstructionsList from "../common/InstructionsList";
import FormulasQuestionGroup from "./FormulasQuestionGroup";
import { PracticeProps } from "../../interfaces";
import { getCompoundInstructions } from "../common/helpers/getCompoundInstructions";
import { getCompoundDescriptions } from "../common/helpers/getCompoundDescriptions";
import { compoundTitles } from "../../configurations/compoundTitles";
import { formulasInstructions } from "../../configurations/formulasInstructions";

const FormulasPractice = ({type}: PracticeProps) => {
    const title: string = "Formulas of Compounds: " + (type.includes("ionic") ? "Ionic - ": "") + getCompoundDescriptions(type, compoundTitles);

    const instructionsList: string[] = getCompoundInstructions(type, formulasInstructions);

    return (
        <div>
            <Title title={title} />
            <InstructionsList label="Background and Instructions:" instructionsList={instructionsList} />
            <FormulasQuestionGroup type={type}/>
        </div>
    )
}

export default FormulasPractice;