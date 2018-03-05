const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Employee } = db.models;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, send) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/employees', (req, res, next) => {
  Employee.findAll()
    .then(employees => res.json(employees))
    .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`** Listening on Port ${port} **`));

db.sync()
  .then(() => {
    db.seed();
  });
