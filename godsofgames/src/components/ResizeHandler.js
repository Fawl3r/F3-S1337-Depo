import { useEffect } from "react";

const ResizeHandler = ({ setIsMobileMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobileMenuOpen]);

  return null; // This component doesn't render anything
};

export default ResizeHandler;
