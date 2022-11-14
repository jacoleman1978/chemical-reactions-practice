// Displays the + sign, coefficient if it is greater than one and oxygen gas formula
// Called from /combustion/CombustionQuestion.tsx
const DisplayOxygenGas = ({oxygenCoefficient}: {oxygenCoefficient: number}) => {
  return (
    <div className="flex-left-center med-gap">
      <div>+</div>
      {(oxygenCoefficient > 1 ? oxygenCoefficient: <></>)}
      <div>
        O<sub>2</sub>
      </div>
    </div>
  )
}
export default DisplayOxygenGas