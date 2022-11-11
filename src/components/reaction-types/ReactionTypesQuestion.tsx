import ReactionTypesDropdown from "./ReactionTypesDropdown"
import DisplayReactants from "./DisplayReactants";
import DisplayProducts from "./DisplayProducts";
import { DecompositionReaction } from "./configurations/interfaces";

// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const ReactionTypesQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {

  console.log(equation)
  return (
    <div className="grid-equations med-gap">
      <ReactionTypesDropdown />
      <div className="flex-left-center med-gap">
        <DisplayReactants reactants={[equation.reactantOne]} />
        <DisplayProducts products={[equation.productOne, equation.productTwo]} />
      </div>
    </div>
  )
}
export default ReactionTypesQuestion