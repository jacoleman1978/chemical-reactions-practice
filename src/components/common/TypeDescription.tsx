import { Description } from "./configurations/interfaces";

// Displays a type as a hyperlink and includes a brief description of the type
// Called from /common/TypesContainer.tsx
const TypeDescription = ({path, title, description}: Description) => {
    return (
        <span>
            <a href={path} className="no-underline">{title}</a>: {description}
        </span>
    )
}

export default TypeDescription;