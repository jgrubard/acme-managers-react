import React from 'react';

const Employees = (props) => {
  const employees = props.employees;
  return (
    <div>
      <ul>
        {
          employees.map( employee => (
            <li key={employee.id}>{employee.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Employees;
