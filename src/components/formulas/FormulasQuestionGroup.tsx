import FormulasQuestion from "./FormulasQuestion";
import { QuestionGroupProps } from "../../interfaces";

const FormulasQuestionGroup = ({type}: QuestionGroupProps) => {
    return (
        <FormulasQuestion type={type} morePracticeToggle={false} />
    )
}

export default FormulasQuestionGroup;