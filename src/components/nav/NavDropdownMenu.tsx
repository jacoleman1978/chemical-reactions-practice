import { NavDropdown } from "react-bootstrap";
import { getNavDropdownTitle } from "./helpers/getNavDropdownTitle";
import { getNavDropdownOptions } from "./helpers/getNavDropdownOptions";
import { MenuLink } from "./configurations/interfaces";
import { PracticeType } from "../common/configurations/types";

// Populates the options for the navbar dropdown menus
// Called from /nav/NavMenus.tsx
const NavDropdownMenu = ({practiceType}: {practiceType: PracticeType}) => {
    const navDropdownTitle: string = getNavDropdownTitle(practiceType);
    const navDropdownOptions: MenuLink[] = getNavDropdownOptions(practiceType);

    const menuOptions = navDropdownOptions.map((option: MenuLink) => {
        return <NavDropdown.Item key={option.label} href={option.path}>{option.label}</NavDropdown.Item>
    })

    return (
        <NavDropdown title={navDropdownTitle}>
            {menuOptions}
        </NavDropdown>
    )
}

export default NavDropdownMenu;