import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <header className="nav-container">
      <nav className="nav">
        <NavLink to="/" className="link">
          Nedtælling
        </NavLink>
        <NavLink to="/point" className="link">
          Point
        </NavLink>
      </nav>
    </header>
  );
}
