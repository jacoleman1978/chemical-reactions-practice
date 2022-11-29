import DisplayFormula from "../compounds/DisplayFormula";
import { EquationCompound } from "./configurations/interfaces";
import { StateOfMatter } from "./configurations/types";

// Displays one  EquationCompounds with state of matter
// Called from /decomposition/DecompQuestion.tsx
const DisplayIonicCompound = ({compound, state}: {compound: EquationCompound, state: StateOfMatter}) => {
  // return (
  //   <div className="flex-left-center">
  //     <DisplayFormula formulaParts={compound.compound.formulaParts} />
  //     <sub>{`(${state})`}</sub>
  //   </div>
  // )
  return <></>
}
export default DisplayIonicCompound;