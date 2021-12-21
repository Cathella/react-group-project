import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
