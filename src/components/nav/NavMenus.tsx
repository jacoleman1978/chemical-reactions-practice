import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { PracticeType } from "../common/configurations/types";

// Displays the navbar menus
// Called from App.tsx
const NavMenus = ({practiceType}: {practiceType: PracticeType}) => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav variant="pills">
                <NavDropdownMenu key="practice-types" practiceType={"main"} />
                {(practiceType !== "" && practiceType !== "reaction-types") && <NavDropdownMenu key="naming-types" practiceType={practiceType} />}
            </Nav>
        </Navbar>
    )
}

export default NavMenus;