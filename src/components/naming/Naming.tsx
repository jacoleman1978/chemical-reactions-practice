import { useLocation } from 'react-router-dom';
import Title from "../common/Title";
import TypesContainer from "../common/TypesContainer";
import { Description } from '../../interfaces';
import { generalIonicTypes } from "../../configurations/generalIonicTypes";
import { generalCompoundTypes } from "../../configurations/generalCompoundTypes";

// Called from App.tsx
const Naming = () => {
    let { pathname } = useLocation();
    const ionicTypes = generalIonicTypes.map((ionicType): Description => {return {...ionicType, path: pathname + ionicType.path}});
    const compoundTypes = generalCompoundTypes.map((compoundType): Description => {return {...compoundType, path: pathname + compoundType.path}});

    return (
        <div className="flex-column">
            <Title title="Naming Compounds Practice" />
            <ul><li>Ionic: Compounds composed of ions, species with full charges</li></ul>
            <div className="lg-left-margin">
                <TypesContainer types={ionicTypes} />
            </div>
            <TypesContainer types={compoundTypes} />
        </div>
    )
}

export default Naming;