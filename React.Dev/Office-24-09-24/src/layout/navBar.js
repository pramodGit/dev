import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="header">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pages/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio/12">Portfolio 12</NavLink>
                </li>
                <li>
                    <Link to="/notFoundPage">Not Found</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;