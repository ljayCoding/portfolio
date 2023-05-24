import NavBar from '../NavBar/NavBar';
import './project.css';
import data from '../../data/projects.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState();
  const project = projects?.find(
    (project) => project.id.toString() === id
  );

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await data;
        setProjects(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      {project && (
        <>
          <div>
            <h1 className="heading">{project.name}</h1>
            <span className="button-container">
              <a
                href={project.site_url}
                target="_blank"
                className="button-link"
              >
                <button className="btn link-btn">site</button>
              </a>
              <a
                href={project.code_url}
                target="_blank"
                className="button-link"
              >
                <button className="btn link-btn">code</button>
              </a>
            </span>
            <p>{project.description}</p>
            {windowDimensions.width >= 600 ? (
              <div className="desktop-display">
                <img src={project.display.desktop} alt="image" />
              </div>
            ) : (
              <div className="mobile-display">
                <img src={project.display.mobile} alt="image" />
              </div>
            )}
            <p className="completed-text">
              Completed : {project.completion}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default Project;
