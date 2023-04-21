import { Navbar, Nav } from "react-bootstrap";
import NavDropdownMenu from "./NavDropdownMenu";
import { PracticeType } from "../common/configurations/commonTypes";

// Displays the navbar menus
// Called from App.tsx
const NavMenus = ({practiceType}: {practiceType: PracticeType}) => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav variant="pills">
                <NavDropdownMenu key="practice-types" practiceType={"main"} />
                {(practiceType === "formulas" || practiceType === "naming" ) ? <NavDropdownMenu key="naming-types" practiceType={practiceType} /> : null}
            </Nav>
            <Nav.Link href="/quiz/list">Quizzes</Nav.Link>
        </Navbar>
    )
}

export default NavMenus;