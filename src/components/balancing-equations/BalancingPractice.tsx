import Title from "../common/Title";
import BalancingInfo from "./BalancingInfo";
import BalancingQuestionsGroup from "./BalancingQuestionsGroup";
import { useToggle } from "../../customHooks/useToggle";

// Container for the title, toggleable description and questions group
// Called from App.tsx
const BalancingPractice = () => {
    const [toggleFlag, handleToggle] = useToggle();
    
    return (
        <div className="full-width">
            <div className="flex-left-center med-gap" onClick={handleToggle}>
                <Title title={"Balancing Equations"} />
                <button className="toggle-btn">{(toggleFlag ? "-" : "+")}</button>
            </div>
            {toggleFlag && <BalancingInfo />}
            <BalancingQuestionsGroup />
        </div>
    )
}

export default BalancingPractice;