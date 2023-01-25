import ReactionTypesDropdown from "./ReactionTypesDropdown";
import DisplayFormula from "../compounds/DisplayFormula";
import Arrow from "../common/Arrow";
import { CombinationReaction } from "./configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combination reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombinationQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombinationReaction}) => {
  const {reactantOne, reactantTwo, productOne, type} = equation;

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={reactantOne.coefficient} state={reactantOne.state} />

          <div>+</div>

          <DisplayFormula formulaParts={reactantTwo.formulaParts} coefficient={reactantTwo.coefficient} state={reactantTwo.state} />

          <Arrow />
          
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={productOne.formulaParts} coefficient={productOne.coefficient} state={productOne.state} />
        </div>
      </div>

      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>
    </section>
  )
}
export default CombinationQuestion