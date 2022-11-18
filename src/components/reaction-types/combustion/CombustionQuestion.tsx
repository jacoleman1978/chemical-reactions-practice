import DisplayHydrocarbon from "../DisplayHydrocarbon";
import DisplayMolecularFormula from "../DisplayMolecularFormula";
import ReactionTypesDropdown from "../ReactionTypesDropdown";
import { CombustionReaction } from "../configurations/interfaces";
import { FormulaParts } from "../../compounds/configurations/interfaces";
import { StateOfMatter } from "../configurations/types";

// Container for the dropdown reaction types menu and displayed combustion reaction
// Called from /reaction-types/ReactionTypesQuestionsGroup.tsx
const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const { hydrocarbon, o2, h2o, co2} = equation;

  // Sets the constants common for all combustion reactions
  const hydrocarbonState: StateOfMatter = "g";

  const o2Parts: FormulaParts = {
    firstPart: ["O"],
    firstSubscript: "2",
    secondPart: [""],
    secondSubscript: "",
  }

  const o2State: StateOfMatter = "g";

  const h2oParts: FormulaParts = {
    firstPart: ["H"],
    firstSubscript: "2",
    secondPart: ["O"],
    secondSubscript: "",
  }

  const h2oState: StateOfMatter = "g";

  const co2Parts: FormulaParts = {
    firstPart: ["C"],
    firstSubscript: "",
    secondPart: ["O"],
    secondSubscript: "2",
  }

  const co2State: StateOfMatter = "g";

  return (
    <div className="grid-equations med-gap">
        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
        <div className="flex-left-center med-gap">
            <div className="flex-left-center med-gap">
                {(hydrocarbon.coefficient > 1 ? `${hydrocarbon.coefficient}` : <></>)}
                <DisplayHydrocarbon hydrocarbon={hydrocarbon} state={hydrocarbonState} />

                <div>+</div>

                {(o2.coefficient > 1 ? `${o2.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={o2Parts} state={o2State} />

                <i className="fa-solid fa-arrow-right-long"></i>

                {(h2o.coefficient > 1 ? `${h2o.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={h2oParts} state={h2oState} />

                <div>+</div>

                {(co2.coefficient > 1 ? `${co2.coefficient}` : <></>)}
                <DisplayMolecularFormula formulaParts={co2Parts} state={co2State} />
            </div>
        </div>
        
    </div>
  )
}
export default CombustionQuestion