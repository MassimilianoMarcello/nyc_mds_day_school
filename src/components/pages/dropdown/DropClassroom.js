import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropClassroom() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const ClassroomItems = [
    {
      title: 'EARLY CHILDOOD',
      path: '/sample_page_one',
      cName: 'dropdown-link'
    },
    {
      title: 'LOWER SCHOOL',
      path: '/sample_page_two',
      cName: 'dropdown-link'
    },
    {
      title: 'MIDDLE SCHOOL',
      path: '/sample_page_three',
      cName: 'dropdown-link'
    },
    {
      title: 'BRIDGE PROGRAM',
      path: '/sample_page_one',
      cName: 'dropdown-link'
    },
    {
      title: 'CURRICULUM GUIDE',
      path: '/sample_page_two',
      cName: 'dropdown-link'
    }
  ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={`dropdown-menu ${click ? 'clicked' : ''} classroom-drop`}  
      >
        {ClassroomItems.map((item, index) => {
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

export default DropClassroom;
