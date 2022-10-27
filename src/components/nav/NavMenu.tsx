import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { NavMenuProps } from "../../interfaces";
import getPracticeDefaultTitle from "./helpers/getPracticeDefaultTitle";
import { practiceTypes } from "../../configurations/navDropdowns";

const NavMenu = ({path}: NavMenuProps) => {
    let practiceTypeTitle: string = getPracticeDefaultTitle(path);

    return (
        <div >
            <Navbar>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav variant="pills">
                    <NavDropdownMenu key="practice-types" title={practiceTypeTitle} options={practiceTypes} />
                </Nav>
            </Navbar>
        </div>

    )
}

export default NavMenu;