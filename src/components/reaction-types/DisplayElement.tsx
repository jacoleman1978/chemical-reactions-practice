import { EquationElement } from "./configurations/interfaces";
import { StateOfMatter } from "./configurations/types";

// Formats the atomic or molecular element for display
// Called from /decomposition/DisplayDecompProducts.tsx
const DisplayElement = ({element, state}: {element: EquationElement, state: StateOfMatter}) => {
  const {formulaParts} = element;
  return (
      <div className="flex-left-center">
          {formulaParts.elementSymbol}
          <sub>{formulaParts.subscript}{`(${state})`}</sub>
      </div>
  )
}
export default DisplayElement;