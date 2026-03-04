import type { FC } from 'react';
import styles from './AboutPage.module.scss';

const AboutPage: FC = () => {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.aboutContent}>
          <h1 className={styles.pageTitle}>About Me</h1>
          <p className={styles.introduction}>
            Welcome to my corner of the web. I'm a passionate web developer dedicated to creating beautiful, functional digital experiences.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>My Story</h2>
          <p className={styles.storyText}>
            Your journey and background information goes here. Share your passion for web development and design.
          </p>
        </div>
      </section>

      <section className={styles.expertise}>
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <div className={styles.expertiseList}>
          <div className={styles.expertisItem}>
            <h3 className={styles.expertiseTitle}>Frontend</h3>
            <ul className={styles.expertiseTech}>
              <li>React</li>
              <li>TypeScript</li>
              <li>SCSS/CSS</li>
            </ul>
          </div>
          <div className={styles.expertisItem}>
            <h3 className={styles.expertiseTitle}>Tools & Tech</h3>
            <ul className={styles.expertiseTech}>
              <li>Vite</li>
              <li>Git</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
