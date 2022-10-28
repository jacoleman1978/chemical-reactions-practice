import { NamingPracticeProps } from "../../interfaces";
import { makeIonicCompound } from "../common/helpers/makeIonicCompound";
import { Compound } from "../../interfaces";

const NamingQuestion = ({type}: NamingPracticeProps) => {
    const compound: Compound = makeIonicCompound(type);

    return (
        <div>
            Question
        </div>
    )
}

export default NamingQuestion;