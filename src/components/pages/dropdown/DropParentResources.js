import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropParentResources() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const MenuItems = [
    {
      title: 'CALENDAR',
      path: '/sample_page_one',
      cName: 'dropdown-link'
    },
    {
      title: 'LUNCH MENU',
      path: '/sample_page_two',
      cName: 'dropdown-link'
    },
    {
      title: 'SHOP MDS',
      path: '/sample_page_three',
      cName: 'dropdown-link'
    },
    {
      title: 'PARENT COUNCIL',
      path: '/sample_page_two',
      cName: 'dropdown-link'
    },
    {
        title: 'AFTER SCHOOL ACTIVITIES',
        path: '/sample_page_three',
        cName: 'dropdown-link'
      }
  ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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

export default DropParentResources;
