import './navbar.css';
import GitHubIcon from '../assets/github-mark-white.png';
import LinkedInIcon from '../assets/linkedin.png';

const NavBar = () => {
  return (
    <div className="nav-container">
      <h1>Portfolio</h1>
      <a href="https://github.com/ljayCoding" target="_blank">
        <img className="github-icon" src={GitHubIcon}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/luke-webber-43714b25b/"
        target="_blank"
      >
        <img className="linkedin-icon" src={LinkedInIcon}></img>
      </a>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Projects
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
