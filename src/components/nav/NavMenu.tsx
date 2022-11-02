import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { NavMenuProps } from "../../interfaces";
import getPracticeDefaultTitle from "./helpers/getPracticeDefaultTitle";
import getCompoundDefaultTitle from "./helpers/getCompoundDefaultTitle";
import { practiceTypes, namingCompoundTypes, formulaCompoundTypes } from "../../configurations/navDropdowns";

const NavMenu = ({path}: NavMenuProps) => {
    const practiceTypeTitle: string = getPracticeDefaultTitle(path);
    const pathParts: string[] = path.split("/");
    
    let namingTitle: string = "";
    if (pathParts[0] === "naming" || pathParts[0] === "formulas") {
        namingTitle = getCompoundDefaultTitle(pathParts);
    }
    
    return (
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav variant="pills">
                <NavDropdownMenu key="practice-types" title={practiceTypeTitle} options={practiceTypes} />
                {pathParts[0] === "naming" &&  <NavDropdownMenu key="naming-types" title={namingTitle} options={namingCompoundTypes} />}
                {pathParts[0] === "formulas" &&  <NavDropdownMenu key="formulas-types" title={namingTitle} options={formulaCompoundTypes} />}
            </Nav>
        </Navbar>
    )
}

export default NavMenu;