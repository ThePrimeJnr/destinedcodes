import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

const Utterances = ({ config }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;

    const { current: currentRef } = ref;

    // Clean up any existing comments
    while (currentRef.firstChild) {
      currentRef.removeChild(currentRef.firstChild);
    }

    // Create new script element for Utterances
    const script = document.createElement('script');
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key]);
    });

    // Set theme attribute based on Next.js theme
    if (theme === 'dark') {
      script.setAttribute('theme', 'github-dark');
    }

    // Append script to Utterances div
    currentRef.appendChild(script);

    // Clean up function
    return () => {
      // Remove script when component unmounts
      while (currentRef.firstChild) {
        currentRef.removeChild(currentRef.firstChild);
      }
    };
  }, [config, theme]); // Include config and theme in dependency array

  return <div ref={ref} />;
};

export default Utterances;
