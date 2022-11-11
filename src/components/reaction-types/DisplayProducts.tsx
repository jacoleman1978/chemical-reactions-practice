import DisplayElement from "./DisplayElement";
import { EquationElement } from "./configurations/interfaces";

const DisplayProducts = ({products}: {products: EquationElement[]}) => {

  return (
    <div className="flex-left-center med-gap">
      {
        products.map((product: EquationElement, i: number) => {
          return (
            <div key={`product-${i}`}  className="flex-left-center med-gap">
              {(product.coefficient > 1 ? `${product.coefficient} ` : "")}
              <DisplayElement element={product} />
              {(i < products.length - 1 ? " + ": "")}
            </div>
          )
        })
      }
    </div>
  )
}
export default DisplayProducts;