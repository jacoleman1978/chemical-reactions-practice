import Checklist from "../forms/Checklist";
import { compoundTypes, ionTypes } from "../../configurations/inputLabels";
import { CompoundOptionsProps } from "../../interfaces";

const CompoundOptions = ({includedCompoundTypes, setIncludedCompoundTypes, includedIonTypes, setIncludedIonTypes}: CompoundOptionsProps) => {
    return (
        <div className="flex-center-center med-gap wrap">
            <Checklist key="compound-types" title="Included Compound types" listItems={compoundTypes} checkedList={includedCompoundTypes} setCheckedList={setIncludedCompoundTypes} />
            <Checklist key="ion-types" title="Included Ion Types" listItems={ionTypes} checkedList={includedIonTypes} setCheckedList={setIncludedIonTypes} />
        </div>
    )
}

export default CompoundOptions;