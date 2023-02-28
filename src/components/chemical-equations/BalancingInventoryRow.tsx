import DisplayCompoundFormula from '../compoundsNew/DisplayCompoundFormula';

interface BalancingInventoryRowProps {
    key: string;
    equationComponent: string;
    qtyReactants: number;
    qtyProducts: number;
}

const BalancingInventoryRow = ({equationComponent, qtyReactants, qtyProducts}: BalancingInventoryRowProps) => {
  let qtyBackgroundStyle = {
    backgroundColor: qtyReactants === qtyProducts ? "lightgreen" : "lightcoral"
  }

  return (
    <tr key={equationComponent + Math.random()} style={qtyBackgroundStyle}>
        <td>{qtyReactants}</td>
        <th className="th-rap"><DisplayCompoundFormula formattedFormula={equationComponent} /></th>
        <td>{qtyProducts}</td>
    </tr>
  );
};

export default BalancingInventoryRow;