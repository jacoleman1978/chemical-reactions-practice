import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayIonicCompound from "../DisplayIonicCompound";
import DisplayElement from "../DisplayElement";
import { DecompositionReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed decomposition reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const DecompositionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {
  const {reactantOne, productOne, productTwo, type} = equation;

  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>

      <div className="flex-left-center med-gap">
        {(reactantOne.coefficient > 1 ? `${reactantOne.coefficient}` : <></>)}
        <DisplayIonicCompound compound={reactantOne} state={reactantOne.state} />

        <i className="fa-solid fa-arrow-right-long"></i>

        {(productOne.coefficient > 1 ? `${productOne.coefficient}` : <></>)}
        <DisplayElement element={productOne} state={productOne.element.state} />

        <div>+</div>
        
        {(productTwo.coefficient > 1 ? `${productTwo.coefficient}` : <></>)}
        <DisplayElement element={productTwo} state={productTwo.element.state} />
      </div>
    </div>
  )
}
export default DecompositionQuestion