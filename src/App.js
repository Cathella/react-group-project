import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from './components/Nav/Nav';
import store from './redux/configurateStore';
import Rockets from './components/Rockets/Rockets';
import Mission from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import { fetchRockets } from './redux/rockets/rockets';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
