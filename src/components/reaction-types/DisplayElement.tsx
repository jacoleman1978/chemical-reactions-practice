import { EquationElement } from "./configurations/interfaces";

const DisplayElement = ({element}: {element: EquationElement}) => {
  return (
    <div>
        {element.formulaParts.elementSymbol}
        <sub>{element.formulaParts.subscript}</sub>
    </div>
  )
}
export default DisplayElement;