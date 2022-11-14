// Displays coefficients, if appropriate, and formulas for water and carbon dioxide in a combustion reaction
// Called from /combustion/CombustionQuestion.tsx
const DisplayCombustionProducts = ({h2oCoefficient, co2Coefficient}: {h2oCoefficient: number, co2Coefficient: number}) => {
  return (
    <div className="flex-left-center med-gap">
        {(h2oCoefficient > 1 ? `${h2oCoefficient}` : <></>)}
        <div>
            H<sub>2</sub>O
        </div>
        <div>+</div>
        {(co2Coefficient > 1 ? `${co2Coefficient}` : <></>)}
        <div>
            CO<sub>2</sub>
        </div>
    </div>
  )
}
export default DisplayCombustionProducts