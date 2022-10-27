import TypeDescription from "./TypeDescription";
import { TypesContainerProps } from "../../interfaces";
import { Description } from "../../interfaces";
import { title } from "process";

const TypesContainer = ({types}: TypesContainerProps) => {

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