import { reactionTypesInfo } from "./configurations/reactionTypesInfo";
import { InformationDisplay } from "./configurations/interfaces";

// Describes the different reaction types
// Called from /reaction-types/ReactionTypesPractice/tsx
const ReactionTypesDescription = () => {
  return (
    <div className="flex-column lg-left-margin">
        {reactionTypesInfo.map((type: InformationDisplay) => {
            return (
                <div key={type.reactionType}>
                    <p>
                        <strong>{type.label}</strong>
                        {`: ${type.information}`}
                    </p>
                    {type.example()}
                </div>
            )
        })}
    </div>
  )
}
export default ReactionTypesDescription;