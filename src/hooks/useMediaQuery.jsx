import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const { matches, setMatches } = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); // used for check the screen width
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
