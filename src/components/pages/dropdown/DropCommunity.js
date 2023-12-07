import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropCommunity() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const communityItems = [
    {
      title: 'CAMP OROT',
      path: '/camp_orot',
      cName: 'dropdown-link'
    }
  ];
  
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {communityItems.map((item, index) => {
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

export default DropCommunity;