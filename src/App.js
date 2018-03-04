import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => <div>Home</div>

const Employees = () => {
  return (
    <div>
      Employees
    </div>
  );
}

const Nav = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/employees'>Employees</Link></li>
    </ul>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    axios('/api/employees')
      .then(result => result.data)
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route exact path='/' component={Home} />
          <Route path='/employees' component={Employees} />
        </div>
      </Router>
    );
  }
}

// const App = () => (
//   <Router>
//     <Route path='/employees' component={Employees} />
//   </Router>
// )

// export default App;



// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Acme Managers React</h1>
//         <Employees />
//       </div>
//     );
//   }
// }
