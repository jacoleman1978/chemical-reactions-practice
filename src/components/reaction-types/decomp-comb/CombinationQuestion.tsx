import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayIonicCompounds from "../DisplayIonicCompounds";
import DisplayElements from "../DisplayElements";
import { CombinationReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combination reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombinationQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombinationReaction}) => {
  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
      <div className="flex-left-center med-gap">
        <DisplayElements elements={[equation.reactantOne, equation.reactantTwo]} />
        <i className="fa-solid fa-arrow-right-long"></i>
        <DisplayIonicCompounds compounds={[equation.productOne]} />
      </div>
    </div>
  )
}
export default CombinationQuestion