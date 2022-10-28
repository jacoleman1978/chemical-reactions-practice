import Title from "./Title";
import TypesContainer from "./TypesContainer";
import { generalPracticeTypes } from "../../configurations/generalPracticeTypes";

// Called from App.tsx
const PracticeType = () => {
    return (
        <div className="flex-center-center flex-column">
            <Title title="Chemical Reactions Practice" />
            <TypesContainer types={generalPracticeTypes} />
        </div>
    )
}

export default PracticeType;