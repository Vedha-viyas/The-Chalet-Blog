import type { FC } from 'react';
import styles from './PortfolioPage.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const PortfolioPage: FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of your first project',
      technologies: ['React', 'TypeScript', 'SCSS'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of your second project',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description of your third project',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <main className={styles.portfolioPage}>
      <section className={styles.portfolioHeader}>
        <h1 className={styles.pageTitle}>My Portfolio</h1>
        <p className={styles.subtitle}>
          Explore a selection of my recent projects and work
        </p>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectItem}>
              <div className={styles.projectImageWrapper}>
                {/* Project image */}
              </div>
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.link && (
                    <a href={project.link} className={styles.projectLink}>
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className={styles.projectLink}>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
