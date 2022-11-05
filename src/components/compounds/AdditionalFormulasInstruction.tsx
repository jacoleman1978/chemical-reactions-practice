const AdditionalFormulasInstruction = ({practiceType}: {practiceType: string}) => {
    if (practiceType !== "formulas") {
        return <></>
    }
    
    return (
        <p>
            <em>Use a '/' immediately before and after anything that should be a subscript. For example H<sub>2</sub>O would be written as 'H/2/O'.</em>
        </p>
    )
}

export default AdditionalFormulasInstruction;