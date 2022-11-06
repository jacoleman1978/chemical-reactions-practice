import TypeDescription from "./TypeDescription";
import { Description } from "./configurations/interfaces";

// Displays the list of hyperlinked types with brief descriptions of the type
// Called from /common/PracticeType.tsx
const TypesContainer = ({types}: {types: Description[]}) => {
    return (
        <ul className="flex-column med-gap">
            {types.map((type: Description) => {
                const {title, path, description} = type;
                return (
                    <li key={path}>
                        <TypeDescription title={title} path={path} description={description} />
                    </li>
                )
            })}
        </ul>
    )
}

export default TypesContainer;