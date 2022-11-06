import Title from "./Title";
import TypesContainer from "./TypesContainer";
import { generalPracticeTypes } from "./configurations/generalPracticeTypes";

// Displays the title for the home page and a container for the different types of practice available
// Called from App.tsx
const PracticeTypes = () => {
    return (
        <div className="flex-center-center flex-column">
            <Title title="Chemical Reactions Practice" />
            <TypesContainer types={generalPracticeTypes} />
        </div>
    )
}

export default PracticeTypes;