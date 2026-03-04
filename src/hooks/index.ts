// Custom React hooks

import { useState, useCallback } from 'react';
import type { PageType } from '../types';

export const useNavigation = (initialPage: PageType = 'landing') => {
  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);

  const navigate = useCallback((page: PageType) => {
    setCurrentPage(page);
    // Optionally scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { currentPage, navigate };
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  return { scrollPosition, handleScroll };
};
