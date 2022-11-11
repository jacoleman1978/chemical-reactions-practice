import { useState } from "react";
import { Form } from "react-bootstrap";
import { reactionTypeMenuOptions } from "./configurations/reactionTypeMenuOptions";
import { ReactionTypeMenuOption } from "./configurations/interfaces";

// Called from /reaction-types/ReactionTypesQuestion.tsx
const ReactionTypesDropdown = () => {
    const [selectedType, setSelectedType] = useState<string>("");

  return (
    <Form.Select aria-label={"Select Reaction Type"} value={selectedType} onChange={(event) => {setSelectedType(event.target.value)}}>
        <option disabled value="">Reaction Type</option>
        {
            reactionTypeMenuOptions.map((option: ReactionTypeMenuOption) => {
                return <option key={option.reactionType} value={option.reactionType}>{option.optionTitle}</option>
            })
        }
    </Form.Select>
  )
}
export default ReactionTypesDropdown