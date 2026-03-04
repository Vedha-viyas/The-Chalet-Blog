import { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import LandingPage from './components/pages/LandingPage/LandingPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage/PortfolioPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import type { PageType } from './types';
import styles from './App.module.scss';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className={styles.app}>
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <div className={styles.mainContent}>
        {renderPage()}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
