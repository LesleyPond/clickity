import React from 'react';
import './CharacterContainer.css';

function CharacterContainer(props){
    return(
        <div className="container">
        <div className="jumbotron bigContainer">
{props.children}
       </div>
       </div>
    )
}

export default CharacterContainer;