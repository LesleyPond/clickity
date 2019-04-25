import React from 'react';
import './CharacterContainer.css';

function CharacterContainer(props){
    return(
        <div className="container">
        <div className="jumbotron bigContainer">
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
        
{props.children}
        

        </div>
        <div class="col-sm-1"></div>
        </div>
       </div>
       </div>
    )
}

export default CharacterContainer;