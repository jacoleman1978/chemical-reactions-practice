const PolyatomicIonTable = () => {
  return (
    <table className="flex-center-center flex-column border-bubble">
        <div>
            <thead>
                <tr>
                    <th className="center-table-header">Ion Name</th>
                    <th className="center-table-header">Ion Formula</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ammonium</td>
                    <td>NH<sub>4</sub><sup>+</sup></td>
                </tr>

                <tr className="border-thick">
                    <td>hydroxide</td>
                    <td>OH<sup>-</sup></td>
                </tr>
                <tr>
                    <td>cyanide</td>
                    <td>CN<sup>-</sup></td>
                </tr>
                <tr>
                    <td>acetate</td>
                    <td>CH<sub>3</sub>COO<sup>-</sup></td>
                </tr>
                <tr>
                    <td>bicarbonate</td>
                    <td>HCO<sub>3</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td className="italics"><span className="oxyanion">hypo</span>chlor<span className="oxyanion">ite</span></td>
                    <td>ClO<sup>-</sup></td>
                </tr>
                <tr>
                    <td className="italics">chlor<span className="oxyanion">ite</span></td>
                    <td>ClO<sub>2</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td className="italics">chlor<span className="oxyanion">ate</span></td>
                    <td>ClO<sub>3</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td className="italics"><span className="oxyanion">per</span>chlor<span className="oxyanion">ate</span></td>
                    <td>ClO<sub>4</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>brom<span className="oxyanion">ate</span></td>
                    <td>BrO<sub>3</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>iod<span className="oxyanion">ate</span></td>
                    <td>IO<sub>3</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>nitr<span className="oxyanion">ate</span></td>
                    <td>NO<sub>3</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>bisulf<span className="oxyanion">ate</span></td>
                    <td>HSO<sub>4</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>permanganate</td>
                    <td>MnO<sub>4</sub><sup>-</sup></td>
                </tr>
                <tr>
                    <td>thiocyanate</td>
                    <td>SCN<sup>-</sup></td>
                </tr>

                <tr className="border-thick">
                    <td>carbonate</td>
                    <td>CO<sub>3</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>chromate</td>
                    <td>CrO<sub>4</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>dichromate</td>
                    <td>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>oxalate</td>
                    <td>C<sub>2</sub>O<sub>4</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>selen<span className="oxyanion">ate</span></td>
                    <td>SeO<sub>4</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>sulf<span className="oxyanion">ate</span></td>
                    <td>SO<sub>4</sub><sup>2-</sup></td>
                </tr>
                <tr>
                    <td>tellur<span className="oxyanion">ate</span></td>
                    <td>TeO<sub>4</sub><sup>2-</sup></td>
                </tr>

                <tr className="border-thick">
                    <td>arsen<span className="oxyanion">ate</span></td>
                    <td>AsO<sub>4</sub><sup>3-</sup></td>
                </tr>
                <tr>
                    <td>phosph<span className="oxyanion">ate</span></td>
                    <td>PO<sub>4</sub><sup>3-</sup></td>
                </tr>
            </tbody>
        </div>
    </table>
  )
}
export default PolyatomicIonTable