import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const root = document.documentElement;
  
    const newMode = !isDarkMode; // Calculate new mode
    setIsDarkMode(newMode); // Update the state
  
    // Apply styles based on the new mode
    if (newMode) {
      root.style.setProperty('--color-text-dark', 'var(--color-text-light)');
      root.style.setProperty('--color-background-dark', 'var(--color-background-light)');
    } else {
      root.style.setProperty('--color-text-dark', 'var(--color-text-dark)');
      root.style.setProperty('--color-background-dark', 'var(--color-background-dark)');
    }

    if (newMode) {
      root.style.setProperty('--color-text-dark', 'var(--color-text-dark)');
      root.style.setProperty('--color-background-dark', 'var(--color-background-dark)');
    } else {
      root.style.setProperty('--color-text-dark', 'var(--color-text-light)');
      root.style.setProperty('--color-background-dark', 'var(--color-background-light)');
    }
  
    console.log("Toggled to: ", newMode ? "Light Mode" : "Dark Mode");
  };
  

  return (
    <button onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
