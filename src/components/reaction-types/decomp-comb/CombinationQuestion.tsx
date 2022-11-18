import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayIonicCompound from "../DisplayIonicCompound";
import DisplayElement from "../DisplayElement";
import { CombinationReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combination reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombinationQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombinationReaction}) => {
  const {reactantOne, reactantTwo, productOne, type} = equation;

  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>

      <div className="flex-left-center med-gap">
        {(reactantOne.coefficient > 1 ? `${reactantOne.coefficient}` : <></>)}
        <DisplayElement element={reactantOne} state={reactantOne.element.state} />

        <div>+</div>

        {(reactantTwo.coefficient > 1 ? `${reactantTwo.coefficient}` : <></>)}
        <DisplayElement element={reactantTwo} state={reactantTwo.element.state} />

        <i className="fa-solid fa-arrow-right-long"></i>
        
        {(productOne.coefficient > 1 ? `${productOne.coefficient}` : <></>)}
        <DisplayIonicCompound compound={productOne} state={productOne.state} />
      </div>
    </div>
  )
}
export default CombinationQuestion