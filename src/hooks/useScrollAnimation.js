import { useEffect, useRef } from 'react';

/**
 * Hook to add scroll animations to elements
 * @param {Object} options - Configuration options
 * @param {string} options.animationClass - Class to add when element is in view
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {number} options.rootMargin - Margin around the root
 * @returns {React.RefObject} - Ref to attach to the element
 */
export default function useScrollAnimation({
  animationClass = 'animate',
  threshold = 0.2,
  rootMargin = '-50px',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            // Once the animation is triggered, we can stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, threshold, rootMargin]);

  return ref;
}