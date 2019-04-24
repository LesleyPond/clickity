import React from 'react';
import './Header.css';

function Header(props) {
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand" href="#">Clickity!</div>
  <span className="navbar-text">Current Score:{props.score}</span>
  <span className="navbar-text">Your Best Score:{props.topScore}</span>
</nav>
)
}

export default Header;
