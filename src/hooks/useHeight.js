import { useEffect, useState } from 'react';

export const useHeight = (refNav, refInfoBox) => {
  const [height, setHeight] = useState({ heightNav: 0, heightInfoBox: 0 });

  useEffect(() => {
    const getHeight = () =>
      setHeight({
        heightNav: refNav.current.clientHeight,
        heightInfoBox: refInfoBox.current.clientHeight,
      });
    getHeight();
    window.addEventListener('resize', getHeight);
    return () => window.removeEventListener('resize', getHeight);
  }, [refNav, refInfoBox]);

  return { height };
};
