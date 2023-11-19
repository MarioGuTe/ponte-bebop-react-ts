/* eslint-disable no-console */
import React, { useEffect } from "react";

const useFocusOnMount = (ref: React.MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    try {
      if (ref && ref.current) {
        ref.current.focus();
        console.log("useFocusOnMount", ref.current);
      }
    } catch (error) {
      console.error("Error focusing on ref:", error);
    }
  }, [ref]);
};

export default useFocusOnMount;
