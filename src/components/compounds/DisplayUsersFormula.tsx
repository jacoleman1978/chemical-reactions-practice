// Formats and displays the user's compound formula from FormualasQuestion
// Called from /compounds/FormulasQuestion.tsx
const DisplayUsersFormula = ({usersFormula}: {usersFormula: string}) => {
    let formulaParts: string[] = [];

    // Check if the last character is a '/' and remove it if it is
    if (usersFormula.charAt(formulaParts.length-1) === "/") {
        usersFormula = usersFormula.slice(0, -1);
    }

    formulaParts = usersFormula.split("/");

    let userDisplayFormula = formulaParts.map((part, i) => {
        if (i % 2 === 0) {
            return (
                <span key={`part-${i}`}>{part}</span>
            )
        } else {
            return <sub key={`part-${i}`}>{part}</sub>
        }
    })

    return (
        <div className="flex-compound-display-answer">
            {userDisplayFormula}
        </div>
    )
}

export default DisplayUsersFormula;