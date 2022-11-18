import { Hydrocarbon } from "./configurations/interfaces";
import { StateOfMatter } from "./configurations/types";

// Displays the coefficient and formula for they hydrocarbon in a combustion reaction
// Called from /combustion/CombustionQuestion.tsx
const DisplayHydrocarbon = ({hydrocarbon, state}: {hydrocarbon: Hydrocarbon, state: StateOfMatter}) => {
  return (
      <div className="flex-left-center">
          C<sub>{hydrocarbon.carbonSubscript}</sub>
          H<sub>{hydrocarbon.hydrogenSubscript}</sub>
          {(hydrocarbon.hasOxygen ? <div>O<sub>{hydrocarbon.oxygenSubscript}</sub></div> : <></>)}
          <sub>{`(${state})`}</sub>
      </div>
  )
}
export default DisplayHydrocarbon