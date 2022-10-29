import { SubtitleProps } from "../../interfaces";

const SubTitle = ({displayToggle, handleToggle, label}: SubtitleProps) => {
    return (
        <div className="flex-left-center med-gap" onClick={handleToggle}>
            <h2 className="subheading no-bottom-margin">{label}  </h2>
            <button className="toggle-btn">{(displayToggle ? "-" : "+")}</button>
        </div>
    )
}

export default SubTitle;