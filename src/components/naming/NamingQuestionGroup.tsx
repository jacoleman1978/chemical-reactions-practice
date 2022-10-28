import NamingQuestion from "./NamingQuestion";
import { NamingPracticeProps } from "../../interfaces";

const NamingQuestionGroup = ({type}: NamingPracticeProps) => {
    return (
        <div>
            <NamingQuestion type={type} />
        </div>
    )
}

export default NamingQuestionGroup;