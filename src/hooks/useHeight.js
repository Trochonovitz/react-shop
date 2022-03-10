import { useEffect, useState } from 'react';

export const useHeight = (refNav, refInfoBox) => {
  const [height, setHeight] = useState({ heightNav: 0, heightInfoBox: 0 });

  useEffect(() => {
    const handleHeight = () =>
      setHeight({
        heightNav: refNav.current.clientHeight,
        heightInfoBox: refInfoBox.current.clientHeight,
      });
    handleHeight();
    window.addEventListener('resize', handleHeight);
    return () => window.removeEventListener('resize', handleHeight);
  }, [refNav, refInfoBox]);

  return { height };
};
