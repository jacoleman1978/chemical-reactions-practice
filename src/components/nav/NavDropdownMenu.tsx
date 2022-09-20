import { NavDropdown } from "react-bootstrap";
import { NavDropdownMenuProps, MenuLink } from "../../interfaces";

const NavDropdownMenu = ({title, options}: NavDropdownMenuProps) => {
    const menuOptions = options.map((option: MenuLink) => {
        return <NavDropdown.Item key={option.label} href={option.path}>{option.label}</NavDropdown.Item>
    })

    return (
        <NavDropdown title={title}>
            {menuOptions}
        </NavDropdown>
    )
}

export default NavDropdownMenu;