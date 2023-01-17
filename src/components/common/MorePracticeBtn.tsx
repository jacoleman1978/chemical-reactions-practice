interface MorePracticeProps {
    handleToggle: () => void;
}

const MorePracticeBtn = ({handleToggle}: MorePracticeProps) => {
  return (
    <div className="flex-center-center">
        <button className="flex-center-center fancy-btn" onClick={handleToggle}>
            More Practice
        </button>
    </div>
  )
}
export default MorePracticeBtn