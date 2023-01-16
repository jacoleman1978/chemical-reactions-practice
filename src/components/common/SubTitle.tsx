import { SubtitleProps } from "./configurations/interfaces";

// Makes the Subtitle and the '+' or '-' clickable to toggle the instructions display
// Called from /common/InstructionsList.tsx
const SubTitle = ({displayToggle, handleToggle, label}: SubtitleProps) => {
    return (
        <div className="flex-left-center med-gap" onClick={handleToggle}>
            <h2 className="subheading no-bottom-margin">{label}  </h2>
            <button className="toggle-btn" aria-label="Toggle for background and instructions">{(displayToggle ? "-" : "+")}</button>
        </div>
    )
}

export default SubTitle;