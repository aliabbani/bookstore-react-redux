import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="left-nav">
        <h1>BookStore CMS</h1>
        {links.map((link) => (
          <li className="left-nav-li" key={link.id}>
            <NavLink to={link.path} className="left-nav-a" activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="right-nav"><FaUserAlt /></div>
    </nav>
  );
};

export default Navbar;
