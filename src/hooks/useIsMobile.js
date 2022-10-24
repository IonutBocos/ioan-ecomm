import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handler = (event) => {
      console.log('sth');

      setIsMobile(!event.matches);
    };

    const mediaQueryList = matchMedia('(min-width:1024px)');
    // if (matches) {
    //   setIsMobile(true);
    // } else {
    //   setIsMobile(false);
    // }

    setIsMobile(!mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handler);

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, []);
};
