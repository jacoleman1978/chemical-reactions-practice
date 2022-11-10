import Title from "../common/Title";
import ReactionTypesDescription from "./ReactionTypesDescription";
import ReactionTypesQuestionsGroup from "./ReactionTypesQuestionsGroup";
import { useToggle } from "../../customHooks/useToggle";

// Container for the title, toggleable description and questions group
// Called from App.tsx
const ReactionTypesPractice = () => {
    const [toggleFlag, handleToggle] = useToggle();
    
    return (
        <div>
            <div className="flex-left-center med-gap" onClick={handleToggle}>
                <Title title={"Reaction Types"} />
                <button className="toggle-btn">{(toggleFlag ? "-" : "+")}</button>
            </div>
            {toggleFlag && <ReactionTypesDescription />}
            <ReactionTypesQuestionsGroup />
        </div>
    )
}

export default ReactionTypesPractice;