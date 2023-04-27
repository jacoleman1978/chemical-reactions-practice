import FocusLists from "./FocusLists"
import { FormulaStats } from "./configurations/quizInterfaces"

const FormulasFocusAreas = ({stats}: {stats: FormulaStats}) => {
    return (
        <section className="border-bubble-highlight full-width">
            <h2 className="subtitle">Focus Areas</h2>
            {stats.capitalization.length > 0 ? <FocusLists title={"Capitalization"} list={stats.capitalization}/> : null}
            
            {stats.elementSwaps.length > 0 ? <FocusLists title={"Swapped Elements"} list={stats.elementSwaps}/> : null}
            
            {stats.monatomicIons.length > 0 ? <FocusLists title={"Monatomic Ions"} list={stats.monatomicIons}/> : null}

            {stats.polyatomicIons.length > 0 ? <FocusLists title={"Polyatomic Ions"} list={stats.polyatomicIons}/> : null}

            {stats.subscripts.length > 0 ? <FocusLists title={"Subscripts"} list={stats.subscripts}/> : null} 

            {stats.greekPrefixes.length > 0 ? <FocusLists title={"Greek Prefixes"} list={stats.greekPrefixes}/> : null}

            {stats.acids.length > 0 ? <FocusLists title={"Acids"} list={stats.acids}/> : null}
        </section>
    )
}
export default FormulasFocusAreas