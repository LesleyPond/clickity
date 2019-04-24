import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CharacterContainer from './components/characterContainer/CharacterContainer'
import CharacterArray from './CharacterArray.json';
import Character from './components/characters/Character';



class App extends React.Component {
  state={
    CharacterArray,
    topScore: 0,
    score: 0
  }

  shuffleArray = () =>{
    let newOrder = this.state.CharacterArray
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
  }
  console.log(newOrder)
  this.setState({
    CharacterArray: newOrder,
    topScore: this.state.topScore,
    score: this.state.score
  })
  };

  render(){
    return (
      <>
      <Header topScore={this.state.topScore} score={this.state.score}/>
      <CharacterContainer>
      {this.state.CharacterArray.map(character => (
          <Character
            id={character.id}
            key={character.id}
            image={character.image}
            shuffleCards={this.shuffleArray}
          />
        ))}
      </CharacterContainer>
      </>
    )
  }
  
}

export default App;
