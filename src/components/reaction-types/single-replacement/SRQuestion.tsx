import ReactionTypesDropdown from "../ReactionTypesDropdown";
import DisplayIonicCompound from "../DisplayIonicCompound";
import DisplayElement from "../DisplayElement";
import { SRReaction } from "../configurations/interfaces";

const SRQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: SRReaction}) => {
  const {reactantOne, reactantTwo, productOne, productTwo, type} = equation;

  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={type}/>

        <div className="flex-left-center med-gap">
            {(reactantOne.coefficient > 1 ? `${reactantOne.coefficient}` : <></>)}
            <DisplayIonicCompound compound={reactantOne} state={reactantOne.state} />

            <div>+</div>

            {(reactantTwo.coefficient > 1 ? `${reactantTwo.coefficient}` : <></>)}
            <DisplayElement element={reactantTwo} state={reactantTwo.element.state} />

            <i className="fa-solid fa-arrow-right-long"></i>

            {(productOne.coefficient > 1 ? `${productOne.coefficient}` : <></>)}
            <DisplayIonicCompound compound={productOne} state={productOne.state} />

            <div>+</div>

            {(productTwo.coefficient > 1 ? `${productTwo.coefficient}` : <></>)}
            <DisplayElement element={productTwo} state={productTwo.element.state} />            
        </div>
    </div>
  )
}
export default SRQuestion