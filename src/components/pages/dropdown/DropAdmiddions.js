import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropAdmission() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const MenuAdmission = [
    {
      title: 'ADMISSIONS WELCOME',
      path: '/marketing',
      cName: 'dropdown-link'
    },
    {
      title: 'ADMISSIONS PROCESS',
      path: '/consulting',
      cName: 'dropdown-link'
    },
    {
      title: 'FINANCIAL AID',
      path: '/design',
      cName: 'dropdown-link'
    },
    {
      title: 'INQUIRE',
      path: '/development',
      cName: 'dropdown-link'
    }
  ];
  
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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
