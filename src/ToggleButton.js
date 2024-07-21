import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      <div className="toggle-slider"></div>
    </div>
  );
}

export default ToggleButton;