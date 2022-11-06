import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { PracticeType } from "../common/configurations/types";

// Called from App.tsx
const NavMenu = ({practiceType}: {practiceType: PracticeType}) => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav variant="pills">
                <NavDropdownMenu key="practice-types" practiceType={"main"} />
                {practiceType !== "" && <NavDropdownMenu key="naming-types" practiceType={practiceType} />}
            </Nav>
        </Navbar>
    )
}

export default NavMenu;