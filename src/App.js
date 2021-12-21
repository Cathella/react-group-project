import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import store from './redux/configurateStore';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact component={Profile} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
