import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayFormula from "../../compounds/DisplayFormula";
import { CombinationReaction } from "../newConfigurations/interfaces";

// Container for the dropdown reaction types menu and displayed combination reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombinationQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombinationReaction}) => {
  const {reactantOne, reactantTwo, productOne, type} = equation;

  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>

      <div className="flex-left-center med-gap">
        <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={reactantOne.coefficient} state={reactantOne.state} />

        <div>+</div>

        <DisplayFormula formulaParts={reactantTwo.formulaParts} coefficient={reactantTwo.coefficient} state={reactantTwo.state} />

        <i className="fa-solid fa-arrow-right-long"></i>
        
        <DisplayFormula formulaParts={productOne.formulaParts} coefficient={productOne.coefficient} state={productOne.state} />
      </div>
    </div>
  )
}
export default CombinationQuestion