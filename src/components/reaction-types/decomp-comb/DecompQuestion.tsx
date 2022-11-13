import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayIonicCompounds from "../DisplayIonicCompounds";
import DisplayElements from "../DisplayElements";
import { DecompositionReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed decomposition reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const DecompQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {
  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
      <div className="flex-left-center med-gap">
        <DisplayIonicCompounds compounds={[equation.reactantOne]} />
        <i className="fa-solid fa-arrow-right-long"></i>
        <DisplayElements elements={[equation.productOne, equation.productTwo]} />
      </div>
    </div>
  )
}
export default DecompQuestion