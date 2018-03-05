const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_managers_with_routes_1_db');

const Employee = _conn.define('employee', {
  name: Sequelize.STRING
});

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Employee.create({ name: 'Mario' }),
    Employee.create({ name: 'Peach' }),
    Employee.create({ name: 'Luigi' }),
    Employee.create({ name: 'Bowser' })
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    Employee
  }
}
