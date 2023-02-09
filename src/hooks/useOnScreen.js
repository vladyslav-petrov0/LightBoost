import { useEffect, useState } from 'react';

export const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const options = {
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => observer.unobserve(ref.current);
    }
  }, []);

  return isVisible;
};
