import './projects.css';
import NavBar from '../../components/NavBar/NavBar';
import data from '../../data/projects.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState();

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
    <>
      <NavBar />
      <h1 className="heading">Projects</h1>
      {projects &&
        projects.map((project) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={project.name}
            to={project.id}
          >
            <div
              className="project-div"
              style={{
                backgroundImage: `url("${project.background}")`,
              }}
            >
              <h1 className="project-label">{project.name}</h1>
            </div>
          </Link>
        ))}
    </>
  );
};
export default Projects;
