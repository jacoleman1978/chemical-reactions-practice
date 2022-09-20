import { useState } from "react";
import CompoundOptions from "../forms/CompoundOptions"

// Called from App.tsx
const Naming = () => {
    let [includedCompoundTypes, setIncludedCompoundTypes] = useState<string[]>(["ionic"]);
    let [includedIonTypes, setIncludedIonTypes] = useState<string[]>(["main"]);

    return (
        <div className="flex-center-center flex-column">
            <p className="title">Practice Naming Compounds</p>
            <CompoundOptions includedCompoundTypes={includedCompoundTypes} setIncludedCompoundTypes={setIncludedCompoundTypes} includedIonTypes={includedIonTypes} setIncludedIonTypes={setIncludedIonTypes} />
        </div>
    )
}

export default Naming;