import { useRef, useState, useEffect } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 요소가 뷰포트에 들어오는지 감지하는 Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    // Hero 섹션으로 돌아가면 애니메이션 리셋
    const handleScroll = () => {
      const resetThreshold = window.innerHeight * 0.3; // Hero 섹션의 30% 지점
      if (window.scrollY < resetThreshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
