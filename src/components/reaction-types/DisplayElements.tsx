import { EquationElement } from "./configurations/interfaces";

// Formats the atomic or molecular element for display
// Called from /decomposition/DisplayDecompProducts.tsx
const DisplayElements = ({elements}: {elements: EquationElement[]}) => {
  return (
      <div className="flex-left-center med-gap">
        {
          elements.map((element: EquationElement, i: number) => {
            return (
              <div key={`element-${i}`}  className="flex-left-center med-gap">
                {(element.coefficient > 1 ? `${element.coefficient} ` : "")}
                <div>
                  {element.formulaParts.elementSymbol}
                  <sub>{element.formulaParts.subscript}</sub>
                </div>
                {(i < elements.length - 1 ? " + ": "")}
              </div>
            )
          })
        }
      </div>
  )
}
export default DisplayElements;