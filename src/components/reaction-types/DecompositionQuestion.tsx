import ReactionTypesDropdown from "./ReactionTypesDropdown";
import DisplayFormula from "../compounds/DisplayFormula";
import { DecompositionReaction } from "./configurations/interfaces";

// Container for the dropdown reaction types menu and displayed decomposition reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const DecompositionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {
  const {reactantOne, productOne, productTwo, type} = equation;

  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>

      <div className="flex-left-center med-gap">
        <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={reactantOne.coefficient} state={reactantOne.state} />

        <i className="fa-solid fa-arrow-right-long"></i>

        <DisplayFormula formulaParts={productOne.formulaParts} coefficient={productOne.coefficient} state={productOne.state} />

        <div>+</div>
        
        <DisplayFormula formulaParts={productTwo.formulaParts} coefficient={productTwo.coefficient} state={productTwo.state} />
      </div>
    </div>
  )
}
export default DecompositionQuestion