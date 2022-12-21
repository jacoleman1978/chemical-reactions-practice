import { balancingInfo } from "./configurations/balancingInfo";

const BalancingInfo = () => {
  return (
    <ul>
        {balancingInfo.map((item: string, i: number) => {
            return (
                <li key={`list-${i}`}>
                    {item}
                </li>
            )
        })}
    </ul>
  )
}
export default BalancingInfo;