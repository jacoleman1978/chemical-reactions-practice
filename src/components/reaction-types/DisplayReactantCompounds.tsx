import CompoundFormula from "../compounds/CompoundFormula";
import { EquationCompound } from "./configurations/interfaces";

const DisplayReactantCompounds = ({reactants}: {reactants: EquationCompound[]}) => {

  return (
    <div className="flex-left-center med-gap">
      {
        reactants.map((reactant: EquationCompound, i: number) => {
          return (
            <div key={`reactant-${i}`}  className="flex-left-center med-gap">
              {(reactant.coefficient > 1 ? `${reactant.coefficient} ` : "")}
              <CompoundFormula formulaParts={reactant.compound.formulaParts} />
              {(i < reactants.length - 1 ? " + ": <i className="fa-solid fa-arrow-right-long"></i>)}
            </div>
          )
        })
      }
    </div>
  )
}
export default DisplayReactantCompounds;