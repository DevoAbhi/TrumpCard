import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact >
      <Home></Home>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
