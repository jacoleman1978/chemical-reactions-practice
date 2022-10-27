import { Description } from "../../interfaces";
const TypeDescription = ({path, title, description}:Description) => {
    
    return (
        <span>
            <a href={path} className="no-underline">{title}</a>: {description}
        </span>
    )
}

export default TypeDescription;