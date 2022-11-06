// Displays the title bolded, underlined and in larger font
// Called from /common/PracticeType.tsx
const Title = ({title}: {title: string}) => {
    return (
        <h1 className="title">{title}</h1>
    )
}

export default Title;