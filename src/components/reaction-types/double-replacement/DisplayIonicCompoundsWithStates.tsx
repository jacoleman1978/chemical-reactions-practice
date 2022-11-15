import CompoundFormulaWithStates from "./CompoundFormulaWithStates";
import { EquationCompound } from "../configurations/interfaces";

// Displays one or more compound EquationCompounds with right arrow
// Called from /decomposition/DecompQuestion.tsx
const DisplayIonicCompoundsWithStates = ({compounds}: {compounds: EquationCompound[]}) => {
  const displayStates: boolean = compounds.length > 1;
  
  return (
    <div className="flex-left-center med-gap">
      {
        compounds.map((compound: EquationCompound, i: number) => {
          return (
            <div key={`compound-${i}`}  className="flex-left-center med-gap">
              {(compound.coefficient > 1 ? `${compound.coefficient} ` : "")}
              <CompoundFormulaWithStates formulaParts={compound.compound.formulaParts} state={compound.state} />
              {(i < compounds.length - 1 ? " + ": "")}
            </div>
          )
        })
      }
    </div>
  )
}
export default DisplayIonicCompoundsWithStates;