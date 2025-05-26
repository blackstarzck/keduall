import { useEffect, useState } from 'react';

const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
};

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(DEVICE_TYPES.DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width <= BREAKPOINTS.MOBILE) {
        setDeviceType(DEVICE_TYPES.MOBILE);
      } else if (width <= BREAKPOINTS.TABLET) {
        setDeviceType(DEVICE_TYPES.TABLET);
      } else {
        setDeviceType(DEVICE_TYPES.DESKTOP);
      }
    };

    // 초기 상태 설정
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 클린업
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

export { DEVICE_TYPES, BREAKPOINTS };
export default useDeviceType; 