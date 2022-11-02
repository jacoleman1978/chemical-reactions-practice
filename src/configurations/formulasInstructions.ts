import { CompoundInstructions } from "../interfaces";

export const formulasInstructions: CompoundInstructions = {
    ionic: {
        main: [
            "The first part of the name is a metal from Group 1 or 2, ammonium, or one of the four exceptions: aluminum, zinc, cadmium, or silver.",
            "Notice that Roman numerals are NOT used, indicating that the charge on the metal is its preferred charge/oxidation state.",
            "The second part of the name is a nonmetal, using its preferred charge/oxidation state.",
            "Use subscripts to indicate how many of each ion is present, if more than one ion is needed to make the net charge zero.",
            "The subscripts need to be in the lowest whole number ratio."
        ],
        transition: [
            "The first part of the name is a transition metal.",
            "Notice that Roman numerals ARE being used, indicating the magnitude of the positive charge on the metal.",
            "The second part of the name is a nonmetal, using its preferred charge/oxidation state.",
            "Use subscripts to indicate how many of each ion is present, if more than one ion is needed to make the net charge zero.",
            "The subscripts need to be in the lowest whole number ratio."
        ],
        polyatomic: [
            "Polyatomic ions are ions composed of more than one atom.",
            "There are both positive and negative polyatomic ions.",
            "Please refer to a common ion table for a list of the most common polyatomic ions.",
            "Use parentheses around the polyatomic ion and subscripts to indicate how many of each ion is present, BUT ONLY if more than one ion is needed to make the net charge zero.",
            "The subscripts need to be in the lowest whole number ratio."
        ],
        mixed: [
            "Before writing the formula for the ionic compound, determine if the compound has main group ions, transition metals, and/or polyatomic ions.",
            "The rules used to write the formula depend on the type of ions involved."
        ]
    },
    acids: [
        "All acid names end with the word 'acid'.",
        "All acid formulas start with the hydrogen cation.",
        "There are three patterns used to identfy the anion part of the acid compound.",
        "If the name matches the format of 'hydro_____ic acid', the anion's name is the root of the acid name with '-ide' added to the end.",
        "If the name matches the format of '_____ous acid', the anion's name is the root of the acid name with '-ite' added to the end.",
        "Lastly, if the name matches the format of '_____ic acid', the anion's name is the root of the acid name with '-ate' added to the end.",
        "Please refer to a common ion table for a list of the most common polyatomic ions.",
        "Use parentheses around the polyatomic ion and subscripts to indicate how many of each ion is present, BUT ONLY if more than one ion is needed to make the net charge zero.",
        "The subscripts need to be in the lowest whole number ratio."
    ],
    molecular: [
        "Molecular compounds consist only of nonmetal elements and are identified by the use of Greek prefixes.",
        "They will never have a metal present. Since molecular compounds are not ionic, the quantity of each element must be indicated using Greek prefixes.",
        "However, mono is never used for the first element in the compound, but it must be used for the second element, if there is only one second element."
    ],
    mixed: [
        "Before writing the formula of a compound, determine whether the compound is ionic, acidic or molecular.",
        "If the type is ionic, it is also necessary to determine the type of ionic compound."
    ],
}