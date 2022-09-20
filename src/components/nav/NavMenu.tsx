import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { NavMenuProps } from "../../interfaces";
import getPracticeDefaultTitle from "./helpers/getPracticeDefaultTitle";
import getCompoundDefaultTitle from "./helpers/getCompoundDefaultTitle";
import { practiceTypes, namingCompoundTypes, formulaCompoundTypes } from "../../configurations/navDropdowns";

const NavMenu = ({path}: NavMenuProps) => {
    let practiceTypeTitle: string = getPracticeDefaultTitle(path);
    let compoundTypeTitle: string = getCompoundDefaultTitle(path);


    return (
        <div className="flex-center-center">
            <Navbar>
                <Nav variant="pills">
                    <NavDropdownMenu key="practice-types" title={practiceTypeTitle} options={practiceTypes} />
                    {path[0] === "compounds" && path[1] === "naming" ? <NavDropdownMenu key="compound-types-naming" title={compoundTypeTitle} options={namingCompoundTypes} /> : ""}
                    {path[0] === "compounds" && path[1] === "formulas" ? <NavDropdownMenu key="compound-types-formulas" title={compoundTypeTitle} options={formulaCompoundTypes} /> : ""}
                </Nav>
            </Navbar>
        </div>

    )
}

export default NavMenu;