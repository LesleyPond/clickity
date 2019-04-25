import React from 'react';
import './Scores.css';

function Scores(props) {
return(
<>
<div className="alignCenter">
  <span className="score">Current Score:{props.score}</span>
  
  <span className="bestScore">Your Best Score:{props.topScore}</span>
  </div>
</>
)
}

export default Scores;
