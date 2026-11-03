import { useState, useEffect, RefObject } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement>) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      const el = ref.current;
      if (!el) return;
      const sectionHeight = el.offsetHeight;
      const sectionTop = el.offsetTop - 80;
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    scrollActive();
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [ref]);

  return state;
}
