import DisplayFormula from "../compounds/DisplayFormula";
import { CombinationReaction } from "../reaction-types/configurations/interfaces";

const CombinationQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombinationReaction}) => {
  const {reactantOne, reactantTwo, productOne, type} = equation;

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={1} state={reactantOne.state} />

          <div>+</div>

          <DisplayFormula formulaParts={reactantTwo.formulaParts} coefficient={1} state={reactantTwo.state} />

          <i className="fa-solid fa-arrow-right-long"></i>
          
          
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={productOne.formulaParts} coefficient={1} state={productOne.state} />
        </div>
      </div>
    </div>
  )
}
export default CombinationQuestion