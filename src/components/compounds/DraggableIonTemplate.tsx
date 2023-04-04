import { useState, DragEvent } from "react"

const DraggableIonTemplate = ({chargeMagnitude, signSymbol}: {chargeMagnitude: number, signSymbol: string}) => {
    const [offsetX, setOffsetX] = useState<number>(0);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    // const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    //     if (offsetX === 0 && offsetY === 0) {
    //         setOffsetX(event.clientX);
    //         setOffsetY(event.clientY);
    //         console.log(event)
    //     }
    // };
    
    const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event)
        setX(event.clientX - 150 - chargeMagnitude * 2);
        setY(event.clientY - 150 - chargeMagnitude * 20);
    }

  return (
        <div
            className="draggable-ion-template flex-column flex-around-center" 
            draggable 
            onDrag={handleDragEnd}
            style={{position: "absolute", top: y, left: x, width: "40px", height: chargeMagnitude * 40 + "px", backgroundColor: signSymbol === "+" ? "red" : "blue"}}
        >
            <span>{signSymbol}</span>
            {chargeMagnitude > 1 ? <span>{signSymbol}</span> : null}
            {chargeMagnitude > 2 ? <span>{signSymbol}</span> : null}
        </div>
  )
}
export default DraggableIonTemplate