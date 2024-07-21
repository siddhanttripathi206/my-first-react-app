import React from 'react';
import SignInButton from './SignInButton';
import './App.css';

// Import icons
import appleIcon from './icons/apple.png';
import dribbbleIcon from './icons/dribbble.png';
import githubIcon from './icons/github.png';
import googleIcon from './icons/google.png';
import instagramIcon from './icons/instagram.png';
import linkedinIcon from './icons/linkedin.png';
import microsoftIcon from './icons/microsoft.png';
import pinterestIcon from './icons/pinterest.png';
import redditIcon from './icons/reddit.png';
import spotifyIcon from './icons/spotify.png';
import twitterIcon from './icons/twitter.png';

const App = () => {
  const platforms = [
    { name: 'Apple', icon: appleIcon },
    { name: 'Dribbble', icon: dribbbleIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Google', icon: googleIcon },
    { name: 'Instagram', icon: instagramIcon },
    { name: 'LinkedIn', icon: linkedinIcon },
    { name: 'Microsoft', icon: microsoftIcon },
    { name: 'Pinterest', icon: pinterestIcon },
    { name: 'Reddit', icon: redditIcon },
    { name: 'Spotify', icon: spotifyIcon },
    { name: 'Twitter', icon: twitterIcon },
  ];

  return (
    <div className="app">
      <div className="button-container">
        {platforms.map((platform) => (
          <SignInButton
            key={platform.name}
            platform={platform.name}
            icon={platform.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default App;