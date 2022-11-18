import DisplayMolecularFormula from "./DisplayMolecularFormula";
import { FormulaParts } from "../../compounds/configurations/interfaces";
import { StateOfMatter } from "../configurations/types";

// Displays coefficients, if appropriate, and formulas for water and carbon dioxide in a combustion reaction
// Called from /combustion/CombustionQuestion.tsx
const DisplayCombustionProducts = ({h2oCoefficient, co2Coefficient}: {h2oCoefficient: number, co2Coefficient: number}) => {
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
    <div className="flex-left-center med-gap">
        {(h2oCoefficient > 1 ? `${h2oCoefficient}` : <></>)}
        <DisplayMolecularFormula formulaParts={h2oParts} state={h2oState} />
        <div>+</div>
        {(co2Coefficient > 1 ? `${co2Coefficient}` : <></>)}
        <DisplayMolecularFormula formulaParts={co2Parts} state={co2State} />
    </div>
  )
}
export default DisplayCombustionProducts