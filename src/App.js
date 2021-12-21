import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import store from './redux/configurateStore';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact component={Rockets} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
