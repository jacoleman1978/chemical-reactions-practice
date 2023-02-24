interface ToggleButtonProps {
  toggleFlag: boolean;
  handleToggle: (flag: boolean) => void;
  buttonText: string;
}

const ToggleButton = ({toggleFlag, handleToggle, buttonText}: ToggleButtonProps) => {
  return (
    <div className="flex-center-center">
        <button className="flex-center-center fancy-btn" onClick={() => handleToggle(!toggleFlag)}>
            {buttonText}
        </button>
    </div>
  )
}
export default ToggleButton