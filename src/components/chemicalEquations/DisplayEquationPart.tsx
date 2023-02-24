import DisplayCompoundFormula from "../compoundsNew/DisplayCompoundFormula";
import { State } from "./configurations/equationTypes";

interface DisplayEquationPartProps {
    formattedFormula: string;
    coefficient: number;
    state: State;
}

/**
 * Displays the targetCoeficient, the compound formula, and the state of the compound for one of the EquationParts of an Equation object
 * @param formattedFormula A string representing the compound formula with subscripts surrounded by '/' characters
 * @param coefficient A number representing the coefficient of the compound
 * @param state A string representing the state of the compound as a State type literal
 * @returns ReactElement
 */
const DisplayEquationPart = ({formattedFormula, coefficient, state}: DisplayEquationPartProps) => {
    let isCoefficient: boolean = false;
    let isState: boolean = false;

    // If a coefficient is passed in and greater than one, display it.
    if (coefficient !== undefined) {
        if (coefficient > 1) {
            isCoefficient = true;
        }
    }
    
    // If a state is passed, display it.
    if (state !== undefined) {
        isState = true;
    }

  return (
    <div className="flex-right-center sm-gap">
        {(isCoefficient ? coefficient : <></>)}
        <DisplayCompoundFormula formattedFormula={formattedFormula} />
        {(isState ? <sub>({state})</sub> : <></>)}
    </div>
  )
}
export default DisplayEquationPart