import './projects.css';
import NavBar from '../NavBar/NavBar';
import data from '../../assets/projects.json';
import { useState, useEffect } from 'react';

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

  console.log(projects);

  return (
    <>
      <NavBar />
      <h1 className='heading'>Projects</h1>
      {projects &&
        projects.map((project) => (
          <div
            className="project-div"
            key={project.project_name}
            style={{
              backgroundImage: `url("${project.background}")`,
            }}
          >
            <h1 className='project-label'>{project.project_name}</h1>
            <a href={project.code_url} target="_blank">
              <button className="code-button">Code</button>
            </a>
            <a href={project.web_url} target="_blank">
              <button>Site</button>
            </a>
          </div>
        ))}
    </>
  );
};
export default Projects;
