import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { reactionTypeMenuOptions } from "./configurations/reactionTypeMenuOptions";
import { ReactionTypeMenuOption, RxnTypeDropdownProps } from "./configurations/interfaces";

// Dropdown selector for reaction types. Background changes depending on selected answer
// Called from /decomposition/DecompQuestion.tsx
const ReactionTypesDropdown = ({toggleFlag, reactionType}: RxnTypeDropdownProps) => {
    const [selectedType, setSelectedType] = useState<string>("");
    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    useEffect(() => {
        setSelectedType("");
        setFormStyle({backgroundColor: "lightpink"});
    }, [toggleFlag])

    useEffect(() => {
        if (selectedType === reactionType) {
          setFormStyle({backgroundColor: "palegreen"});
        } else {
          setFormStyle({backgroundColor: "lightpink"})
        }
    }, [selectedType, reactionType])

  return (
    <Form.Select style={formStyle} aria-label={"Select Reaction Type"} value={selectedType} onChange={(event) => {setSelectedType(event.target.value)}}>
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