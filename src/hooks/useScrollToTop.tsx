import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const unlisten = () => {
      // Scroll to the top when the pathname changes
      window.scrollTo(0, 0);
    };
    // Call the unlisten function when the component is mounted
    unlisten();
  }, [location]);
}

export default useScrollToTop;
