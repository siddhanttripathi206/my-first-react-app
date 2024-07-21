import React from 'react';
import './SignInButton.css';

const SignInButton = ({ platform, icon, color }) => {
  return (
    <button className={`sign-in-button ${platform.toLowerCase()}`}>
      <img src={icon} alt={`${platform} icon`} />
      Sign in with {platform}
    </button>
  );
};

export default SignInButton;