import DisplayFormula from "../compounds/DisplayFormula";
import { DecompositionReaction } from "../reaction-types/configurations/interfaces";

const DecompositionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DecompositionReaction}) => {
  const {reactantOne, productOne, productTwo, type} = equation;

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={reactantOne.formulaParts} coefficient={1} state={reactantOne.state} />

          <i className="fa-solid fa-arrow-right-long"></i>
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={productOne.formulaParts} coefficient={1} state={productOne.state} />

          <div>+</div>

          <DisplayFormula formulaParts={productTwo.formulaParts} coefficient={1} state={productTwo.state} />
        </div>
      </div>
    </div>
  )
}
export default DecompositionQuestion