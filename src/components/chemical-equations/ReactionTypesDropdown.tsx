import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { reactionTypeMenuOptions } from "./configurations/reactionTypeMenuOptions";
import { ReactionTypeMenuOption, ReactionTypeDropdownProps } from "./configurations/equationInterfaces"; 

/**
 * Dropdown selector for reaction types. Background changes depending on selected answer
 * @param toggleFlag A boolean that toggles the dropdown when the user clicks the "Change Reaction Type" button
 * @param reactionType A string that represents the reaction type of type literal ReeactionType 
 * @returns ReactElement
 */
const ReactionTypesDropdown = ({toggleFlag, reactionType}: ReactionTypeDropdownProps) => {
    const [selectedType, setSelectedType] = useState<string>("");
    const [formStyle, setFormStyle] = useState<{backgroundColor: string}>({backgroundColor: "lightpink"});

    // Reset the dropdown when the user clicks the "Change Reaction Type" button
    useEffect(() => {
        setSelectedType("");
        setFormStyle({backgroundColor: "lightpink"});
    }, [toggleFlag])

    // Change the background color of the dropdown when the user selects an answer with 'palegreen' for a correct selection or 'lightpink' for an incorrect selection
    useEffect(() => {
        if (selectedType === reactionType) {
          setFormStyle({backgroundColor: "palegreen"});
        } else {
          setFormStyle({backgroundColor: "lightpink"})
        }
    }, [selectedType, reactionType])

  return (
    <div className="rxn-type-select">
      <Form.Select style={formStyle} aria-label={"Select Reaction Type"} value={selectedType} onChange={(event) => {setSelectedType(event.target.value)}}>
          <option disabled value="">Reaction Type</option>
          {
              reactionTypeMenuOptions.map((option: ReactionTypeMenuOption) => {
                  return <option key={option.reactionType} value={option.reactionType}>{option.optionTitle}</option>
              })
          }
      </Form.Select>
    </div>

  )
}
export default ReactionTypesDropdown