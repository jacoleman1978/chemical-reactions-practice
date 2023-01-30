import { useMemo } from "react";
import ReactionTypesDropdown from "./ReactionTypesDropdown";
import Arrow from "../common/Arrow";
import DisplayFormula from "../compounds/DisplayFormula";
import { ReactionTypeList } from "../common/configurations/types";
import { makeEquationParts } from "./helpers/makeEquationParts";

/**
 * 
 * @param toggleFlag boolean, indicating whether should reset all question state
 * @param equation an object with a ReactionTypeList interface, containing all of the components for creating and balancing a chemical equation of a specific type
 * @returns Display of an individual balancing chemical equation question a dropdown selection input for the type of chemical reaction
 */
const ReactionTypeQuestion = ({toggleFlag, equation}: {toggleFlag: boolean, equation: ReactionTypeList}) => {
    // Make convert the equation objects into a uniform object used to display and evaluate a chemical equation
    const equationParts = useMemo(() => makeEquationParts(equation), [equation]);

  return (
    <section className="reaction-type-section med-gap border-bubble">
        <div className="reaction-type">
            <div className="flex-left-center reactants">
                <DisplayFormula formulaParts={equationParts.R1.formulaParts} coefficient={equationParts.R1.coefficient} state={equationParts.R1.state} />

{               /* Since decomposition equations only have one reactant, don't display the "+" or a second reactant. */}
                {equation.type !== "decomposition" ? <div>+</div> : null}

                {equation.type !== "decomposition" ? <DisplayFormula formulaParts={equationParts.R2.formulaParts} coefficient={equationParts.R2.coefficient} state={equationParts.R2.state} /> : null}
            </div>

            <Arrow />

            <div className="flex-left-center products">
                <DisplayFormula formulaParts={equationParts.P1.formulaParts} coefficient={equationParts.P1.coefficient} state={equationParts.P1.state} />

                {/* Since combination equations only have one product, don't display the "+" or a second product. */}
                {equation.type !== "combination" ? <div>+</div> : null}

                {equation.type !== "combination" ? <DisplayFormula formulaParts={equationParts.P2.formulaParts} coefficient={equationParts.P2.coefficient} state={equationParts.P2.state} /> : null}
            </div>
        </div>

        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={equation.type}/>
    </section>
  )
}
export default ReactionTypeQuestion