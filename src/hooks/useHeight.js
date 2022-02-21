import { useEffect, useState } from 'react';

export const useHeight = (customRef) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleHeight = () => setHeight(customRef.current.clientHeight);
    handleHeight();
    window.addEventListener('resize', handleHeight);
    return () => window.removeEventListener('resize', handleHeight);
  }, [customRef]);

  return { height };
};
