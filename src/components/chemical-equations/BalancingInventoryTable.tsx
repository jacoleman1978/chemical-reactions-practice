import { useState, useEffect, ReactElement } from 'react';
import { BalancingTable } from './configurations/equationInterfaces';
import BalancingInventoryRow from './BalancingInventoryRow';

const BalancingInventoryTable = ({balancingTable}: {balancingTable: BalancingTable}) => {
    const [tableRows, setTableRows] = useState<ReactElement[]>([]);

    useEffect(() => {
        const rows: ReactElement[] = [];
        for (let [key, {qtyInReactants, qtyInProducts}] of Object.entries(balancingTable)) {
            rows.push(<BalancingInventoryRow key={key} equationComponent={key} qtyReactants={qtyInReactants} qtyProducts={qtyInProducts} />);
        }
        setTableRows(rows);
    }, [balancingTable])

    return (
        <table>
            <thead>
                <tr>
                    <th className="center-text">Quantity in Reactants</th>
                    <th className="center-text">Atom or Ion</th>
                    <th className="center-text">Quantity in Products</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default BalancingInventoryTable;