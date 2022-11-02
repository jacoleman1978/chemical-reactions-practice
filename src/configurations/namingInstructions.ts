import { CompoundInstructions } from "../interfaces";

export const namingInstructions: CompoundInstructions = {
    ionic: {
        main: [
            "The first element in the compound is a cation with only one possible oxidation state.",
            "Its name comes directly from the periodic table.",
            "Main group cations are all Group 1 and 2 metals, except H.",
            "There are four cation exceptions that are added to that group: aluminum, cadmium, zinc, and silver.",
            "The second element in the compound is an anion and has its suffix replaced with '-ide'.",
            "Main group anions consist of nonmetallic elements, excluding the noble gases.",
            "For example, NaCl is sodium chloride."
        ],
        transition: [
            "Transition metals are the cations that have more than one possible oxidation state.",
            "They are all of the metals that are not considered to be main group metals.",
            "Since they can have more than one possible charge, it is essential to indicate their charge with Roman numerals, when naming them.",
            "The charge on the metal is calculated by determining the total negative charge of all the anions included in the compound and dividing that total negative charge by the total number of cations in the compound.",
            "For example, CuO is copper(II) oxide, because the O has a preferred charge of -2 and there is only one of them.",
            "-2 divided by the number of coppers is still 2, so the copper has a +2 charge."
        ],
        polyatomic: [
            "Polyatomic ions are ions composed of more than one atom.",
            "There are both positive and negative polyatomic ions.",
            "Please refer to a common ion table for a list of the most common polyatomic ions."
        ],
        mixed: [
            "Before naming the ionic compound, determine if the compound has only main group ions, transition metals, and/or polyatomic ions.",
            "The naming rules depend on the type of ions involved."
        ]
    },
    acids: [
        "The formula of all acids begin with hydrogen, except for water (dihydrogen monoxide) and hydrogen disulfide.",
        "There are three patterns used when naming acids.",
        "If the name of the anion ends with '-ide', the name of the acid follows the pattern of 'hydro_____ic acid', where the '_____' is replaced with the anion name after removing '-ide'.",
        "For example the anion in HCl is chloride, so its name would be hydrochloric acid.",
        "If the name of the anion ends with '-ate', the name of the acid follows the pattern of '_____ic acid', where the '_____' is replaced with the anion name after removing '-ate'.",
        "If the name of the anion ends with '-ite', the name of the acid follows the pattern of '_____ous acid', where the '_____' is replaced with the anion name after removing '-ite'."
    ],
    molecular: [
        "Molecular compounds consist only of nonmetal elements.",
        "They will never have a metal present.",
        "Since molecular compounds are not ionic, the quantity of each element must be indicated using Greek prefixes.",
        "However, mono is never used for the first element in the compound, but it must be used for the second element, if there is only one second element."
    ],
    mixed: [
        "Make a decision tree flow chart.",
        "The chart asks questions with only 'yes' or 'no' answers.",
        "For mixed compounds, a good first question is 'Does the compound begin with H?'.",
        "If the answer is yes, then use acid naming rules.",
        "If the answer is no, ask a second question: 'Does the compound have metals or the ammonium ion?'.",
        "If the answer is no, then use molecular naming rules.",
        "If the answer is yes, ask a third question: 'Is the metal in Group 1 or 2 or one of the four exceptions?'.",
        "If the answer is yes, use the main group, binary naming rules.",
        "If the answer is no, use the transition metal naming rules."
    ],
}