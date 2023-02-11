import { useState, useEffect, ReactElement } from 'react';
import { useFlag } from '../../customHooks/useFlag';
import NamingQuestion from './NamingQuestion';
import FormulaQuestion from './FormulaQuestion';
import ToggleButton from './ToggleButton';
import { getCompoundsList } from './helpers/getCompoundsList';
import { CompoundsPracticeProps, Compound } from './helpers/compoundInterfaces';

const CompoundsQuestionGroup = ({compoundType, practiceType}: CompoundsPracticeProps) => {
    const [flag, handleSetFlag] = useFlag();
    const [compoundsList, setCompoundsList] = useState<Compound[]>([]);

    useEffect(() => {
        getCompoundsList(compoundType, 18).then((res) => {
            setCompoundsList(res.data.compoundList);
        })
    }, [compoundType, flag])

  return (
    <div className="flex-column med-gap full-width">
        <div className="compound-questions med-gap">
            {compoundsList.map((compound, i) => {
                if (practiceType === "naming") {
                    return <NamingQuestion key={`question-${i}`} compound={compound} />
                }
                return <FormulaQuestion key={`question-${i}`} compound={compound} />
            })}
        </div>

        <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
    </div>
  )
}
export default CompoundsQuestionGroup