"use client";
import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace("#", ""));
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight / 2 +
          el.offsetHeight / 2;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);
  return null;
}
