const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/api/employees', (req, res, next) => {
  Employee.findAll()
    .then(employees => res.json(employees))
    .catch(next);
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`** Listening on Port ${port} **`));

//------V--DATABASE--V-------

const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_managers_react_db');

const Employee = _conn.define('employee', {
  name: Sequelize.STRING
});

_conn.sync({ force: true })
  .then(() => {
    return Promise.all([
      Employee.create({ name: 'moe'}),
      Employee.create({ name: 'larry'}),
      Employee.create({ name: 'curly'})
    ])
    .then(([ moe, larry, curly ]) => {
      larry.setManager(moe)
      curly.setManager(moe)
    })

  })

Employee.belongsTo(Employee, { as: 'manager' })

