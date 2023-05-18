import { NavLink } from "react-router-dom";

let Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid navbar-header" class="header">
        <ul className="nav navbar-nav" class="navbar-nav">
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0b2e4e" : "white",
              })}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0b2e4e" : "white",
              })}
              to="/users/5"
            >
              Student Details
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0b2e4e" : "white",
              })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0b2e4e" : "white",
              })}
              to="/error"
            >
              Error
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;