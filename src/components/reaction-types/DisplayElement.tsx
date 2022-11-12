import { EquationElement } from "./configurations/interfaces";

// Formats the atomic or molecular element for display
// Called from /decomposition/DisplayDecompProducts.tsx
const DisplayElement = ({element}: {element: EquationElement}) => {
  return (
    <div>
        {element.formulaParts.elementSymbol}
        <sub>{element.formulaParts.subscript}</sub>
    </div>
  )
}
export default DisplayElement;