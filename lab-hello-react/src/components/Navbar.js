import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
    return (
        <nav className="text-bg-dark d-flex justify-content-between p-3">
            <img src={logo} alt="IronHack Logo" />
            <img src={menu} alt="Menu Icon" />
        </nav>
    );
}

export default Navbar;