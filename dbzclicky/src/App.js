import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {

  state = {
    characters,
    score: 0
  }

  scoringThing = () => {
    
  }

  render() {
    return (
      <Wrapper>
          {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                race={character.race}
                onClick={}
              />
            )
          )}
      </Wrapper>
    );
  }
}

export default App;
