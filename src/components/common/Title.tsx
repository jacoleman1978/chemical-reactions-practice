import { TitleProps } from "../../interfaces";

const Title = ({title}: TitleProps) => {
    return (
        <h1 className="title">{title}</h1>
    )
}

export default Title;