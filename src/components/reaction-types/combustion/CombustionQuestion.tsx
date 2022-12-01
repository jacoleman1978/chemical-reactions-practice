import DisplayFormula from "../../compounds/DisplayFormula";
import ReactionTypesDropdown from "../ReactionTypesDropdown";
import { CombustionReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combustion reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const {hydrocarbon, o2, h2o, co2} = equation;

  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
        <div className="flex-left-center med-gap">
            <div className="flex-left-center med-gap">
                <DisplayFormula formulaParts={hydrocarbon.formulaParts} coefficient={hydrocarbon.coefficient} state={hydrocarbon.state} />

                <div>+</div>

                <DisplayFormula formulaParts={o2.formulaParts} coefficient={o2.coefficient} state={o2.state} />

                <i className="fa-solid fa-arrow-right-long"></i>

                <DisplayFormula formulaParts={h2o.formulaParts} coefficient={h2o.coefficient} state={h2o.state} />

                <div>+</div>

                <DisplayFormula formulaParts={co2.formulaParts} coefficient={co2.coefficient} state={co2.state} />
            </div>
        </div>
        
    </div>
  )
}
export default CombustionQuestion