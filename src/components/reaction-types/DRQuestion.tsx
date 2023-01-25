import ReactionTypesDropdown from "./ReactionTypesDropdown";
import DisplayFormula from "../compounds/DisplayFormula";
import Arrow from "../common/Arrow";
import { DRReaction } from "./configurations/interfaces";

const DRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: DRReaction}) => {
  const {reactantOne, reactantTwo, productOne, productTwo, type} = equation;

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

          <div>+</div>

          <DisplayFormula formulaParts={productTwo.formulaParts} coefficient={productTwo.coefficient} state={productTwo.state} />
        </div>
      </div>

      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>
    </section>
  )
}
export default DRQuestion