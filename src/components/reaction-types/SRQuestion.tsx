import ReactionTypesDropdown from "./ReactionTypesDropdown";
import DisplayFormula from "../compounds/DisplayFormula";
import { SRReaction } from "./configurations/interfaces";

const SRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: SRReaction}) => {
  const {reactantCompound, reactantElement, productCompound, productElement, type} = equation;

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
            <DisplayFormula formulaParts={reactantCompound.formulaParts} coefficient={reactantCompound.coefficient} state={reactantCompound.state} />

            <div>+</div>

            <DisplayFormula formulaParts={reactantElement.formulaParts} coefficient={reactantElement.coefficient} state={reactantElement.state} />

            <i className="fa-solid fa-arrow-right-long"></i>        
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={productCompound.formulaParts} coefficient={productCompound.coefficient} state={productCompound.state} />

          <div>+</div>

          <DisplayFormula formulaParts={productElement.formulaParts} coefficient={productElement.coefficient} state={productElement.state} /> 
        </div>
      </div>

      <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>
    </div>
  )
}
export default SRQuestion