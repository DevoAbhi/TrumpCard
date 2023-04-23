import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Game from './Card/pages/Game';
import Card from './Card/pages/Card';
import Auth from './Auth/pages/Auth';
import Dashboard from './Dashboard/pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/game" exact element={<Game />} />

        <Route path="/card" exact element={<Card />} />

        <Route path="/auth" exact element={<Auth />} />

        <Route path='/dashboard' exact element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
