import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import DropAdmission from './DropAdmiddions';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
    setAdmissionDropdown(false);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false);
    setAdmissionDropdown(false);
  };

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
    setAdmissionDropdown(false);
  };

  const handleAdmissionDropdownClick = () => {
    setAdmissionDropdown(!admissionDropdown);
    setDropdown(false);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#' className='nav-links' onClick={handleDropdownClick}>
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={() => {
                closeMobileMenu();
                handleAdmissionDropdownClick();
              }}
            >
              Products
            </Link>
            {admissionDropdown && <DropAdmission />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              // onClick={handleDropdownClick}
            >
              Contact Us
            </Link>
            {/* {dropdown && <DropAdmission />} */}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
