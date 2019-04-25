import React from 'react';
import './Character.css';

function Character(props){

    return(
        <div>
        <img alt="Character" src={props.image} className={`characterImage ${props.clickedOrNot}`}onClick={props.shuffleCards}/>
        </div>
    )
  
}

export default Character;