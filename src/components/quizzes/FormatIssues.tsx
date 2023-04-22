const FormatIssues = ({issues}: {issues: string[]}) => {
  return (
    <div>
        {issues.map((issue: string, index: number) => {
            return <p key={`${issue}-${index}`}>{issue}</p>
        })}
    </div>
  )
}
export default FormatIssues