import DisplayMolecularFormula from "./DisplayMolecularFormula";
import DisplayHydrocarbon from "./DisplayHydrocarbon";
import { FormulaParts } from "../../compounds/configurations/interfaces";
import { Hydrocarbon } from "../configurations/interfaces";
import { StateOfMatter } from "../configurations/types";

// Displays coefficients, if appropriate, and formulas for water and carbon dioxide in a combustion reaction
// Called from /combustion/CombustionQuestion.tsx
const DisplayCombustionReactants = ({hydrocarbon, hydrocarbonCoefficient, o2Coefficient}: {hydrocarbon: Hydrocarbon, hydrocarbonCoefficient: number, o2Coefficient: number}) => {
  const hydrocarbonState: StateOfMatter = "g";

  const o2Parts: FormulaParts = {
    firstPart: ["O"],
    firstSubscript: "2",
    secondPart: [""],
    secondSubscript: "",
  }

  const o2State: StateOfMatter = "g";

  return (
    <div className="flex-left-center med-gap">
        {(hydrocarbonCoefficient > 1 ? `${hydrocarbonCoefficient}` : <></>)}
        <DisplayHydrocarbon hydrocarbon={hydrocarbon} state={hydrocarbonState} />
        <div>+</div>
        {(o2Coefficient > 1 ? `${o2Coefficient}` : <></>)}
        <DisplayMolecularFormula formulaParts={o2Parts} state={o2State} />
    </div>
  )
}
export default DisplayCombustionReactants