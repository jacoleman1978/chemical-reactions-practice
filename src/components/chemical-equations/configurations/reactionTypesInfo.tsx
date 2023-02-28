import { InformationDisplay } from "./equationInterfaces";

export const reactionTypesInfo: InformationDisplay[] = [
    {
        reactionType: "decomposition",
        label: "Decomposition",
        information: "This type has one main group ionic compound as a reactant. The two products are both elements. Keep in mind that some elements are diatomic in their elemental form.",
        example: () => {
            return (
                <ul>
                     <li className="flex-left-center med-gap">
                        {'AB'}<i className="fa-solid fa-arrow-right-long"></i>{'A + B'}
                     </li>
                </ul>
            )
        }
    },
    {
        reactionType: "combustion",
        label: "Combustion",
        information: "This type has two reactants, a hydrocarbon and oxygen gas. A hydrocarbon is a compound with only carbons and hydrogens, but in some cases there will also be one or more oxygens. The two products are always water vapor and carbon dioxide gas.",
        example: () => {
            return (
                <ul>
                    <li className="flex-left-center med-gap">
                        <div className="flex-left-center">C<sub>x</sub>H<sub>y</sub>O<sub>z</sub></div>+
                        <div>O<sub>2</sub></div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        <div className="flex-left-center">H<sub>2</sub>O</div> {'+'} 
                        <div className="flex-left-center">CO<sub>2</sub></div>
                    </li>
                </ul>
            )
        }
    },
    {
        reactionType: "single-replacement",
        label: "Single Replacement",
        information: "This type has two reactants, an aqueous ionic compound and an element. The two reactants are also an ionic compound and an element. If the elemental reactant is a metal, it will replace the metal in the ionic compound reactant. If the elemental reactant is a nonmental, it will replace the nonmetal in the ionic compound reactant. This type of reaction will only produce products if the Activity Series shows that the elemental reactant is more reactive than what it is replacing.",
        example: () => {
            return (
                <ul>
                    <li className="flex-left-center med-gap">
                        <div className="flex-left-center">AB<sub>{'(aq)'}</sub></div>+
                        <div className="flex-left-center">C<sub>{'(s)'}</sub></div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        <div>CB</div>+
                        <div>A</div>
                    </li>
                    <li className="flex-left-center med-gap">
                        <div className="flex-left-center">AB<sub>{'(aq)'}</sub></div>+
                        <div>C</div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        <div>CB</div>+
                        <div>A</div>
                    </li>
                    <li className="flex-left-center med-gap">
                        <div className="flex-left-center">AB<sub>{'(aq)'}</sub></div>+
                        <div>C</div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        {'No Reaction'} 
                    </li>
                </ul>
            )
        }
    },
    {
        reactionType: "double-replacement",
        label: "Double Replacement",
        information: "This type has two reactants, both aqueous ionic compounds or acids. The products are also two compounds, usually ionic, where the cations have swapped anion partners. One of the products must be a solid, gas or molecular compound. The other product is usually an aqueous ionic compound. The Solubility Table must be used to determine if an ionic compound is soluble in water (aqueous) or insoluble (solid).",
        example: () => {
            return (
                <ul>
                    <li className="flex-left-center med-gap">
                        <div className="flex-left-center">AB<sub>{'(aq)'}</sub></div>+
                        <div className="flex-left-center">CD<sub>{'(aq)'}</sub></div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        <div>AD</div>+
                        <div>BC</div>
                    </li>
                </ul>
            )
        }
    },
    {
        reactionType: "combination",
        label: "Combination",
        information: "This type has two reactants, both elements. There is one product that is a combination of the two elements. ",
        example: () => {
            return (
                <ul>
                    <li className="flex-left-center med-gap">
                        <div>A</div>+
                        <div>B</div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        <div>AB</div>
                    </li>
                </ul>
            )
        }
    },
]