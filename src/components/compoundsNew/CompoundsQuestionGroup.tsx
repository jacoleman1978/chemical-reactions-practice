import { useState, useEffect } from 'react';
import { useFlag } from '../../customHooks/useFlag';
import CompoundsQuestion from './CompoundsQuestion';
import ToggleButton from './ToggleButton';
import { getCompoundsList } from './helpers/getCompoundsList';
import { CompoundsPracticeProps, Compound } from './configurations/compoundInterfaces';

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
                return <CompoundsQuestion key={`question-${i}`} compound={compound} practiceType={practiceType} />
            })}
        </div>

        <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
    </div>
  )
}
export default CompoundsQuestionGroup