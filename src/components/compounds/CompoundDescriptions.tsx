import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Title from "../common/Title";
import TypesContainer from "../common/TypesContainer";
import { Description } from '../common/configurations/interfaces';
import { generalIonicTypes } from "../compoundsNew/configurations/generalIonicTypes";
import { generalCompoundTypes } from "../compoundsNew/configurations/generalCompoundTypes";

// Describes the different compound types for "naming" and "formulas" practiceTypes
// Called from App.tsx
const CompoundDescriptions = () => {
    let { pathname } = useLocation();

    const ionicTypes = generalIonicTypes.map((ionicType): Description => {return {...ionicType, path: pathname + ionicType.path}});

    const compoundTypes = generalCompoundTypes.map((compoundType): Description => {return {...compoundType, path: pathname + compoundType.path}});

    return (
        <div className="flex-center-center full-width">
            <section className="flex-column">
                {pathname === "/naming" ? 
                    <Title title="Naming Compounds Practice" /> 
                    : null
                }
                {pathname === "/formulas" ? 
                    <Title title="Writing Compound Formulas Practice" /> 
                    : null
                }

                <ul>
                    <li>Ionic: Compounds composed of ions, species with full charges</li>
                    <Fragment>
                        <TypesContainer types={ionicTypes} />
                    </Fragment>
                </ul>
                <TypesContainer types={compoundTypes} />
            </section>
        </div>

    )
}

export default CompoundDescriptions;