import React, { useState, useEffect } from "react";
import "./Buttons.css"; // Import your CSS for styling

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="top-button">
      {isVisible && 
        <button onClick={scrollToTop} className="scroll-to-top">
        <span className="material-icons-round icon">arrow_upward</span>
       </button>
      }
    </div>
  );
};

export default TopButton;