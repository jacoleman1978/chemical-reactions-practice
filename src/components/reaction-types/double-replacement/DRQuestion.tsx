import DisplayIonicCompoundsWithStates from "./DisplayIonicCompoundsWithStates";
import ReactionTypesDropdown from "../ReactionTypesDropdown";
import { DRReaction } from "../configurations/interfaces";

const DRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DRReaction}) => {
  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
        <div className="flex-left-center med-gap">
            <DisplayIonicCompoundsWithStates compounds={[equation.reactantOne, equation.reactantTwo]} />
            <i className="fa-solid fa-arrow-right-long"></i>
            <DisplayIonicCompoundsWithStates compounds={[equation.productOne, equation.productTwo]} />
        </div>
    </div>
  )
}
export default DRQuestion