import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "../components/pages/dropdown/Dropdown";
import DropAdmission from "./pages/dropdown/DropAdmissions";
import DropClassroom from "../components/pages/dropdown/DropClassroom";
import DropParentResources from "./pages/dropdown/DropParentResources";
import DropCommunity from "./pages/dropdown/DropCommunity";
import DropSupport from "../components/pages/dropdown/DropSupport";

import "./Navbar.css";
import MobileMenu from "./pages/submenu mobile/MobileMenu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [parentResources, setParentResourcesDropdown] = useState(false);
  const [classroomDropdown, setClassroomDropdown] = useState(false);
  const [communityDropdown, setCommunityDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleAdmissionDropdownClick = () => {
    setAdmissionDropdown(!admissionDropdown);
    setDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleParentResourcesDropdownClick = () => {
    setParentResourcesDropdown(!parentResources);
    setDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleClassroomDropdownClick = () => {
    setClassroomDropdown(!classroomDropdown);
    setDropdown(false);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setCommunityDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleCommunityDropdownClick = () => {
    setCommunityDropdown(!communityDropdown);
    setDropdown(false);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setSupportDropdown(false); // Chiudi il dropdown di SUPPORT MDS quando clicchi su un altro link
  };

  const handleSupportDropdownClick = () => {
    setSupportDropdown(!supportDropdown);
    setDropdown(false);
    setAdmissionDropdown(false);
    setParentResourcesDropdown(false);
    setClassroomDropdown(false);
    setCommunityDropdown(false);
  };

  return (
    <>
      <nav className="navbar ">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="./MDS Color Logo.svg" alt="mds" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="menu-mobile-only nav-links-mobile ">
            <MobileMenu />
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links" onClick={handleDropdownClick}>
              ABOUT MDS
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleAdmissionDropdownClick();
              }}
            >
              ADMISSIONS
            </Link>
            {admissionDropdown && <DropAdmission />}
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleClassroomDropdownClick();
              }}
            >
              IN THE CLASSROOM
            </Link>
            {classroomDropdown && <DropClassroom />}
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleParentResourcesDropdownClick();
              }}
            >
              PARENT RESOURCES
            </Link>
            {parentResources && <DropParentResources />}
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleCommunityDropdownClick();
              }}
            >
              COMMUNITY RESOURCES
            </Link>
            {communityDropdown && <DropCommunity />}
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleSupportDropdownClick();
              }}
            >
              SUPPORT MDS
            </Link>
            {supportDropdown && <DropSupport />}
          </li>
          {/* <li>
            <Link
              to="#"
              className="nav-links-mobile "
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
