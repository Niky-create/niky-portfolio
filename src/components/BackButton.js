import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttons.css"; // Reuse the CSS file for styling

const BackButton = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <button onClick={goBackHome} className="back-button">
      <span className="material-icons-round icon">arrow_back</span>
    </button>
  );
};

export default BackButton;
