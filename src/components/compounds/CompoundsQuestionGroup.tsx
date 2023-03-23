import { useState, useEffect } from 'react';
import { useFlag } from '../../customHooks/useFlag';
import CompoundsQuestion from './CompoundsQuestion';
import ToggleButton from '../common/ToggleButton';
import PolyatomicIonTable from './PolyatomicIonTable';
import { getCompoundsList } from './helpers/getCompoundsList';
import { CompoundsPracticeProps, Compound } from './configurations/compoundInterfaces';

/**
 * A component that displays a group of CompoundsQuestion components
 * @param compoundType A string indicating the CompoundType type literal
 * @param practiceType A string indicating the PracticeType type literal 
 * @returns ReactElement
 */
const CompoundsQuestionGroup = ({compoundType, practiceType}: CompoundsPracticeProps) => {
    const [flag, handleSetFlag] = useFlag();
    const [compoundsList, setCompoundsList] = useState<Compound[]>([]);

    // Gets a list of compounds from the server and sets the compoundsList state
    useEffect(() => {
        getCompoundsList(compoundType, 18).then((res) => {
            setCompoundsList(res.data.compoundList);
        })
    }, [compoundType, flag])

  return (
    <div className="flex-column med-gap full-width">
        <div className="flex-around-center med-gap">
            <div className="compound-questions med-gap full-width">
                {compoundsList.map((compound, i) => {
                    return <CompoundsQuestion key={`question-${i}`} compound={compound} practiceType={practiceType} />
                })}
            </div>

            {!["ionic-main", "ionic-transition", "molecular"].includes(compoundType) ? <PolyatomicIonTable /> : null}
        </div>

        <ToggleButton toggleFlag={flag} handleToggle={handleSetFlag} buttonText={"More Practice"}/>
    </div>
  )
}
export default CompoundsQuestionGroup