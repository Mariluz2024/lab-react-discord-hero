import discordBackground from './assets/discord-background.png';
import discordLogoWhite from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="discord-container">
      <header className="header">
        <img src={discordLogoWhite} alt="Discord Logo" className="discord-logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>

      <main className="main-content">
        <h1 className="main-heading">IMAGINE A<br/>PLACE...</h1>
        <p className="main-description">
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
        </p>
        <div className="buttons-container">
          <button className="btn download-btn">Download for Mac</button>
          <button className="btn open-btn">Open Discord in your browser</button>
        </div>
        <img src={discordBackground} alt="Discord Characters" className="background-image" />
      </main>
    </div>
  );
};

export default App;
