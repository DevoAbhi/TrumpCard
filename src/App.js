import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Game from './Card/pages/Game';
import Card from './Card/pages/Card';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact >
      <Home></Home>
      </Route>
      <Route path="/game" exact >
        <Game></Game>
      </Route>
      <Route path="/card" exact >
        <Card></Card>
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
