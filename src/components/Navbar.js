import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/pages/dropdown/Dropdown";
import DropAdmission from "./pages/dropdown/DropAdmissions";
import DropClassroom from "../components/pages/dropdown/DropClassroom";
import DropParentResources from "./pages/dropdown/DropParentResources";
import DropCommunity from "./pages/dropdown/DropCommunity";
import DropSupport from "../components/pages/dropdown/DropSupport";
import "./Navbar.css";
import MobileMenu from "../components/pages/submenu mobile/MobileMenu";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkHover = (dropdown) => {
    setClick(true);
    setActiveDropdown(dropdown);
  };

  const handleLinkLeave = () => {
    setClick(false);
    setActiveDropdown(null);
  };

  const handleLinkClick = (dropdown) => {
    setClick((prevClick) => !prevClick);
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => handleLinkClick("about")}>
        <img src="./MDS Color Logo.svg" alt="mds" />
      </Link>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="menu-mobile-only nav-links-mobile">
          <MobileMenu />
        </li>
        {[
          { key: "about", label: "ABOUT MDS", component: <Dropdown /> },
          { key: "admissions", label: "ADMISSIONS", component: <DropAdmission /> },
          { key: "classroom", label: "IN THE CLASSROOM", component: <DropClassroom /> },
          { key: "parent-resources", label: "PARENT RESOURCES", component: <DropParentResources /> },
          { key: "community", label: "COMMUNITY RESOURCES", component: <DropCommunity /> },
          { key: "support", label: "SUPPORT MDS", component: <DropSupport /> },
        ].map(({ key, label, component }) => (
          <li className="nav-item" key={key} onMouseEnter={() => handleLinkHover(key)} onMouseLeave={handleLinkLeave}>
            <Link to="#" className="nav-links" onClick={() => handleLinkClick(key)}>
              {label}
            </Link>
            {activeDropdown === key && component}
          </li>
        ))}
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;