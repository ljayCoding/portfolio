import './navbar.css';
import GitHubIcon from '../../assets/github-mark-white.png';
import LinkedInIcon from '../../assets/linkedin.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-container">
      <a href="https://github.com/ljayCoding" target="_blank">
        <img className="github-icon" src={GitHubIcon}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/luke-webber-43714b25b/"
        target="_blank"
      >
        <img className="linkedin-icon" src={LinkedInIcon}></img>
      </a>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link className="menu__item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
