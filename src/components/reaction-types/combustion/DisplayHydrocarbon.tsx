import { Hydrocarbon } from "../configurations/interfaces";

// Displays the coefficient and formula for they hydrocarbon in a combustion reaction
// Called from /combustion/CombustionQuestion.tsx
const DisplayHydrocarbon = ({hydrocarbon}: {hydrocarbon: Hydrocarbon}) => {
  return (
    <div className="flex-left-center med-gap">
      {(hydrocarbon.coefficient > 1 ? hydrocarbon.coefficient : <></>)}
      <div className="flex-left-center">
          C<sub>{hydrocarbon.carbonSubscript}</sub>
          H<sub>{hydrocarbon.hydrogenSubscript}</sub>
          {(hydrocarbon.hasOxygen ? <div>O<sub>{hydrocarbon.oxygenSubscript}</sub></div> : <></>)}
      </div>
        
    </div>
  )
}
export default DisplayHydrocarbon