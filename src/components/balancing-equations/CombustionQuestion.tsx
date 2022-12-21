import DisplayFormula from "../compounds/DisplayFormula";
import { CombustionReaction } from "../reaction-types/configurations/interfaces";

const CombustionQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: CombustionReaction}) => {
  const {hydrocarbon, o2, h2o, co2} = equation;

  return (
    <div className="flex-column med-gap border-bubble">
      <div className="flex-left-center wrap med-gap">
        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={hydrocarbon.formulaParts} coefficient={1} state={hydrocarbon.state} />

          <div>+</div>

          <DisplayFormula formulaParts={o2.formulaParts} coefficient={1} state={o2.state} />

          <i className="fa-solid fa-arrow-right-long"></i>
        </div>

        <div className="flex-left-center med-gap">
          <DisplayFormula formulaParts={h2o.formulaParts} coefficient={1} state={h2o.state} />

          <div>+</div>

          <DisplayFormula formulaParts={co2.formulaParts} coefficient={1} state={co2.state} />
        </div>
      </div>
    </div>
  )
}
export default CombustionQuestion