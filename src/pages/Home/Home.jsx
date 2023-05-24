import './home.css';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavBar />
      <p>
        Hi, I'm{' '}
        <span>
          <a
            href="https://www.linkedin.com/in/luke-webber-43714b25b/"
            target="_blank"
            className="text-link"
          >
            Luke Webber
          </a>
        </span>
      </p>
      <p>
        I'm a passionate{' '}
        <span>
          <a href="/projects" className="text-link">
            front-end developer
          </a>
        </span>{' '}
        based in Johannesburg, South Africa
      </p>
    </>
  );
};
export default Home;
