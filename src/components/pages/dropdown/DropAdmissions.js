import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropAdmission() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const MenuAdmission = [
    {
      title: 'ADMISSIONS WELCOME',
      path: '/admissions_welcome',
      cName: 'dropdown-link'
    },
    {
      title: 'ADMISSIONS PROCESS',
      path: '/admissions_process',
      cName: 'dropdown-link'
    },
    {
      title: 'FINANCIAL AID',
      path: '/sample_page_one',
      cName: 'dropdown-link'
    },
    {
      title: 'INQUIRE',
      path: '/sample_page_two',
      cName: 'dropdown-link'
    }
  ];
  
  return (
    <>
      <ul
        onClick={handleClick}
        className={`dropdown-menu ${click ? 'clicked' : ''} admission-drop`}  
      >
        {MenuAdmission.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropAdmission;
