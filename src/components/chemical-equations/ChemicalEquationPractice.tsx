import Title from "../common/Title";
import ReactionTypesDescription from "./ReactionTypesDescription";
import BalancingInfo from "./BalancingInfo";
import ChemicalEquationQuestionsGroup from "./ChemicalEquationQuestionsGroup";
import { useToggle } from "../../customHooks/useToggle";
import { PracticeType } from "../common/configurations/commonTypes";

const ChemicalEquationPractice = ({practiceType}: {practiceType: PracticeType}) => {
    const [toggleFlag, handleToggle] = useToggle();

    let titleText: string = "";

    if (practiceType === "balancing") {
        titleText = "Balancing Equations";

    } else if (practiceType === "reaction-types") {
        titleText = "Reaction Types";
    }

    return (
        <div className="full-width">
            <div className="flex-left-center med-gap" onClick={handleToggle}>
                <Title title={titleText} />
                <button className="toggle-btn">{(toggleFlag ? "-" : "+")}</button>
            </div>

            {toggleFlag && practiceType === "balancing" ? <BalancingInfo /> : null}
            
            {toggleFlag && practiceType === "reaction-types" ? <ReactionTypesDescription /> : null}

            <ChemicalEquationQuestionsGroup practiceType={practiceType} />
        </div>
  )
}
export default ChemicalEquationPractice;