import { useState } from "react";
import CompoundOptions from "../forms/CompoundOptions"

// Called from App.tsx
const Formulas = () => {
    let [includedCompoundTypes, setIncludedCompoundTypes] = useState<string[]>(["main"]);
    let [includedIonTypes, setIncludedIonTypes] = useState<string[]>(["main"]);

    return (
        <div className="flex-center-center flex-column">
            <p className="title">Practice Writing Formulas</p>
            <CompoundOptions includedCompoundTypes={includedCompoundTypes} setIncludedCompoundTypes={setIncludedCompoundTypes} includedIonTypes={includedIonTypes} setIncludedIonTypes={setIncludedIonTypes} />
        </div>
    )
}

export default Formulas;