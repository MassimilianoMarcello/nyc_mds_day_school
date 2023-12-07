import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropClassroom() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const ClassroomItems = [
    {
      title: 'EARLY CHILDOOD',
      path: '/early_childood',
      cName: 'dropdown-link'
    },
    {
      title: 'LOWER SCHOOL',
      path: '/lower_school',
      cName: 'dropdown-link'
    },
    {
      title: 'MIDDLE SCHOOL',
      path: '/middle_school',
      cName: 'dropdown-link'
    },
    {
      title: 'BRIDGE PROGRAM',
      path: '/bridge_program',
      cName: 'dropdown-link'
    },
    {
      title: 'CURRICULUM GUIDE',
      path: '/curriculum_guide',
      cName: 'dropdown-link'
    }
  ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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
