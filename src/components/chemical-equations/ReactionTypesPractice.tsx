import Title from "../common/Title";
import ReactionTypesDescription from "./ReactionTypesDescription";
import ReactionTypesQuestionsGroup from "./ReactionTypesQuestionsGroup";
import { useToggle } from "../../customHooks/useToggle";

/**
 * Container for the title, toggleable description and questions group
 * @returns ReactElement
 */
const ReactionTypesPractice = () => {
    const [toggleFlag, handleToggle] = useToggle();
    
    return (
        <div className="full-width">
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