import { AVAILABLE_LANGUAGES } from '../consts';
import { Result } from '../models/UserProfileModel';
import '../styles/Projects.css';

interface ProjectsProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function Projects({ user, language }: ProjectsProps) {
    const projectsData = user.data.projects;

    if (!projectsData || projectsData.list.length === 0) {
        return null;
    }

    return (
        <div className="projects-container">
            <section aria-labelledby="projects-title">
                <h2 id="projects-title">{projectsData.title[language]}</h2>
                <ul className="projects-list">
                    {projectsData.list.map((project, index) => (
                        <li key={index} className="project-item">
                            <h3 className="project-name">{project.title[language]}</h3>
                            <p className="project-description">{project.description[language]}</p>
                            {project.link && (
                                <a
                                    className="project-link"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View project ${project.title[language]}`}
                                >
                                    View Project
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Projects;