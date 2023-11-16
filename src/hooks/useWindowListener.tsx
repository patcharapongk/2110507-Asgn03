import { useEffect } from "react";

const useWindowListener = (event: string, listener: EventListener) => {
  return useEffect(() => {
    window.addEventListener(event, listener);
    return () => window.removeEventListener(event, listener);
  }, []);
};

export default useWindowListener;
