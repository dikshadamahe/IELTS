import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-2 z-50">
      <div
        className="h-full bg-gradient-to-r from-vibrant-emerald-green to-warm-golden-amber"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;