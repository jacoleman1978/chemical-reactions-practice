import { useLocation } from 'react-router-dom';
import Title from "../common/Title";
import TypesContainer from "../common/TypesContainer";
import { Description } from '../common/configurations/interfaces';
import { generalIonicTypes } from "./newConfigurations/generalIonicTypes";
import { generalCompoundTypes } from "./newConfigurations/generalCompoundTypes";

// Describes the different compound types for "naming" and "formulas" practiceTypes
// Called from App.tsx
const CompoundDescriptions = () => {
    let { pathname } = useLocation();

    const ionicTypes = generalIonicTypes.map((ionicType): Description => {return {...ionicType, path: pathname + ionicType.path}});

    const compoundTypes = generalCompoundTypes.map((compoundType): Description => {return {...compoundType, path: pathname + compoundType.path}});

    return (
        <div className="flex-column">

            {(pathname === "/naming" && <Title title="Naming Compounds Practice" />)}
            {(pathname === "/formulas" && <Title title="Writing Compound Formulas Practice" />)}
            <ul><li>Ionic: Compounds composed of ions, species with full charges</li></ul>
            <div className="lg-left-margin">
                <TypesContainer types={ionicTypes} />
            </div>
            <TypesContainer types={compoundTypes} />
        </div>
    )
}

export default CompoundDescriptions;