import React from 'react';
import './App.css';
import Scores from './components/Scores/Scores';
import CharacterContainer from './components/characterContainer/CharacterContainer'
import CharacterArray from './CharacterArray.json';
import Character from './components/characters/Character';
import './App.css';


const clickedArray =[]
class App extends React.Component {
  state={
    CharacterArray,
    topScore: 0,
    score: 0,
    animate: ""
  }

  shuffleArray = () =>{
    let newOrder = this.state.CharacterArray
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
  }
  this.setState({
    CharacterArray: newOrder,
  })
  
  };
clicked = (id) => {
  if(this.state.topScore === 12){
    alert("You beat the game!!")
  }
  if(clickedArray.includes(id)){
    this.animate()
      if(this.state.score >= this.state.topScore){
         this.setState({
        topScore: this.state.score,
        score: 0
      })
      clickedArray.length = 0
     
    }
      else if(this.state.score < this.state.topScore){
      this.setState({
      score: 0
      })
      clickedArray.length = 0
      
    }
    
  }
  else{
    clickedArray.push(id);
    this.setState({
      score: this.state.score +1
    })
    console.log(this.state.score)
  }
}

animate = () =>{
  const animate = "animated";
  this.setState({
    animate: animate
  })
  setTimeout(this.deAnimate, 1000);
  
}
deAnimate = ()=>{
  const deAnimate = "";
    this.setState({
      animate: deAnimate
    })
}
  render(){
    return (
      <>
      
      <div className="container">
      <img alt="Bob's Burgers" className="mainPic mx-auto d-block" src='images/characters1.jpg'></img>
      </div>
      
      <CharacterContainer >
        
      <Scores topScore={this.state.topScore} score={this.state.score}/>
      {this.state.CharacterArray.map(character => (
        <div key={character.id} onClick={()=>this.clicked(character.id)}>
          <Character
            id={character.id}
            key={character.id}
            image={character.image}
            shuffleCards={this.shuffleArray}
            animate ={this.state.animate}
          />
          </div>
        ))}
        
      </CharacterContainer>
      </>
    )
  }
  
}

export default App;
