import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropSupport() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const supportItems = [
    {
      title: 'MAKE A GIFT',
      path: '/supporting_mds',
      cName: 'dropdown-link'
    },
    {
      title: 'WAYS TO GIVE',
      path: '/supporting_mds',
      cName: 'dropdown-link'
    },
    {
      title: 'ANNUAL FUND',
      path: '/supporting_mds',
      cName: 'dropdown-link'
    },
    {
      title: 'LIMMUD HAYOM,',
      path: '/supporting_mds',
      cName: 'dropdown-link'
    },
    {
        title: 'PROGRAM SPONSORSHIP',
        path: '/supporting_mds',
        cName: 'dropdown-link'
      }
  ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {supportItems.map((item, index) => {
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

export default DropSupport;

