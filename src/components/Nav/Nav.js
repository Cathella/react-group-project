import { Link } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <span>Space Travelers Hub</span>
      </Link>
    </nav>
  </header>
);

export default Nav;
