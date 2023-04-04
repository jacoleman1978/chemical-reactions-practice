import DraggableIonTemplate from "./DraggableIonTemplate"

const DraggableIonContainer = ({signSymbol}: {signSymbol: string}) => {
  return (
    <div className="flex-column med-gap formula-demo-shape-area flex-center-center">
        <DraggableIonTemplate chargeMagnitude={1} signSymbol={signSymbol} />
        <DraggableIonTemplate chargeMagnitude={2} signSymbol={signSymbol} />
        <DraggableIonTemplate chargeMagnitude={3} signSymbol={signSymbol} />
    </div>
  )
}
export default DraggableIonContainer