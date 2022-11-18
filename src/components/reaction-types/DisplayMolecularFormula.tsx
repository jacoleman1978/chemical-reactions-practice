import { FormulaParts } from "../compounds/configurations/interfaces";
import { StateOfMatter } from "./configurations/types";

const DisplayMolecularFormula = ({formulaParts, state}: {formulaParts: FormulaParts, state: StateOfMatter}) => {
    const {firstPart, firstSubscript, secondPart, secondSubscript} = formulaParts;

    return (
        <div className="flex-right-center">
            {firstPart[0]}<sub>{firstSubscript}</sub>{secondPart[0]}<sub>{`${secondSubscript}(${state})`}</sub>
        </div>
    )
}
export default DisplayMolecularFormula