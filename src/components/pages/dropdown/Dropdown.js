import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const MenuItems = [
    {
      title: 'ABOUT MDS',
      path: '/about_mds',
      cName: 'dropdown-link'
    },
    {
      title: 'LEADERSHIP',
      path: '/leadership',
      cName: 'dropdown-link'
    },
    {
      title: 'OUR BOARD',
      path: '/our_board',
      cName: 'dropdown-link'
    },
    {
      title: 'MDS AT GLANCE',
      path: '/mds_at_a_glance',
      cName: 'dropdown-link'
    }
  ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={`dropdown-menu ${click ? 'clicked' : ''} about-drop`}  
      >
        {MenuItems.map((item, index) => {
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

export default Dropdown;
