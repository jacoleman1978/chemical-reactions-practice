import DisplayHydrocarbon from "../DisplayHydrocarbon";
import DisplayMolecularFormula from "../DisplayMolecularFormula";
import ReactionTypesDropdown from "../ReactionTypesDropdown";
import { combustionFormulaParts } from "../configurations/combustionFormulaParts";
import { CombustionReaction } from "../configurations/interfaces";

// Container for the dropdown reaction types menu and displayed combustion reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const {hydrocarbon, o2, h2o, co2} = equation;

  // Sets the constants common for all combustion reactions
  const {o2Parts, h2oParts, co2Parts} = combustionFormulaParts

  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
        <div className="flex-left-center med-gap">
            <div className="flex-left-center med-gap">
                {(hydrocarbon.coefficient > 1 ? `${hydrocarbon.coefficient}` : <></>)}
                <DisplayHydrocarbon hydrocarbon={hydrocarbon} state={"g"} />

                <div>+</div>

                {(o2.coefficient > 1 ? `${o2.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={o2Parts} state={"g"} />

                <i className="fa-solid fa-arrow-right-long"></i>

                {(h2o.coefficient > 1 ? `${h2o.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={h2oParts} state={"g"} />

                <div>+</div>

                {(co2.coefficient > 1 ? `${co2.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={co2Parts} state={"g"} />
            </div>
        </div>
        
    </div>
  )
}
export default CombustionQuestion