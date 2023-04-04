import { useEffect, useState, DragEvent } from "react";
import DraggableIonContainer from "./DraggableIonContainer";
import { CompoundDemo } from "./configurations/compoundInterfaces";
import { CompoundType } from "./configurations/compoundTypes"
import { getDemoCompound } from "./helpers/getDemoCompound";

const FormulaDemo = ({compoundType}: {compoundType: CompoundType}) => {
    const [compound, setCompound] = useState<CompoundDemo>({} as CompoundDemo);

    // Gets a random compound of the CompoundType
    useEffect(() => {
        getDemoCompound(compoundType).then((res) => {
            setCompound(res.data.compoundDemo);
        })
    }, [compoundType])

    const enableDropping = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

  return (
    <div className="flex-center-center med-gap">
        <DraggableIonContainer signSymbol={"+"} />
        <div className="formula-demo-area flex-around-center border-bubble" onDragOver={enableDropping}></div>
        <DraggableIonContainer signSymbol={"-"} />
    </div>
  )
}
export default FormulaDemo