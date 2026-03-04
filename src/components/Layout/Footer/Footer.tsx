import type { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>© {currentYear} The Chalet. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#" className={styles.link}>
              GitHub
            </a>
            <a href="#" className={styles.link}>
              LinkedIn
            </a>
            <a href="#" className={styles.link}>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
