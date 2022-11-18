import DisplayCombustionReactants from "./DisplayCombustionReactants";
import DisplayCombustionProducts from "./DisplayCombustionProducts";
import ReactionTypesDropdown from "../ReactionTypesDropdown";
import { CombustionReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combustion reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
        <div className="flex-left-center med-gap">
            <DisplayCombustionReactants hydrocarbon={equation.hydrocarbon} hydrocarbonCoefficient={equation.hydrocarbon.coefficient} o2Coefficient={equation.o2.coefficient} />
            <i className="fa-solid fa-arrow-right-long"></i>
            <DisplayCombustionProducts h2oCoefficient={equation.h2o.coefficient} co2Coefficient={equation.co2.coefficient} />
        </div>
        
    </div>
  )
}
export default CombustionQuestion