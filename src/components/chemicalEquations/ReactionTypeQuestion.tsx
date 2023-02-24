import ReactionTypesDropdown from "./ReactionTypesDropdown";
import Arrow from "../common/Arrow";
import DisplayEquationPart from "./DisplayEquationPart";
import { Equation } from "./configurations/equationInterfaces";

interface ReactionTypeQuestionProps {
    toggleFlag: boolean;
    equation: Equation;
}

/**
 * Displays an individual balancing chemical equation question
 * @param toggleFlag a boolean value that is passed to the ReactionTypesDropdown component to trigger a re-render of the component
 * @param equation an object with a ReactionTypeList interface, containing all of the components for creating and balancing a chemical equation of a specific type
 * @returns Display of an individual balancing chemical equation question a dropdown selection input for the type of chemical reaction
 */
const ReactionTypeQuestion = ({toggleFlag, equation}: ReactionTypeQuestionProps) => {
  const {reactionType, R1, R2, P1, P2} = equation;

  return (
    <section className="reaction-type-section med-gap border-bubble">
        <div className="reaction-type">
            <div className="flex-left-center reactants">
                <DisplayEquationPart formattedFormula={R1.compound.formula} coefficient={R1.targetCoefficient} state={R1.state} />

                {/* Since decomposition equations only have one reactant, don't display the "+" or a second reactant. */}
                {reactionType !== "decomposition" ? <div>+</div> : null}

                {reactionType !== "decomposition" ? <DisplayEquationPart formattedFormula={R2.compound.formula} coefficient={R2.targetCoefficient} state={R2.state} /> : null}
            </div>

            <Arrow />

            <div className="flex-left-center products">
                <DisplayEquationPart formattedFormula={P1.compound.formula} coefficient={P1.targetCoefficient} state={P1.state} />

                {/* Since combination equations only have one product, don't display the "+" or a second product. */}
                {reactionType !== "combination" ? <div>+</div> : null}

                {reactionType !== "combination" ? <DisplayEquationPart formattedFormula={P2.compound.formula} coefficient={P2.targetCoefficient} state={P2.state} /> : null}
            </div>
        </div>

        <ReactionTypesDropdown toggleFlag={toggleFlag} reactionType={reactionType}/>
    </section>
  )
}
export default ReactionTypeQuestion