import CompoundFormula from "../compounds/CompoundFormula";
import { EquationCompound } from "./configurations/interfaces";

// Displays one or more compound EquationCompounds with right arrow
// Called from /decomposition/DecompQuestion.tsx
const DisplayIonicCompounds = ({compounds}: {compounds: EquationCompound[]}) => {
  return (
    <div className="flex-left-center med-gap">
      {
        compounds.map((compound: EquationCompound, i: number) => {
          return (
            <div key={`compound-${i}`}  className="flex-left-center med-gap">
              {(compound.coefficient > 1 ? `${compound.coefficient} ` : "")}
              <CompoundFormula formulaParts={compound.compound.formulaParts} />
              {(i < compounds.length - 1 ? " + ": "")}
            </div>
          )
        })
      }
    </div>
  )
}
export default DisplayIonicCompounds;