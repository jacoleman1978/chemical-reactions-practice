import ReactionTypesDropdown from "./ReactionTypesDropdown";
import DisplayFormula from "../compounds/DisplayFormula";
import Arrow from "../common/Arrow";
import { SRReaction } from "./configurations/interfaces";

const SRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: SRReaction}) => {
  const {reactantCompound, reactantElement, productCompound, productElement, type} = equation;

  return (
    <section className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
            <DisplayFormula formulaParts={reactantCompound.formulaParts} coefficient={reactantCompound.coefficient} state={reactantCompound.state} />

            <div>+</div>

            <DisplayFormula formulaParts={reactantElement.formulaParts} coefficient={reactantElement.coefficient} state={reactantElement.state} />

            <Arrow />        
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={productCompound.formulaParts} coefficient={productCompound.coefficient} state={productCompound.state} />

          <div>+</div>

          <DisplayFormula formulaParts={productElement.formulaParts} coefficient={productElement.coefficient} state={productElement.state} /> 
        </div>
      </div>

      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>
    </section>
  )
}
export default SRQuestion