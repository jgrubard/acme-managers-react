import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const path = props.location.pathname;
  const employees = props.employees;
  return (
    <ul>
      <li>
        {path === '/' ? (
          <span>Home</span>
        ) : (
          <Link to='/'>Home</Link>
        )}
      </li>
      <li>
        {path === '/employees' ? (
          <span>Employees: {employees.length}</span>
        ) : (
          <Link to='/employees'>Employees: {employees.length}</Link>
        )}
      </li>
    </ul>
  );
}

export default Nav;
