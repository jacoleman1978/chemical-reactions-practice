interface FocusListsProps {
    title: string;
    list: string[];
}

const FocusLists = ({title, list}: FocusListsProps) => {
    return (
        <>
            <h3 className="sm-title no-bottom-margin">{title}</h3>
            <ul>
            {list.map((comment: string) => {
                return <li key={comment}>{comment}</li>
            })}
            </ul>
        </>
    )
}
export default FocusLists