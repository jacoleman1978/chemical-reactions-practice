import DisplayUsersFormula from '../compounds/DisplayUsersFormula';

interface BalancingInventoryRowProps {
    key: string;
    equationComponent: string;
    qtyReactants: number;
    qtyProducts: number;
}

const BalancingInventoryRow = ({equationComponent, qtyReactants, qtyProducts}: BalancingInventoryRowProps) => {

  return (
    <tr key={equationComponent + Math.random()}>
        <td>{qtyReactants}</td>
        <th className="th-rap"><DisplayUsersFormula usersFormula={equationComponent} /></th>
        <td>{qtyProducts}</td>
    </tr>
  );
};

export default BalancingInventoryRow;