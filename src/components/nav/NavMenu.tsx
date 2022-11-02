import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { NavMenuProps } from "../../interfaces";
import { practiceTypes, namingCompoundTypes, formulaCompoundTypes } from "../../configurations/navDropdowns";

const NavMenu = ({path}: NavMenuProps) => {
    const pathParts: string[] = path.split("/");
    
    return (
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav variant="pills">
                <NavDropdownMenu key="practice-types" title={"Practice Type"} options={practiceTypes} />
                {pathParts[0] === "naming" &&  <NavDropdownMenu key="naming-types" title={"Compound Type"} options={namingCompoundTypes} />}
                {pathParts[0] === "formulas" &&  <NavDropdownMenu key="formulas-types" title={"Compound Type"} options={formulaCompoundTypes} />}
            </Nav>
        </Navbar>
    )
}

export default NavMenu;