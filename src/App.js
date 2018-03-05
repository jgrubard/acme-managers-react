import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Employees from './Employees';

const Home = () => {
  return <div>Home</div>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('/api/employees')
      .then(result => result.data)
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err));
  }

  render() {
    const { employees } = this.state;
    return (
      <Router>
        <div>
          <h1>Acme Managers React</h1>
          <Route component={({ location }) => <Nav location={ location } employees={ employees} />} />
          <Route exact path='/' component={Home} />
          <Route path='/employees' component={() => <Employees employees={employees}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
